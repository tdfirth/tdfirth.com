import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import remarkMath from 'remark-math';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { visit } from 'unist-util-visit';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Plugin to add math-display class for display math
function rehypeMathDisplay() {
	return (tree) => {
		visit(tree, 'element', (node, index, parent) => {
			if (
				node.tagName === 'span' &&
				node.properties?.className?.includes('math')
			) {
				// Check if this math span is the only child of a <p>
				if (
					parent?.tagName === 'p' &&
					parent.children.length === 1
				) {
					node.properties.className = node.properties.className
						.filter(c => c !== 'math-inline')
						.concat('math-display');
				}
			}
		});
	};
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { adapter: adapter() },
	preprocess: [
		mdsvex({
			remarkPlugins: [remarkMath],
			rehypePlugins: [rehypeKatexSvelte, rehypeMathDisplay],
			layout: {
				posts: join(__dirname, './src/lib/layouts/Post.svelte')
			}
		})
	],
	extensions: ['.svelte', '.svx']
};

export default config;
