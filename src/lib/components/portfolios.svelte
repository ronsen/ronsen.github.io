<script lang="ts">
	import Fa from "svelte-fa";
	import {
		faChevronDown,
		faChevronRight,
		faLink,
	} from "@fortawesome/free-solid-svg-icons";

	let show = $state(false);

	function go(url: string) {
		window.location.href = url;
	}
</script>

<section class="flex flex-col gap-4">
	<div class="flex flex-col gap-4">
		<button
			class="flex justify-center items-center gap-2 font-bold border border-zinc-600 hover:border-zinc-700 rounded-full p-2 text-center bg-zinc-600 hover:bg-zinc-700 text-zinc-100 transition ease-out duration-300"
			onclick={() => (show = !show)}
		>
			<span>Portfolios</span>
			<Fa icon={faChevronDown} />
		</button>
	</div>

	{#if show}
		<div>
			<div class="grid grid-cols-2 gap-4 mb-6 text-black">
				<div class="border border-zinc-800 bg-zinc-100 shadow-lg rounded-md">
					<a href="https://www.hetanews.com/">
						<div
							class="flex justify-center items-center h-32 bg-amber-100 rounded-t-md"
						>
							<img src="./hetanews.png" alt="Heta News" class="w-16" />
						</div>
					</a>
					<div class="p-4">
						<h2 class="font-bold">
							<a href="https://www.hetanews.com/">Heta News</a>
						</h2>
						<div class="text-sm mb-2">Media online Sumatera Utara</div>
						<div class="inline-flex flex-wrap gap-3">
							<div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">
								Laravel
							</div>
							<div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">mysql</div>
							<div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">
								Flutter
							</div>
						</div>
					</div>
				</div>

				<div class="border border-zinc-800 bg-zinc-100 shadow-lg rounded-md">
					<a href="https://fokus24.id/">
						<div
							class="flex justify-center items-center h-32 bg-red-100 rounded-t-md"
						>
							<img src="./fokus24.png" alt="Heta News" class="w-16" />
						</div>
					</a>
					<div class="p-4">
						<h2 class="font-bold">
							<a href="https://fokus24.id/">Fokus24.id</a>
						</h2>
						<div class="text-sm mb-2">Tepercaya dan Akurat</div>
						<div class="inline-flex flex-wrap gap-3">
							<div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">
								Laravel
							</div>
							<div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">mysql</div>
						</div>
					</div>
				</div>
			</div>

			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg text-yellow-200"
				onclick={() => go("https://demo.sintaks.web.id/")}
			>
				<div class="flex justify-start items-center gap-3">
					<Fa icon={faLink} />
					<div>
						<a href="https://demo.sintaks.web.id/" class="font-bold">Demo</a>
						<div class="text-yellow-400">
							<p class="text-sm">Coba ini dulu!</p>
							<p class="text-xs text-gray-500">
								Laravel, Livewire, FilamentPHP, sqlite
							</p>
						</div>
					</div>
				</div>
				<Fa icon={faChevronRight} />
			</div>

			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg"
				onclick={() => go("https://www.barakconsultant.com/")}
			>
				<div class="flex justify-start items-center gap-3">
					<Fa icon={faLink} />
					<div>
						<a href="https://www.barakconsultant.com/" class="font-bold"
							>Barak Consultant Services</a
						>
						<div class="text-gray-400">
							<p class="text-sm">
								Sebuah perusahaan yang bergerak di bidang teknologi dan
								informasi
							</p>
							<p class="text-xs text-gray-500">PHP</p>
						</div>
					</div>
				</div>
				<Fa icon={faChevronRight} />
			</div>

			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg"
				onclick={() =>
					go(
						"https://addons.mozilla.org/en-US/firefox/addon/popup-this-video/",
					)}
			>
				<div class="flex justify-start items-center gap-3">
					<Fa icon={faLink} />
					<div>
						<a
							href="https://addons.mozilla.org/en-US/firefox/addon/popup-this-video/"
							class="font-bold">Popup This Video</a
						>
						<div class="text-gray-400">
							<p class="text-sm">
								Ekstensi peramban web untuk menampilkan video <em>pop-up</em>
							</p>
							<p class="text-xs text-gray-500">JavaScript, Firefox, Chrome</p>
						</div>
					</div>
				</div>
				<Fa icon={faChevronRight} />
			</div>

			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg"
				onclick={() => go("https://marketplace.sintaks.web.id/")}
			>
				<div class="flex justify-start items-center gap-3">
					<Fa icon={faLink} />
					<div>
						<a href="https://marketplace.sintaks.web.id/" class="font-bold">Marketplace</a
						>
						<div class="text-gray-400">
							<p class="text-sm">Multi vendor online shop</p>
							<p class="text-xs text-gray-500">Laravel, FilamentPHP, PostgreSQL</p>
						</div>
					</div>
				</div>
				<Fa icon={faChevronRight} />
			</div>

			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg"
				onclick={() => go("https://kecilin.sintaks.web.id/")}
			>
				<div class="flex justify-start items-center gap-3">
					<Fa icon={faLink} />
					<div>
						<a href="https://kecilin.sintaks.web.id/" class="font-bold">Kecilin</a
						>
						<div class="text-gray-400">
							<p class="text-sm">Ngecilin gambar-gambar yang besar</p>
							<p class="text-xs text-gray-500">Laravel, Svelte</p>
						</div>
					</div>
				</div>
				<Fa icon={faChevronRight} />
			</div>

			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg"
				onclick={() => go("https://video.sintaks.web.id/")}
			>
				<div class="flex justify-start items-center gap-3">
					<Fa icon={faLink} />
					<div>
						<a href="https://video.sintaks.web.id/" class="font-bold">Video</a
						>
						<div class="text-gray-400">
							<p class="text-sm">Social Video Bookmarking</p>
							<p class="text-xs text-gray-500">Laravel, Svelte, sqlite</p>
						</div>
					</div>
				</div>
				<Fa icon={faChevronRight} />
			</div>

			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg"
				onclick={() => go("https://gokkon.sintaks.web.id/")}
			>
				<div class="flex justify-start items-center gap-3">
					<Fa icon={faLink} />
					<div>
						<a href="https://gokkon.sintaks.web.id/" class="font-bold">Gokkon</a
						>
						<div class="text-gray-400">
							<p class="text-sm">Undangan pernikahan gratis</p>
							<p class="text-xs text-gray-500">Laravel, FilamentPHP, sqlite</p>
						</div>
					</div>
				</div>
				<Fa icon={faChevronRight} />
			</div>

			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg"
				onclick={() => go("https://ayatacak.vercel.app/")}
			>
				<div class="flex justify-start items-center gap-3">
					<Fa icon={faLink} />
					<div>
						<a href="https://ayatacak.vercel.app/" class="font-bold"
							>Ayat Acak Alkitab</a
						>
						<div class="text-gray-400">
							<p class="text-sm">Ayat emas Alkitab secara acak</p>
							<p class="text-xs text-gray-500">SvelteKit, Vercel</p>
						</div>
					</div>
				</div>
				<Fa icon={faChevronRight} />
			</div>

			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg"
				onclick={() => go("https://guritan.vercel.app/")}
			>
				<div class="flex justify-start items-center gap-3">
					<Fa icon={faLink} />
					<div>
						<a href="https://guritan.vercel.app/" class="font-bold">Guritan</a>
						<div class="text-gray-400">
							<p class="text-sm">
								Penyunting <em>markdown</em> untuk Blogger
							</p>
							<p class="text-xs text-gray-500">
								SvelteKit, Google Blogger API, Vercel
							</p>
						</div>
					</div>
				</div>
				<Fa icon={faChevronRight} />
			</div>

			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg"
				onclick={() => go("https://sintaks.web.id/")}
			>
				<div class="flex justify-start items-center gap-3">
					<Fa icon={faLink} />
					<div>
						<a href="https://sintaks.web.id/" class="font-bold">Blog</a>
						<div class="text-gray-400">
							<p class="text-sm">Situs web pribadi</p>
							<p class="text-xs text-gray-500">SvelteKit, Prisma, PostgreSQL</p>
						</div>
					</div>
				</div>
				<Fa icon={faChevronRight} />
			</div>
		</div>
	{/if}
</section>
