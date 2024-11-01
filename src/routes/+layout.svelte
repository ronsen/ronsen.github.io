<script lang="ts">
	import "../app.css";

	let { children } = $props();
</script>

<main class="container mx-auto md:w-[720px] m-12 px-8">
	{@render children()}
</main>
