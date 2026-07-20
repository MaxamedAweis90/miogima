export const UI = {
	container: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
	section: "py-16 sm:py-20 lg:py-24",
	pageTitle: "text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl",
	pageLead: "text-base text-muted sm:text-lg",
	surface:
		"rounded-3xl border border-border bg-background shadow-[0_20px_60px_rgba(15,23,42,0.08)]",
	navLink:
		"text-sm font-medium text-foreground/80 transition-colors duration-200 hover:text-primary",
	footerLink:
		"text-sm text-muted transition-colors duration-200 hover:text-primary",
	buttonPrimary:
		"inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover",
	buttonSecondary:
		"inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary hover:text-primary",
	chip:
		"inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary",
	gridCard:
		"rounded-3xl border border-border bg-background p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]",
	sectionHeading: "text-2xl font-semibold tracking-tight text-foreground sm:text-3xl",
	sectionText: "text-sm leading-7 text-muted sm:text-base",
} as const;