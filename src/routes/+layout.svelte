<script lang="ts">
	import type { Snippet } from "svelte";
	
	import "../app.css";

	let { children }: { children: Snippet } = $props();
</script>

<main class="container mx-auto md:w-[720px] m-12 px-8">
	{@render children()}
</main>
