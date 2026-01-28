<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		title?: string;
		date?: string;
		subtitle?: string;
		children: Snippet;
	};

	let { title, date, subtitle, children }: Props = $props();
</script>

<svelte:head>
	{#if title}
		<title>{title}</title>
	{/if}
</svelte:head>

<article class="prose prose-lg max-w-none">
	{#if title}
		<header class="not-prose mb-12">
			{#if date}
				<p class="text-[var(--color-muted)] text-sm mb-3">{date}</p>
			{/if}
			<h1 class="text-4xl font-medium leading-tight [text-wrap:balance] mb-4">
				{title}
			</h1>
			{#if subtitle}
				<p class="text-xl text-[var(--color-muted)] leading-relaxed">
					{subtitle}
				</p>
			{/if}
		</header>
	{/if}
	{@render children()}
</article>
