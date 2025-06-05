<script lang="ts">
	import {
		Building2,
		Code,
		Database,
		Frame,
		Github,
		Globe,
		Mail,
		MessageCircle,
		Rss,
		Smartphone,
		SquareArrowOutUpRight,
		Twitter,
		Wrench,
	} from "lucide-svelte";
</script>

<section class="bg-sky-800 text-white text-center">
	<a href="/"
		><img
			src="./avatar.jpg"
			alt="[]"
			class="w-48 mx-auto rounded-full shadow"
		/></a
	>
	<div class="mt-6">
		<h1 class="font-bold text-3xl mb-4">Ronald Nababan</h1>
		<p>Freelance Programmer</p>
	</div>
</section>

<section>
	<div class="section-container">
		<h3 class="section-title">Area of Expertise</h3>
		<div class="grid md:grid-cols-2 gap-4">
			<div class="card">
				<div class="card-title">
					<Globe />
					<span>Web Programming</span>
				</div>
			</div>
			<div class="card">
				<div class="card-title">
					<Smartphone />
					<span>Mobile Programming</span>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="bg-zinc-50">
	<div class="section-container">
		<h3 class="section-title">Technical Skills</h3>
		<div class="grid md:grid-cols-2 gap-4">
			<div class="card">
				<div class="card-title">
					<Code size={16} />
					<span>Programming</span>
				</div>
				<div class="card-content">
					<ul>
						<li>PHP</li>
						<li>JavaScript</li>
						<li>Python</li>
						<li>Java</li>
						<li>Dart</li>
					</ul>
				</div>
			</div>
			<div class="card">
				<div class="card-title">
					<Frame size={16} />
					<span>Frameworks</span>
				</div>
				<div class="card-content">
					<ul>
						<li>Laravel</li>
						<li>Svelte/SvelteKit</li>
						<li>Prisma</li>
						<li>ExpressJS</li>
						<li>Flutter</li>
					</ul>
				</div>
			</div>
			<div class="card">
				<div class="card-title">
					<Database size={16} />
					<span>Databases</span>
				</div>
				<div class="card-content">
					<ul>
						<li>PostgreSQL</li>
						<li>MariaDB/MySQL</li>
						<li>sqlite</li>
					</ul>
				</div>
			</div>
			<div class="card">
				<div class="card-title">
					<Wrench size={16} />
					<span>Tools</span>
				</div>
				<div class="card-content">
					<ul>
						<li>Linux</li>
						<li>Docker</li>
						<li>git</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="section-container">
		<h3 class="section-title">Projects</h3>
		<div class="grid md:grid-cols-3 gap-4">
			<div class="card">
				<div class="flex justify-between items-center gap-2">
					<div class="inline-flex items-center gap-1">
						<img
							src="https://www.hetanews.com/favicon.ico"
							width="16px"
							alt="[]"
						/>
						<span>Heta News</span>
					</div>
					<a href="https://www.hetanews.com" target="_blank"
						><SquareArrowOutUpRight size={14} /></a
					>
				</div>
			</div>
			<div class="card">
				<div class="flex justify-between items-center gap-2">
					<div class="inline-flex items-center gap-1">
						<img src="https://fokus24.id/favicon.ico" width="16px" alt="[]" />
						<span>Fokus24</span>
					</div>
					<a href="https://fokus24.id" target="_blank"
						><SquareArrowOutUpRight size={14} /></a
					>
				</div>
			</div>
			<div class="card">
				<div class="flex justify-between items-center gap-2">
					<div class="inline-flex items-center gap-1">
						<img
							src="https://kilasutama.com/favicon.ico"
							width="16px"
							alt="[]"
						/>
						<span>Kilas Utama</span>
					</div>
					<a href="https://kilasutama.com" target="_blank"
						><SquareArrowOutUpRight size={14} /></a
					>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="bg-zinc-50">
	<div class="section-container">
		<h3 class="section-title">Let's Connect</h3>
		<div class="text-center mb-6">
			Do you have any questions regarding website and application development?
			Let's discuss first!
		</div>
		<div class="flex justify-center items-center gap-4">
			<a
				href="mailto:ronsen@startrek.or.id"
				class="btn btn-primary inline-flex items-center gap-2"
				><Mail /><span>Email me</span></a
			>
			<a
				href="https://wa.me/6281319479396"
				class="btn btn-success inline-flex items-center gap-2"
				><MessageCircle /><span>WhatsApp</span></a
			>
		</div>
	</div>
</section>

<section class="bg-zinc-900 text-white">
	<div class="section-container">
		<div class="flex justify-center items-center gap-4">
			<a href="https://sintaks.web.id" target="_blank"
				><Building2 size={18} /></a
			>
			<a href="https://echo.sintaks.web.id" target="_blank"><Rss size={18} /></a
			>
			<a href="https://github.com/ronsen" target="_blank"
				><Github size={18} /></a
			>
			<a href="https://x.com/rnldnbbn" target="_blank"><Twitter size={18} /></a>
		</div>
	</div>
</section>
