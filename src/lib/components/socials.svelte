<script lang="ts">
	import Fa from 'svelte-fa';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { 
		faFacebook, 
		faGithub, 
		faLinkedinIn, 
		faTwitter, 
		faYoutube,
		faBlogger,
		faInstagram
	} from '@fortawesome/free-brands-svg-icons';
</script>

<div class="flex justify-center gap-5 text-lg mt-6">
	<a href="mailto:ronsen@startrek.or.id" class="hover:text-zinc-50"><Fa icon={faEnvelope} /></a>
	<a href="https://sada.web.id/" class="text-amber-600 hover:text-amber-400"><Fa icon={faBlogger} /></a>
	<a href="https://github.com/ronsen" class="hover:text-zinc-50"><Fa icon={faGithub} /></a>
	<a href="https://www.facebook.com/ronsen" class="hover:text-zinc-50"><Fa icon={faFacebook} /></a>
	<a href="https://www.linkedin.com/in/ronaldnababan" class="hover:text-zinc-50"><Fa icon={faLinkedinIn} /></a>
	<a href="https://www.youtube.com/@RonaldNababan" class="hover:text-zinc-50"><Fa icon={faYoutube} /></a>
	<a href="https://www.instagram.com/ronaldnababan/" class="hover:text-zinc-50"><Fa icon={faInstagram} /></a>
	<a href="https://twitter.com/rnldnbbn" class="hover:text-zinc-50"><Fa icon={faTwitter} /></a>
</div>