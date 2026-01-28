import type { RequestHandler } from './$types';

type Post = {
	slug: string;
	title: string;
	date: string;
	subtitle?: string;
};

const posts: Post[] = [
	{
		slug: 'typography-test',
		title: 'On the Pleasures of Long-Form Reading in the Digital Age',
		date: 'January 28, 2025',
		subtitle: 'A meditation on typography, attention, and the quiet joy of words arranged well.'
	},
	{
		slug: 'mathematics-of-beauty',
		title: 'The Mathematics of Beauty',
		date: 'January 15, 2025',
		subtitle: 'On the deep connections between mathematical elegance and aesthetic pleasure.'
	},
	{
		slug: 'elements-of-style',
		title: 'Elements of Style',
		date: 'January 10, 2025',
		subtitle: 'A showcase of typographic elements for long-form content.'
	}
];

const siteUrl = 'https://tdfirth.com';
const siteName = 'Tom Firth';
const siteDescription = 'Personal website and blog';

function escapeXml(text: string): string {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

function parseDate(dateStr: string): Date {
	return new Date(dateStr);
}

export const GET: RequestHandler = async () => {
	const sortedPosts = posts.sort(
		(a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
	);

	const items = sortedPosts
		.map(
			(post) => `
		<item>
			<title>${escapeXml(post.title)}</title>
			<link>${siteUrl}/posts/${post.slug}</link>
			<guid isPermaLink="true">${siteUrl}/posts/${post.slug}</guid>
			<pubDate>${parseDate(post.date).toUTCString()}</pubDate>
			${post.subtitle ? `<description>${escapeXml(post.subtitle)}</description>` : ''}
		</item>`
		)
		.join('');

	const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>${escapeXml(siteName)}</title>
		<link>${siteUrl}</link>
		<description>${escapeXml(siteDescription)}</description>
		<language>en</language>
		<atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
		${items}
	</channel>
</rss>`;

	return new Response(rss.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};

export const prerender = true;
