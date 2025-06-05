<script lang="ts">
	import {Globe, Smartphone} from "lucide-svelte";
</script>

<section>
	<div class="section-container">
		<h3 class="section-title">Area of Expertise</h3>
		<div class="grid md:grid-cols-2 gap-4">
			<div class="card">
				<div class="card-title">
					<Globe/>
					<span>Web Programming</span>
				</div>
				<div class="card-content">
					Proficient in developing and maintaining web applications using modern
					programming languages and frameworks. Skilled in writing clean,
					efficient code, optimizing application performance, and ensuring
					smooth functionality across different platforms and devices.
				</div>
			</div>
			<div class="card">
				<div class="card-title">
					<Smartphone/>
					<span>Mobile Programming</span>
				</div>
				<div class="card-content">
					Skilled in building responsive and high-performance mobile
					applications. Experienced in using modern frameworks and languages to
					create user-friendly, efficient, and scalable mobile solutions.
				</div>
			</div>
		</div>
	</div>
</section>
