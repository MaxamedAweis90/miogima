export default function ConstructionPage() {
	return (
		<main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-6 py-16 text-slate-900">
			<div
				className="absolute inset-0"
				style={{
					background:
						"radial-gradient(circle at top, rgba(37, 99, 235, 0.12), transparent 38%), radial-gradient(circle at bottom right, rgba(20, 184, 166, 0.1), transparent 30%), linear-gradient(135deg, #f8fbff 0%, #eff6ff 55%, #f0fdfa 100%)",
				}}
			/>
			<div className="absolute left-1/2 top-14 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-300/20 blur-3xl" />
			<div className="relative z-10 w-full max-w-2xl rounded-3xl border border-slate-200 bg-white/80 px-8 py-12 text-center shadow-2xl shadow-sky-100 backdrop-blur-xl sm:px-12">
				<p className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-sm font-medium tracking-[0.2em] text-cyan-100 uppercase">
					In Construction
				</p>
				<h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
					This website is being built.
				</h1>
				<p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
					The full experience is not live yet. Please check back soon while we
					finish the site structure, content, and launch-ready details.
				</p>
			</div>
		</main>
	);
}
