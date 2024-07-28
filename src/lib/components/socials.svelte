<script lang="ts">
	import Fa from 'svelte-fa';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { 
		faGithub, 
		faLinkedinIn, 
		faTwitter, 
		faBlogger,
	} from '@fortawesome/free-brands-svg-icons';
</script>

<section class="flex justify-center gap-5 text-lg mt-6">
	<a href="mailto:ronsen@startrek.or.id" class="hover:text-zinc-50"><Fa icon={faEnvelope} /></a>
	<a href="https://sintaks.web.id/" class="text-amber-600 hover:text-amber-400"><Fa icon={faBlogger} /></a>
	<a href="https://github.com/ronsen" class="hover:text-zinc-50"><Fa icon={faGithub} /></a>
	<a href="https://www.linkedin.com/in/ronaldnababan" class="hover:text-zinc-50"><Fa icon={faLinkedinIn} /></a>
	<a href="https://x.com/rnldnbbn" class="hover:text-zinc-50"><Fa icon={faTwitter} /></a>
</section>