<script lang="ts">
	import { SquareArrowOutUpRight } from "lucide-svelte";
</script>

<section>
	<div class="section-container mb-12">
		<h3 class="section-title">Projects</h3>
		<div class="grid md:grid-cols-3 gap-4">
			<div class="card">
				<a href="https://www.hetanews.com" target="_blank">
					<div class="flex justify-between items-center gap-2">
						<div class="inline-flex items-center gap-1">
							<img
								alt="[]"
								src="https://www.hetanews.com/favicon.ico"
								width="12px"
							/>
							Heta News
						</div>
						<SquareArrowOutUpRight size={14} />
					</div>
				</a>
			</div>
			<div class="card">
				<a href="https://fokus24.id" target="_blank">
					<div class="flex justify-between items-center gap-2">
						<div class="inline-flex items-center gap-1">
							<img
								alt="[]"
								src="https://fokus24.id/favicon.ico"
								width="12px"
							/>
							Fokus24
						</div>
						<SquareArrowOutUpRight size={14} />
					</div>
				</a>
			</div>
			<div class="card">
				<a href="https://kilasutama.com" target="_blank">
					<div class="flex justify-between items-center gap-2">
						<div class="inline-flex items-center gap-1">
							<img
								alt="[]"
								src="https://kilasutama.com/favicon.ico"
								width="12px"
							/>
							Kilas Utama
						</div>
						<SquareArrowOutUpRight size={14} />
					</div>
				</a>
			</div>
		</div>
	</div>

	<div class="section-container mb-12">
		<h3 class="section-title">Fun Projects</h3>
		<div class="mb-4">
			<a href="https://coverletter.sintaks.web.id/" target="_blank">
				<div class="flex justify-between gap-4">
					<div>
						<strong>Cover Letter</strong> &mdash; Bikin
						<em>cover letter</em> lebih mudah
					</div>
					<SquareArrowOutUpRight size={14} />
				</div>
			</a>
		</div>
		<div class="mb-4">
			<a href="https://asikin.sintaks.web.id/" target="_blank">
				<div class="flex justify-between gap-4">
					<div>
						<strong>Asikin</strong> &mdash; YouTube trending videos
					</div>
					<SquareArrowOutUpRight size={14} />
				</div>
			</a>
		</div>
		<div class="mb-4">
			<a href="https://echo.sintaks.web.id/" target="_blank">
				<div class="flex justify-between gap-4">
					<div>
						<strong>Echo</strong> &mdash; Blog, gallery, and bookmarks
					</div>
					<SquareArrowOutUpRight size={14} />
				</div>
			</a>
		</div>
		<div class="mb-4">
			<a href="https://gokkon.sintaks.web.id/" target="_blank">
				<div class="flex justify-between gap-4">
					<div>
						<strong>Gokkon</strong> &mdash; Undangan pernikahan gratis
					</div>
					<SquareArrowOutUpRight size={14} />
				</div>
			</a>
		</div>
		<div class="mb-4">
			<a href="https://guritan.vercel.app/" target="_blank">
				<div class="flex justify-between gap-4">
					<div>
						<strong>Guritan</strong> &mdash; Penyunting
						<em>markdown</em> untuk Blogger
					</div>
					<SquareArrowOutUpRight size={14} />
				</div>
			</a>
		</div>
		<div class="mb-4">
			<a href="https://kecilin.sintaks.web.id/" target="_blank">
				<div class="flex justify-between gap-4">
					<div>
						<strong>Kecilin</strong> &mdash; Ngecilin gambar-gambar yang
						berukuran besar
					</div>
					<SquareArrowOutUpRight size={14} />
				</div>
			</a>
		</div>
		<div class="mb-4">
			<a href="https://video.sintaks.web.id/" target="_blank">
				<div class="flex justify-between gap-4">
					<div>
						<strong>Video</strong> &mdash; Social video sharing and bookmarking
					</div>
					<SquareArrowOutUpRight size={14} />
				</div>
			</a>
		</div>
	</div>

	<div class="section-container">
		<h3 class="section-title">Demo Projects</h3>
		<div class="mb-4">
			<a href="https://demo.sintaks.web.id/" target="_blank">
				<div class="flex justify-between gap-4">
					<div>
						<strong>Berita</strong> &mdash;
						<em>Content management system</em> untuk situs web berita
					</div>
					<SquareArrowOutUpRight size={14} />
				</div>
			</a>
		</div>
		<div class="mb-4">
			<a href="https://marketplace.sintaks.web.id/" target="_blank">
				<div class="flex justify-between gap-4">
					<div>
						<strong>Marketplace</strong> &mdash; Multi-vendor online
						shop
					</div>
					<SquareArrowOutUpRight size={14} />
				</div>
			</a>
		</div>
	</div>
</section>
