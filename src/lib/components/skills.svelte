<script lang="ts">
	import Fa from "svelte-fa";
	import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

	let show = false;
</script>

<div class="flex flex-col gap-4 text-zinc-800 mt-3">
	<button 
		class="flex justify-center items-center gap-2 cursor-pointer font-bold border border-zinc-600 hover:border-zinc-700 rounded-full p-2 text-center bg-zinc-600 hover:bg-zinc-700 text-zinc-100 transition ease-out duration-300"
		on:click|preventDefault={() => show = !show}
	>
		<span>Skills</span>
		<Fa icon={faChevronDown} />
	</button>

	{#if show}
	<div class="flex justify-center flex-wrap gap-4 text-sm">
		<div class="bg-white rounded-full px-3">android</div>
		<div class="bg-white rounded-full px-3">bootstrap css</div>
		<div class="bg-white rounded-full px-3">database</div>
		<div class="bg-white rounded-full px-3">docker</div>
		<div class="bg-white rounded-full px-3">express</div>
		<div class="bg-white rounded-full px-3">flutter</div>
		<div class="bg-white rounded-full px-3">java</div>
		<div class="bg-white rounded-full px-3">javascript</div>
		<div class="bg-white rounded-full px-3">laravel</div>
		<div class="bg-white rounded-full px-3">livewire</div>
		<div class="bg-white rounded-full px-3">linux</div>
		<div class="bg-white rounded-full px-3">mysql</div>
		<div class="bg-white rounded-full px-3">prisma</div>
		<div class="bg-white rounded-full px-3">php</div>
		<div class="bg-white rounded-full px-3">postgresql</div>
		<div class="bg-white rounded-full px-3">python</div>
		<div class="bg-white rounded-full px-3">sqlite</div>
		<div class="bg-white rounded-full px-3">sveltekit</div>
		<div class="bg-white rounded-full px-3">tailwind css</div>
		<div class="bg-white rounded-full px-3">typescript</div>
	</div>
	{/if}
</div>
