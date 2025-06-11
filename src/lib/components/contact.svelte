<script lang="ts">
	import {Mail, MessageCircle,} from "lucide-svelte";
</script>

<section>
	<div class="section-container">
		<h3 class="section-title">Let's Connect</h3>
		<div class="text-center mb-6">
			Do you have any questions regarding website and application development?
			Let's discuss first!
		</div>
		<div class="grid md:grid-cols-2 gap-4">
			<a
				class="btn btn-primary inline-flex items-center gap-2"
				href="mailto:ronsen@startrek.or.id"
			>
				<Mail size={16}/>
				<span>Email me</span></a
			>
			<a
				class="btn btn-success inline-flex items-center gap-2"
				href="https://wa.me/6281319479396"
			>
				<MessageCircle size={16}/>
				<span>WhatsApp</span></a
			>
		</div>
	</div>
</section>
