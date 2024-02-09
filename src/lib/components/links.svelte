<script lang="ts">
	import Fa from 'svelte-fa';
	import { faExternalLink, faHouseChimney } from '@fortawesome/free-solid-svg-icons';
	import { 
		faFacebook, 
		faGithub, 
		faLinkedinIn, 
		faTwitter, 
		faYoutube 
	} from '@fortawesome/free-brands-svg-icons';
</script>

<div class="flex flex-col gap-4 text-gray-800 text-sm mt-6">
	<div class="border border-amber-300 hover:border-amber-400 hover:font-bold rounded-full bg-amber-300 p-2 text-center hover:bg-amber-400 text-black font-semibold transition ease-out duration-300">
		<div class="flex justify-between items-center px-3">
			<Fa icon={faHouseChimney} />
			<a href="https://i-temp.blogspot.com/" class="block">Main Blog</a>
			<Fa icon={faExternalLink} />
		</div>
	</div>

	<div class="border border-amber-100 hover:border-amber-200 hover:font-bold rounded-full bg-amber-100 p-2 text-center hover:bg-amber-200 text-black font-semibold transition ease-out duration-300">
		<div class="flex justify-between items-center px-3">
			<Fa icon={faHouseChimney} />
			<a href="https://sintaks.vercel.app/" class="block">Second Blog</a>
			<Fa icon={faExternalLink} />
		</div>
	</div>

	<div class="border border-white rounded-full bg-white p-2 text-center hover:bg-green-800 hover:border-green-800 hover:text-white transition ease-out duration-300">
		<div class="flex justify-between items-center px-3">
			<Fa icon={faGithub} />
			<a href="https://github.com/ronsen" class="block">Github</a>
			<Fa icon={faExternalLink} />
		</div>
	</div>

	<div class="border border-white rounded-full bg-white p-2 text-center hover:bg-green-800 hover:border-green-800 hover:text-white transition ease-out duration-300">
		<div class="flex justify-between items-center px-3">
			<Fa icon={faLinkedinIn} />
			<a href="https://www.linkedin.com/in/ronaldnababan" class="block">LinkedIn</a>
			<Fa icon={faExternalLink} />
		</div>
	</div>

	<div class="border border-white rounded-full bg-white p-2 text-center hover:bg-green-800 hover:border-green-800 hover:text-white transition ease-out duration-300">
		<div class="flex justify-between items-center px-3">
			<Fa icon={faYoutube} />
			<a href="https://www.youtube.com/@RonaldNababan" class="block">YouTube</a>
			<Fa icon={faExternalLink} />
		</div>
	</div>

	<div class="border border-white rounded-full bg-white p-2 text-center hover:bg-green-800 hover:border-green-800 hover:text-white transition ease-out duration-300">
		<div class="flex justify-between items-center px-3">
			<Fa icon={faFacebook} />
			<a href="https://www.facebook.com/ronsen" class="block">Facebook</a>
			<Fa icon={faExternalLink} />
		</div>
	</div>

	<div class="border border-white rounded-full bg-white p-2 text-center hover:bg-green-800 hover:border-green-800 hover:text-white transition ease-out duration-300">
		<div class="flex justify-between items-center px-3">
			<Fa icon={faTwitter} />
			<a href="https://twitter.com/rnldnbbn" class="block">Twitter</a>
			<Fa icon={faExternalLink} />
		</div>
	</div>

	<div class="border border-red-600 hover:border-red-800 rounded-full p-2 text-center bg-red-600 hover:bg-red-800 text-white font-semibold hover:font-bold transition ease-out duration-300" data-aos="fade-up">
		<a href="https://www.dropbox.com/referrals/AAAUJkmp4mehkjjTm-vXa4LFV4jimr7Cyzw?src=global9" class="block">Get your free Dropbox here!</a>
	</div>
</div>
