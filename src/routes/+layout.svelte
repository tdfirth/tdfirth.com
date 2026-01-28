<script lang="ts">
	import './layout.css';
	import { browser } from '$app/environment';

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

<div class="min-h-screen px-6 py-12 md:py-20">
	<div class="mx-auto max-w-[65ch]">
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
</div>
