<script lang="ts">
	import Fa from 'svelte-fa';
	import {
		faChevronDown,
		faChevronRight,
		faLink
	} from '@fortawesome/free-solid-svg-icons';

	let show = true;

	function go(url: string) {
		window.location.href = url;
	}
</script>

<section class="flex flex-col gap-4">
	<div class="flex flex-col gap-4">
		<button 
			class="flex justify-center items-center gap-2 font-bold border border-zinc-600 hover:border-zinc-700 rounded-full p-2 text-center bg-zinc-600 hover:bg-zinc-700 text-zinc-100 transition ease-out duration-300"
			on:click|preventDefault={() => show = !show}
		>
			<span>Portfolios</span>
			<Fa icon={faChevronDown} />
		</button>
	</div>

	{#if show}
	<div>
		<div class="grid grid-cols-2 gap-4 mb-6 text-black">
			<div class="border border-zinc-800 bg-zinc-100 shadow-lg rounded-md ">
				<a href="https://www.hetanews.com/">
					<div class="flex justify-center items-center h-32 bg-amber-100 rounded-t-md">
						<img src="./hetanews.png" alt="Heta News" class="w-16">
					</div>
				</a>
				<div class="p-4">
					<h2 class="font-bold"><a href="https://www.hetanews.com/">Heta News</a></h2>
					<div class="text-sm mb-2">Media online Sumatera Utara</div>
					<div class="inline-flex flex-wrap gap-3">
						<div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">Laravel</div>
						<div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">mysql</div>
					</div>
				</div>
			</div>
			<div class="border border-zinc-800 bg-zinc-100 shadow-lg rounded-md">
				<a href="https://play.google.com/store/apps/details?id=com.hetanews">
					<div class="flex justify-center items-center h-32 bg-cyan-100 rounded-t-md">
						<img src="./hetanews.png" alt="Heta News" class="w-16">
					</div>
				</a>
				<div class="p-4">
					<h2 class="font-bold"><a href="https://play.google.com/store/apps/details?id=com.hetanews">Heta News (Android)</a></h2>
					<div class="text-sm mb-2">Media online Sumatera Utara</div>
					<div class="inline-flex flex-wrap gap-3">
						<div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">Laravel</div>
						<div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">mysql</div>
						<div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">Flutter</div>
					</div>
				</div>
			</div>
			<div class="border border-zinc-800 bg-zinc-100 shadow-lg rounded-md">
				<a href="https://fokus24.id/">
					<div class="flex justify-center items-center h-32 bg-red-100 rounded-t-md">
						<img src="./fokus24.png" alt="Heta News" class="w-16">
					</div>
				</a>
				<div class="p-4">
					<h2 class="font-bold"><a href="https://fokus24.id/">Fokus24.id</a></h2>
					<div class="text-sm mb-2">Tepercaya dan Akurat</div>
					<div class="inline-flex flex-wrap gap-3">
						<div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">Laravel</div>
						<div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">mysql</div>
					</div>
				</div>
			</div>
			<div class="border border-zinc-800 bg-zinc-100 shadow-lg rounded-md">
				<a href="https://addons.mozilla.org/en-US/firefox/addon/popup-this-video/">
					<div class="flex justify-center items-center h-32 bg-gray-300 rounded-t-md">
						<img src="./popup.png" alt="Heta News" class="w-12">
					</div>
				</a>
				<div class="p-4">
					<h2 class="font-bold"><a href="https://addons.mozilla.org/en-US/firefox/addon/popup-this-video/">Popup This Video</a></h2>
					<div class="text-sm mb-2">A browser extension that displays popups on videos</div>
					<div class="inline-flex flex-wrap gap-3">
						<div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">JavaScript</div>
						<div class="bg-zinc-300 px-2 py-1 rounded-lg text-xs">Firefox</div>
					</div>
				</div>
			</div>
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg text-yellow-200" on:click={() => go('https://demo.sintaks.web.id/')}>
			<div class="flex justify-start items-center gap-3">
				<Fa icon={faLink} />
				<div>
					<a href="https://demo.sintaks.web.id/" class="font-bold">Demo</a>
					<div class="text-yellow-400">
						<p class="text-sm">Try this first!</p>
						<p class="text-xs text-gray-500">Laravel, FilamentPHP, sqlite</p>
					</div>
				</div>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg" on:click={() => go('https://www.barakconsultant.com/')}>
			<div class="flex justify-start items-center gap-3">
				<Fa icon={faLink} />
				<div>
					<a href="https://www.barakconsultant.com/" class="font-bold">Barak Consultant Services</a>
					<div class="text-gray-400">
						<p class="text-sm">A company operating in the technology and information sector</p>
						<p class="text-xs text-gray-500">PHP</p>
					</div>
				</div>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg" on:click={() => go('https://gereja.sintaks.web.id/')}>
			<div class="flex justify-start items-center gap-3">
				<Fa icon={faLink} />
				<div>
					<a href="https://gereja.sintaks.web.id/" class="font-bold">Gereja</a>
					<div class="text-gray-400">
						<p class="text-sm">Sistem Informasi Gereja</p>
						<p class="text-xs text-gray-500">Laravel, FilamentPHP, PostgreSQL</p>
					</div>
				</div>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg" on:click={() => go('https://sarhap.sintaks.web.id/')}>
			<div class="flex justify-start items-center gap-3">
				<Fa icon={faLink} />
				<div>
					<a href="https://sarhap.sintaks.web.id/" class="font-bold">Sarhap</a>
					<div class="text-gray-400">
						<p class="text-sm">Multi Vendor e-Commerce</p>
						<p class="text-xs text-gray-500">Laravel, FilamentPHP, PostgreSQL</p>
					</div>
				</div>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg" on:click={() => go('https://ayatacak.vercel.app/')}>
			<div class="flex justify-start items-center gap-3">
				<Fa icon={faLink} />
				<div>
					<a href="https://ayatacak.vercel.app/" class="font-bold">Ayat Acak Alkitab</a>
					<div class="text-gray-400">
						<p class="text-sm">Ayat emas Alkitab secara acak</p>
						<p class="text-xs text-gray-500">SvelteKit, Vercel</p>
					</div>
				</div>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg" on:click={() => go('https://s.id/guritan')}>
			<div class="flex justify-start items-center gap-3">
				<Fa icon={faLink} />
				<div>
					<a href="https://s.id/guritan" class="font-bold">Guritan</a>
					<div class="text-gray-400">
						<p class="text-sm">Markdown editor for Blogger</p>
						<p class="text-xs text-gray-500">SvelteKit, Google Blogger API, Vercel</p>
					</div>
				</div>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer rounded-lg" on:click={() => go('https://sintaks.web.id/')}>
			<div class="flex justify-start items-center gap-3">
				<Fa icon={faLink} />
				<div>
					<a href="https://sintaks.web.id/" class="font-bold">Blog</a>
					<div class="text-gray-400">
						<p class="text-sm">My personal weblog</p>
						<p class="text-xs text-gray-500">SvelteKit, Prisma, PostgreSQL</p>
					</div>
				</div>
			</div>
			<Fa icon={faChevronRight} />
		</div>
	</div>
	{/if}
</section>