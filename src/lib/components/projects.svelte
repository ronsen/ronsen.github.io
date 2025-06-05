<script lang="ts">
	import { SquareArrowOutUpRight } from "lucide-svelte";
</script>

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
