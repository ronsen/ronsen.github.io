<script>
	import Fa from "svelte-fa";
	import {
		faChevronDown,
		faSpinner,
	} from "@fortawesome/free-solid-svg-icons";

	let show = $state(false);

	const url = "https://www.sintaks.web.id/feed";
	let feedItems = $state();
	let loading = $state(true);
	let error = $state();

	async function fetchArticles() {
		try {
			show = !show;

			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(
					`Failed to fetch RSS feed: ${response.statusText}`,
				);
			}

			const text = await response.text();
			const parser = new DOMParser();
			const xml = parser.parseFromString(text, "application/xml");

			if (xml.querySelector("parsererror")) {
				throw new Error("Error parsing RSS feed XML.");
			}

			const items = xml.querySelectorAll("item");

			feedItems = Array.from(items).map((item) => ({
				title: item.querySelector("title")?.textContent,
				link: item.querySelector("link")?.textContent,
				description: item.querySelector("description")?.textContent,
				pubDate: item.querySelector("pubDate")?.textContent,
			}));
		} catch (err) {
			if (err instanceof Error) {
				error = err.message;
			} else {
				error = err;
			}
		} finally {
			loading = false;
		}
	}
</script>

<section class="flex flex-col gap-4 text-zinc-800 mt-3">
	<button
		class="flex justify-center items-center gap-2 cursor-pointer font-bold border border-zinc-600 hover:border-zinc-700 rounded-full p-2 text-center bg-zinc-600 hover:bg-zinc-700 text-zinc-100 transition ease-out duration-300"
		onclick={fetchArticles}
	>
		<span>Writings</span>
		<Fa icon={faChevronDown} />
	</button>

	{#if show}
		<div>
			{#if loading}
				<div
					class="flex justify-start items-center gap-2 text-white/90"
				>
					<Fa icon={faSpinner} spin />
					<div>Fetching...</div>
				</div>
			{:else if error}
				<p class="text-white/90"><strong>Error:</strong> {error}</p>
			{:else if feedItems.length === 0}
				<p class="text-white/90">No feed items found.</p>
			{:else}
				{#each feedItems as item}
					<div
						class="flex justify-between gap-4 items-center border-b border-zinc-700 mb-2 pb-2"
					>
						<a
							href={item.link}
							target="_blank"
							class="text-white/80 hover:text-white/90 block w-full"
							>{item.title}</a
						>

						<div class="text-white/60 text-xs">
							{new Date(item.pubDate).toLocaleDateString()}
						</div>
					</div>
				{/each}
			{/if}
		</div>
	{/if}
</section>
