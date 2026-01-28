<script lang="ts">
	type Props = {
		href: string;
		title: string;
		date: string;
	};

	let { href, title, date }: Props = $props();
</script>

<li>
	<a {href} class="group block">
		<span class="text-lg group-hover:text-[var(--color-accent)] transition-colors">
			{title}
		</span>
		<span class="block text-sm text-[var(--color-muted)] mt-1">{date}</span>
	</a>
</li>
