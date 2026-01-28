import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import remarkMath from 'remark-math';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import rehypeSlug from 'rehype-slug';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { visit } from 'unist-util-visit';
import { toString } from 'hast-util-to-string';

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

// Plugin to extract headings for table of contents
function rehypeExtractHeadings() {
	return (tree, file) => {
		const headings = [];
		visit(tree, 'element', (node) => {
			if (node.tagName === 'h2' || node.tagName === 'h3') {
				headings.push({
					level: parseInt(node.tagName.charAt(1)),
					text: toString(node),
					id: node.properties?.id || ''
				});
			}
		});
		file.data.fm = file.data.fm || {};
		file.data.fm.headings = headings;
	};
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { adapter: adapter() },
	preprocess: [
		mdsvex({
			remarkPlugins: [remarkMath],
			rehypePlugins: [rehypeSlug, rehypeKatexSvelte, rehypeMathDisplay, rehypeExtractHeadings],
			layout: {
				posts: join(__dirname, './src/lib/layouts/Post.svelte')
			}
		})
	],
	extensions: ['.svelte', '.svx']
};

export default config;
