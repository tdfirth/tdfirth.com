<script lang="ts">
	import katex from 'katex';

	type Props = {
		tex: string;
		display?: boolean;
	};

	let { tex, display = false }: Props = $props();

	const html = katex.renderToString(tex, {
		displayMode: display,
		throwOnError: false
	});
</script>

{@html html}
