<script lang="ts">
	import Fa from 'svelte-fa';
	import {
		faChevronDown,
		faChevronRight,
		faLink
	} from '@fortawesome/free-solid-svg-icons';

	let show = false;

	function go(url: string) {
		window.location.href = url;
	}
</script>

<div class="flex flex-col gap-4">
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
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer" on:click={() => go('https://www.hetanews.com/')}>
			<div class="flex justify-start items-center gap-3">
				<img src="./hetanews.jpg" alt="Heta News" class="w-16 h-16 object-cover rounded-lg">
				<div>
					<a href="https://www.hetanews.com/" class="font-bold">Heta News</a>
					<p>Media <em>online</em> Sumatera Utara</p>
				</div>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer" on:click={() => go('https://play.google.com/store/apps/details?id=com.hetanews')}>
			<div class="flex justify-start items-center gap-3">
				<Fa icon={faLink} />
				<a href="https://play.google.com/store/apps/details?id=com.hetanews" class="font-bold">Android version</a>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer" on:click={() => go('https://m.hetanews.com/')}>
			<div class="flex justify-start items-center gap-3">
				<Fa icon={faLink} />
				<a href="https://m.hetanews.com/" class="font-bold">Mobile version</a>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer" on:click={() => go('https://addons.mozilla.org/en-US/firefox/addon/popup-this-video/')}>
			<div class="flex justify-start items-center gap-3">
				<img src="./popup.png" alt="Popup This Video" class="w-16 h-16 object-cover rounded-lg">
				<div>
					<a href="https://addons.mozilla.org/en-US/firefox/addon/popup-this-video/" class="font-bold">Popup This Video</a>
					<p>Popping up a small video window</p>
				</div>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer" on:click={() => go('https://ayatacak.vercel.app/')}>
			<div class="flex justify-start items-center gap-3">
				<img src="./ayatacak.jpg" alt="Ayat Acak Alkitab" class="w-16 h-16 object-cover rounded-lg">
				<div>
					<a href="https://ayatacak.vercel.app/" class="font-bold">Ayat Acak Alkitab</a>
					<p>Ayat emas Alkitab secara acak</p>
				</div>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer" on:click={() => go('https://www.barakconsultant.com/')}>
			<div class="flex justify-start items-center gap-3">
				<Fa icon={faLink} />
				<a href="https://www.barakconsultant.com/" class="font-bold">Barak Consultant Services</a>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer" on:click={() => go('https://fokus24.id/')}>
			<div class="flex justify-start items-center gap-3">
				<Fa icon={faLink} />
				<a href="https://fokus24.id/" class="font-bold">Fokus24.id</a>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer" on:click={() => go('https://sada.web.id/')}>
			<div class="flex justify-start items-center gap-3">
				<Fa icon={faLink} />
				<a href="https://sada.web.id/" class="font-bold">Kasir</a>
				<div class="text-sm text-gray-400">
					Aplikasi Kasir Online
				</div>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer" on:click={() => go('https://hotel.arsak.web.id/')}>
			<div class="flex justify-start items-center gap-3">
				<Fa icon={faLink} />
				<a href="https://hotel.arsak.web.id/" class="font-bold">Hotel</a>
				<div class="text-sm text-gray-400">
					Sistem Informasi Hotel (Demo)
				</div>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer" on:click={() => go('https://rental.arsak.web.id/')}>
			<div class="flex justify-start items-center gap-3">
				<Fa icon={faLink} />
				<a href="https://rental.arsak.web.id/" class="font-bold">Rental</a>
				<div class="text-sm text-gray-400">
					Sistem Rental Kendaraan Bermotor (Demo)
				</div>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="flex justify-between items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer" on:click={() => go('https://s.id/guritan')}>
			<div class="flex justify-start items-center gap-3">
				<Fa icon={faLink} />
				<a href="https://s.id/guritan" class="font-bold">Guritan</a>
				<div class="text-sm text-gray-400">
					Markdown editor for Blogger
				</div>
			</div>
			<Fa icon={faChevronRight} />
		</div>
	</div>
	{/if}
</div>