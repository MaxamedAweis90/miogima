export default function ConstructionPage() {
	return (
		<main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-16 text-white">
			<div
				className="absolute inset-0"
				style={{
					background:
						"radial-gradient(circle at top, rgba(56, 189, 248, 0.18), transparent 38%), radial-gradient(circle at bottom right, rgba(251, 191, 36, 0.16), transparent 30%), linear-gradient(135deg, #020617 0%, #0f172a 55%, #111827 100%)",
				}}
			/>
			<div className="absolute left-1/2 top-14 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
			<div className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/10 bg-white/8 px-8 py-12 text-center shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-12">
				<p className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-sm font-medium tracking-[0.2em] text-cyan-100 uppercase">
					In Construction
				</p>
				<h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
					This website is being built.
				</h1>
				<p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
					The full experience is not live yet. Please check back soon while we
					finish the site structure, content, and launch-ready details.
				</p>
			</div>
		</main>
	);
}
