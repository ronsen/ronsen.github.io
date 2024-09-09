<script lang="ts">
	import Portfolios from "$lib/components/portfolios.svelte";
	import Skills from "$lib/components/skills.svelte";
	import Socials from "$lib/components/socials.svelte";
</script>

<svelte:head>
	<title>Ronald Nababan</title>
</svelte:head>

<a href="/"
	><img
		src="./avatar.jpg"
		alt="[]"
		class="w-48 mx-auto mb-3 rounded-full shadow-lg"
	/></a
>

<section class="text-center">
	<h1 class="title text-4xl font-semibold mb-3 text-zinc-100">
		<a href="/">Ronald Nababan</a>
	</h1>

	<div class="mb-6">
		Saya seorang programmer lepas yang memiliki pengalaman luas dalam
		pembuatan perangkat lunak, situs web, dan aplikasi mobile. Selain itu,
		saya juga memiliki minat besar pada teknologi, fotografi, dan
		videografi.
	</div>

	<div class="flex justify-center mb-6">
		<a
			href="https://wa.me/6281319479396"
			class="w-full text-xl font-bold border border-green-600 hover:border-green-700 rounded-full p-4 text-center bg-green-600 hover:bg-green-700 text-zinc-100 hover:text-zinc-50 transition ease-out duration-300"
		>
			Ngobrol dulu!
		</a>
	</div>
</section>

<Portfolios />

<Skills />

<Socials />
