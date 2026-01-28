<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Not Found</title>
</svelte:head>

<div class="py-20 text-center">
	<p class="text-[var(--color-muted)] text-sm mb-4">{$page.status}</p>
	<h1 class="text-4xl font-medium mb-6">Page not found</h1>
	<p class="text-[var(--color-muted)] text-lg mb-8">
		The page you're looking for doesn't exist.
	</p>
	<a
		href="/"
		class="text-[var(--color-accent)] hover:underline transition-colors"
	>
		Return home
	</a>
</div>
