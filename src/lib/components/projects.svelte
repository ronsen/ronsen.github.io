<script lang="ts">
	import { SquareArrowOutUpRight } from "lucide-svelte";
</script>

<section>
	<div class="section-container">
		<h3 class="section-title">Projects</h3>
		<div class="grid md:grid-cols-2 gap-4">
			<div class="card">
				<div class="flex justify-between items-center gap-2">
					<div class="inline-flex items-center gap-1">
						<img
							alt="[]"
							src="https://www.hetanews.com/favicon.ico"
							width="16px"
						/>
						<a href="https://www.hetanews.com" target="_blank"
							>Heta News</a
						>
					</div>
					<a href="https://www.hetanews.com" target="_blank">
						<SquareArrowOutUpRight size={14} />
					</a>
				</div>
			</div>
			<div class="card">
				<div class="flex justify-between items-center gap-2">
					<div class="inline-flex items-center gap-1">
						<img
							alt="[]"
							src="https://fokus24.id/favicon.ico"
							width="16px"
						/>
						<a href="https://fokus24.id" target="_blank">Fokus24</a>
					</div>
					<a href="https://fokus24.id" target="_blank">
						<SquareArrowOutUpRight size={14} />
					</a>
				</div>
			</div>
			<div class="card">
				<div class="flex justify-between items-center gap-2">
					<div class="inline-flex items-center gap-1">
						<img
							alt="[]"
							src="https://kilasutama.com/favicon.ico"
							width="16px"
						/>
						<a href="https://kilasutama.com">Kilas Utama</a>
					</div>
					<a href="https://kilasutama.com" target="_blank">
						<SquareArrowOutUpRight size={14} />
					</a>
				</div>
			</div>
			<div class="card">
				<div class="flex justify-between items-center gap-2">
					<div class="inline-flex items-center gap-1">
						<img
							alt="[]"
							src="https://coverletter.sintaks.web.id/favicon.ico"
							width="16px"
						/>
						<a href="https://coverletter.sintaks.web.id"
							>Cover Letter</a
						>
					</div>
					<a
						href="https://coverletter.sintaks.web.id"
						target="_blank"
					>
						<SquareArrowOutUpRight size={14} />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
