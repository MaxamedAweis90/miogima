export const ROUTES = {
	home: "/",
	about: "/about",
	contact: "/contact",
	joinRoster: "/join-roster",
	portfolio: "/portfolio",
	services: "/services",
} as const;

export const NAV_LINKS = [
    { label: "Home", href: ROUTES.home },
	{ label: "About", href: ROUTES.about },
	{ label: "Services", href: ROUTES.services },
	{ label: "Portfolio", href: ROUTES.portfolio },
	{ label: "Join Roster", href: ROUTES.joinRoster },
] as const;

export const CTA_LINKS = {
	joinRoster: {
		label: "Join Roster",
		href: ROUTES.joinRoster,
	},
	contact: {
		label: "Contact Us",
		href: ROUTES.contact,
	},
} as const;

export const FOOTER_LINKS = [
	{ label: "Terms", href: "#terms" },
	{ label: "Privacy", href: "#privacy" },
] as const;