import rss from "@astrojs/rss"
import { formatBlogPosts } from "~/js/utils.js";
import siteInfo from "~/data/site-info.ts";

const unsortedPosts = import.meta.glob("./../content/blog/*.md", { eager: true })
const posts = formatBlogPosts(Object.values(unsortedPosts))

export function get(context) {
	return rss({
        stylesheet: '/rss/styles.xsl',
		// The RSS Feed title, description, and custom metadata.
		title: siteInfo.title,
		// See "Styling" section below
		description: siteInfo.description,
		site: context.site.href,
		// The list of items for your RSS feed, sorted.
		items: posts.map((item) => ({
			title: item.frontmatter.title,
            author: item.frontmatter.author,
			description: item.frontmatter.description,
			link: `/${item.frontmatter.id}/`,
			pubDate: item.frontmatter.date
		})),
        customData:
        `
            <author>Thomas Pufahl</author>
            <language>es-ar</language>
        `
	})
}