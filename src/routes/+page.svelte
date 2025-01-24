<script lang="ts">
	import Portfolios from "$lib/components/portfolios.svelte";
	import Skills from "$lib/components/skills.svelte";
	import Socials from "$lib/components/socials.svelte";
	import Writings from "$lib/components/writings.svelte";
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
	<h1 class="title text-4xl font-semibold mb-6 text-zinc-100 rock-salt">
		<a href="/">Ronald Nababan</a>
	</h1>

	<div class="mb-6">
		I reside in Pematangsiantar, Indonesia and work as a freelance programmer
		with extensive experience in creating software, websites, and mobile
		applications. Additionally, I am passionate about technology, photography,
		and videography.
	</div>

	<div class="flex justify-center mb-6">
		<a
			href="https://wa.me/6281319479396"
			class="w-full text-xl font-bold border border-green-600 hover:border-green-700 rounded-full p-4 text-center bg-green-600 hover:bg-green-700 text-zinc-100 hover:text-zinc-50 transition ease-out duration-300"
		>
			Chat with me!
		</a>
	</div>
</section>

<Portfolios />

<Skills />

<Writings />

<Socials />
