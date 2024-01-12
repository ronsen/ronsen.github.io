<script lang="ts">
	import Fa from 'svelte-fa';
	import {
		faChevronDown,
		faChevronRight,
		faLink
	} from '@fortawesome/free-solid-svg-icons';

	let show = false;
</script>

<div class="flex flex-col gap-4 text-gray-800 pb-2 mb-2">
	<div class="flex flex-col gap-4 text-gray-800">
		<button 
			class="flex justify-center items-center gap-2 font-bold border border-blue-600 hover:border-blue-700 rounded-full p-2 text-center bg-blue-600 hover:bg-blue-700 text-white transition ease-out duration-300"
			on:click|preventDefault={() => show = !show}
		>
			<span>Portfolios</span>
			<Fa icon={faChevronDown} />
		</button>
	</div>

	{#if show}
	<div>
		<div class="flex justify-between items-center gap-3 text-white p-3 hover:bg-zinc-800">
			<div class="flex justify-start items-center gap-3">
				<img src="./hetanews.jpg" alt="Heta News" class="w-16 h-16 object-cover rounded-lg">
				<div>
					<a href="https://www.hetanews.com/" class="font-bold">Heta News</a>
					<p>Media <em>online</em> Sumatera Utara</p>
				</div>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<div class="flex justify-between items-center gap-3 text-white p-3 hover:bg-zinc-800">
			<div class="flex justify-start items-center gap-3">
				<Fa icon={faLink} />
				<a href="https://m.hetanews.com/" class="font-bold">Mobile version</a>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<div class="flex justify-between items-center gap-3 text-white p-3 hover:bg-zinc-800">
			<div class="flex justify-start items-center gap-3">
				<img src="./popup.png" alt="Popup This Video" class="w-16 h-16 object-cover rounded-lg">
				<div>
					<a href="https://addons.mozilla.org/en-US/firefox/addon/popup-this-video/" class="font-bold">Popup This Video</a>
					<p>Popping up a small video window</p>
				</div>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<div class="flex justify-between items-center gap-3 text-white p-3 hover:bg-zinc-800">
			<div class="flex justify-start items-center gap-3">
				<img src="./bibel.jpg" alt="Bibel" class="w-16 h-16 object-cover rounded-lg">
				<div>
					<a href="https://play.google.com/store/apps/details?id=xyz.sintaks.bibel" class="font-bold">Bibel</a>
					<p>Alkitab bahasa Batak Toba</p>
				</div>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<div class="flex justify-between items-center gap-3 text-white p-3 hover:bg-zinc-800">
			<div class="flex justify-start items-center gap-3">
				<img src="./ayatacak.jpg" alt="Ayat Acak Alkitab" class="w-16 h-16 object-cover rounded-lg">
				<div>
					<a href="https://ayatacak.vercel.app/" class="font-bold">Ayat Acak Alkitab</a>
					<p>Ayat emas Alkitab secara acak</p>
				</div>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<div class="flex justify-between items-center gap-3 text-white p-3 hover:bg-zinc-800">
			<div class="flex justify-start items-center gap-3">
				<Fa icon={faLink} />
				<a href="https://www.barakconsultant.com/" class="font-bold">Barak Consultant Services</a>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<div class="flex justify-between items-center gap-3 text-white p-3 hover:bg-zinc-800">
			<div class="flex justify-start items-center gap-3">
				<Fa icon={faLink} />
				<a href="https://fokus24.id/" class="font-bold">Fokus24.id</a>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<div class="flex justify-between items-center gap-3 text-white p-3 hover:bg-zinc-800">
			<div class="flex justify-start items-center gap-3">
				<Fa icon={faLink} />
				<a href="https://s.id/repak" class="font-bold">Repak Photography</a>
			</div>
			<Fa icon={faChevronRight} />
		</div>

		<div class="flex justify-between items-center gap-3 text-white p-3 hover:bg-zinc-800">
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