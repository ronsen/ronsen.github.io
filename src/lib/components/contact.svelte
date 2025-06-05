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

<section class="bg-zinc-50">
	<div class="section-container">
		<h3 class="section-title">Let's Connect</h3>
		<div class="text-center mb-6">
			Do you have any questions regarding website and application development?
			Let's discuss first!
		</div>
		<div class="grid md:grid-cols-2 gap-4">
			<a
				href="mailto:ronsen@startrek.or.id"
				class="btn btn-primary inline-flex items-center gap-2"
				><Mail size={16} /><span>Email me</span></a
			>
			<a
				href="https://wa.me/6281319479396"
				class="btn btn-success inline-flex items-center gap-2"
				><MessageCircle size={16} /><span>WhatsApp</span></a
			>
		</div>
	</div>
</section>