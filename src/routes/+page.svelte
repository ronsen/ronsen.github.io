<script lang="ts">
	import Fa from 'svelte-fa';
	import {
		faEnvelope,
		faPhone,
		faInbox
	} from '@fortawesome/free-solid-svg-icons';
	import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

    import Portfolios from '$lib/components/portfolios.svelte';
    import Skills from '$lib/components/skills.svelte';
    import Links from '$lib/components/links.svelte';
</script>

<svelte:head>
	<title>Ronald Nababan</title>
</svelte:head>

<a href="/"><img src="./avatar.jpg" alt="[]" class="w-48 mx-auto mb-3 rounded-full shadow-lg"></a>

<div class="text-center">
	<h1 class="title text-3xl font-semibold mb-3"><a href="/">Ronald Nababan</a></h1>

	<div class="mb-3">
		I reside in Pematangsiantar, Indonesia and work as a freelance 
		programmer with extensive experience in creating software, websites,
		and mobile applications.  Additionally, I am passionate about 
		technology, photography, and videography.
	</div>

	<div class="mb-3">Click or tap any button below if you want to hire me or ask me questions.</div>

	<div class="mb-3">
		<div class="inline-flex gap-6 text-lg">
			<a href="mailto:ronsen@startrek.or.id" title="Send me an email"><Fa icon={faEnvelope} /></a>
			<a href="tel:+6281319479396" title="Call me"><Fa icon={faPhone} /></a>
			<a href="https://wa.me/6281319479396" title="Message me via WhatsApp"><Fa icon={faWhatsapp} /></a>
			<a href="https://sintaks.vercel.app/contact" title="Send me a message"><Fa icon={faInbox} /></a>
		</div>
	</div>
</div>

<Portfolios />

<Skills />

<Links />