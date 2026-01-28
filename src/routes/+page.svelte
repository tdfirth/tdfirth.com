<script lang="ts">
	import PostLink from '$lib/components/PostLink.svelte';
</script>

<svelte:head>
	<title>Tom Firth</title>
</svelte:head>

<div class="space-y-8">
	<p class="text-lg text-[var(--color-muted)] leading-relaxed">
		Welcome to my corner of the internet.
	</p>

	<section>
		<h2 class="text-sm font-medium text-[var(--color-muted)] uppercase tracking-wide mb-4">Writing</h2>
		<ul class="space-y-4">
			<PostLink
				href="/posts/typography-test"
				title="On the Pleasures of Long-Form Reading in the Digital Age"
				date="January 28, 2025"
			/>
			<PostLink
				href="/posts/mathematics-of-beauty"
				title="The Mathematics of Beauty"
				date="January 15, 2025"
			/>
			<PostLink
				href="/posts/elements-of-style"
				title="Elements of Style"
				date="January 10, 2025"
			/>
		</ul>
	</section>
</div>
