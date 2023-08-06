export type SocialLink = {
	platform: string
	href: string
	me?: string
	text: string
	icon: string
	footerOnly?: boolean
}

export type SiteInfo = {
	name: string
	title: string
	description: string
	image: {
		src: string
		alt: string
	}
	socialLinks: SocialLink[]
}

const siteInfo: SiteInfo = {
	name: "Thomas Pufahl Tech Blog",
	title: "Thomas Pufahl | Tech Blog",
	description:
		"Los mejores artículos y guias sobre tecnología de la web!.",
	image: {
		src: "/og/social.jpg",
		alt: "Best tech articles and guides on the web",
	},
	socialLinks: [
		{
			platform: "github",
			href: "https://github.com/thomaspufahl",
			me: "https://github.com/thomaspufahl",
			text: "Go to my GitHub profile",
			icon: "github",
		}
	],
}

export default siteInfo