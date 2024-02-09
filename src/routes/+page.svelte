<script lang="ts">
    import Portfolios from '$lib/components/portfolios.svelte';
    import Skills from '$lib/components/skills.svelte';
    import Socials from '$lib/components/socials.svelte';
</script>

<svelte:head>
	<title>Ronald Nababan</title>
</svelte:head>

<a href="/"><img src="./avatar.jpg" alt="[]" class="w-48 mx-auto mb-3 rounded-full shadow-lg"></a>

<div class="text-center">
	<h1 class="title text-4xl font-semibold mb-3 text-zinc-100"><a href="/">Ronald Nababan</a></h1>

	<div class="mb-6">
		I reside in Pematangsiantar, Indonesia and work as a freelance 
		programmer with extensive experience in creating software, websites,
		and mobile applications.  Additionally, I am passionate about 
		technology, photography, and videography.
	</div>

	<div class="flex justify-center mb-6">
		<a href="https://wa.me/6281319479396" class="w-full text-xl font-bold border border-amber-600 hover:border-amber-700 rounded-full p-4 text-center bg-amber-600 hover:bg-amber-700 text-zinc-100 hover:text-zinc-50 transition ease-out duration-300">
			Hire me!
		</a>
	</div>
</div>

<Portfolios />

<Skills />

<Socials />

<div class="flex justify-center text-gray-700 my-6">
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
		<path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
	</svg>
</div>