<script lang="ts">
	import './layout.css';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	let dark = $state(false);

	// Initialize from localStorage on mount
	$effect(() => {
		if (browser) {
			const stored = localStorage.getItem('theme');
			if (stored === 'dark') {
				dark = true;
				document.documentElement.classList.add('dark');
			} else if (stored === 'light') {
				dark = false;
				document.documentElement.classList.remove('dark');
			} else {
				// Check system preference
				dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
				if (dark) document.documentElement.classList.add('dark');
			}
		}
	});

	function toggleTheme() {
		dark = !dark;
		if (browser) {
			document.documentElement.classList.toggle('dark', dark);
			localStorage.setItem('theme', dark ? 'dark' : 'light');
		}
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="description" content="Personal website of Tom Firth" />
	<meta property="og:site_name" content="Tom Firth" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://tdfirth.com{$page.url.pathname}" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@tdfirth" />
</svelte:head>

<div class="min-h-screen flex flex-col px-6 py-12 md:py-20">
	<div class="mx-auto max-w-[65ch] flex-1 w-full">
		<header class="mb-16 flex items-center justify-between">
			<a href="/" class="text-lg font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">
				Tom Firth
			</a>
			<button
				onclick={toggleTheme}
				class="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors text-sm"
				aria-label="Toggle dark mode"
			>
				{dark ? 'Light' : 'Dark'}
			</button>
		</header>

		<main>
			{@render children()}
		</main>
	</div>

	<footer class="mx-auto max-w-[65ch] w-full mt-20 pt-8 border-t border-[var(--color-muted)]/20">
		<div class="flex items-center justify-between text-sm text-[var(--color-muted)]">
			<span>© {new Date().getFullYear()} Tom Firth</span>
			<nav class="flex items-center gap-5">
				<a href="https://twitter.com/tdfirth" class="hover:text-[var(--color-accent)] transition-colors" target="_blank" rel="noopener noreferrer">
					Twitter
				</a>
				<a href="https://github.com/tdfirth" class="hover:text-[var(--color-accent)] transition-colors" target="_blank" rel="noopener noreferrer">
					GitHub
				</a>
				<a href="/rss.xml" class="hover:text-[var(--color-accent)] transition-colors">
					RSS
				</a>
			</nav>
		</div>
	</footer>
</div>
