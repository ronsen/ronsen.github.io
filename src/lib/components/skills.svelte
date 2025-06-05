<script lang="ts">
	import {Code, Database, Frame, Wrench} from "lucide-svelte";
</script>

<section class="bg-zinc-50">
	<div class="section-container">
		<h3 class="section-title">Technical Skills</h3>
		<div class="grid md:grid-cols-2 gap-4">
			<div class="card">
				<div class="card-title">
					<Code size={16}/>
					<span>Programming</span>
				</div>
				<div class="card-content">
					<ul>
						<li>PHP</li>
						<li>JavaScript</li>
						<li>Dart</li>
						<li>Python</li>
						<li>Java</li>
					</ul>
				</div>
			</div>
			<div class="card">
				<div class="card-title">
					<Frame size={16}/>
					<span>Frameworks</span>
				</div>
				<div class="card-content">
					<ul>
						<li>Laravel</li>
						<li>Svelte/SvelteKit</li>
						<li>Prisma</li>
						<li>ExpressJS</li>
						<li>Flutter</li>
						<li>TailwindCSS</li>
					</ul>
				</div>
			</div>
			<div class="card">
				<div class="card-title">
					<Database size={16}/>
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
					<Wrench size={16}/>
					<span>Tools</span>
				</div>
				<div class="card-content">
					<ul>
						<li>Linux</li>
						<li>Docker</li>
						<li>Mail server</li>
						<li>nginx</li>
						<li>git</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
