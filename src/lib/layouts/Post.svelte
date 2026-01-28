<script lang="ts">
	import type { Snippet } from 'svelte';

	type Heading = {
		level: number;
		text: string;
		id: string;
	};

	type Props = {
		title?: string;
		date?: string;
		subtitle?: string;
		headings?: Heading[];
		children: Snippet;
	};

	let { title, date, subtitle, headings = [], children }: Props = $props();
</script>

<svelte:head>
	{#if title}
		<title>{title}</title>
		<meta property="og:title" content={title} />
		<meta property="og:type" content="article" />
	{/if}
	{#if subtitle}
		<meta name="description" content={subtitle} />
		<meta property="og:description" content={subtitle} />
	{/if}
</svelte:head>

<div class="relative">
	<!-- Header -->
	{#if title}
		<header class="mb-12">
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

	<!-- Content -->
	<article class="prose prose-lg max-w-none">
		{@render children()}
	</article>

	<!-- TOC positioned absolutely to the right -->
	{#if headings && headings.length > 0}
		<aside class="hidden xl:block absolute top-0 left-full ml-40 2xl:ml-52 w-48 h-full">
			<!-- Spacer to align with content start -->
			<div class="h-[2.5rem]"></div>
			<nav class="sticky top-20 text-right">
				<p class="text-sm font-medium text-[var(--color-muted)] uppercase tracking-wide mb-5">
					Contents
				</p>
				<ul class="space-y-3">
					{#each headings as heading}
						<li class={heading.level === 3 ? 'pr-4' : ''}>
							<a
								href="#{heading.id}"
								class="text-base text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors leading-snug block"
							>
								{heading.text}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</aside>
	{/if}
</div>
