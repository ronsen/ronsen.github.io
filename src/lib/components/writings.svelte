<script>
	import { onMount } from "svelte";

	const url = "https://echo.sintaks.web.id/feed";
	let feedItems = $state();
	
	onMount(() => {
		fetchArticles();
	});

	async function fetchArticles() {
		try {
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
		} finally {
		}
	}
</script>

<section>
	<div class="section-container">
		<h3 class="section-title">Writings</h3>

		{#each feedItems as item}
			<div
				class="flex justify-between gap-4 items-center border-b border-zinc-300 mb-2 pb-2"
			>
				<a
					href={item.link}
					target="_blank"
					class="block w-full"
					>{item.title}</a
				>

				<div class="text-xs">
					{new Date(item.pubDate).toLocaleDateString()}
				</div>
			</div>
		{/each}
	</div>
</section>
