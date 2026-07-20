import type { ReactNode } from "react";

import { UI } from "@/lib/ui";

type PageSectionProps = {
	title: string;
	description?: string;
	action?: ReactNode;
	children: ReactNode;
};

export default function PageSection({ title, description, action, children }: PageSectionProps) {
	return (
		<section className={UI.section}>
			<div className={UI.container}>
				<div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
					<div className="max-w-3xl space-y-3">
						<p className={UI.chip}>MIOGIMA HUB</p>
						<h1 className={UI.pageTitle}>{title}</h1>
						{description ? <p className={UI.pageLead}>{description}</p> : null}
					</div>
					{action ? <div>{action}</div> : null}
				</div>
				{children}
			</div>
		</section>
	);
}