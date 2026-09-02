export function MarketingDashboard() {
  return (
    <div className="floaty relative mx-auto w-full max-w-lg">
      <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-electric/30 blur-2xl" />
      <div className="absolute -bottom-8 -right-4 h-32 w-32 rounded-full bg-sky/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
        <div className="rounded-2xl bg-navy-800 p-4 text-white">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-white/70">Campaign performance</p>
            <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-xs font-semibold text-emerald-300">+24% MoM</span>
          </div>
          <p className="mt-3 text-3xl font-bold">12,480</p>
          <p className="text-sm text-white/55">Qualified visits this month</p>
          <svg viewBox="0 0 320 92" className="mt-4 h-24 w-full" aria-hidden="true">
            <defs>
              <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 70 C40 60, 60 40, 90 48 C120 56, 140 20, 170 28 C200 36, 230 12, 260 22 C280 28, 300 18, 320 10 L320 92 L0 92 Z" fill="url(#g)" />
            <path d="M0 70 C40 60, 60 40, 90 48 C120 56, 140 20, 170 28 C200 36, 230 12, 260 22 C280 28, 300 18, 320 10" fill="none" stroke="#93C5FD" strokeWidth="3" />
          </svg>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <MiniCard title="SEO" value="Rank 1–10" label="Priority keywords" />
          <MiniCard title="Google Ads" value="4.8x" label="Return on ad spend" />
          <MiniCard title="Meta Ads" value="₹18" label="Cost per lead" />
          <MiniCard title="Social" value="38k" label="Reach this week" />
        </div>
      </div>
    </div>
  );
}

function MiniCard({ title, value, label }: { title: string; value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/8 p-3 text-white">
      <p className="text-xs uppercase tracking-wider text-sky">{title}</p>
      <p className="mt-1 text-lg font-bold">{value}</p>
      <p className="text-xs text-white/55">{label}</p>
    </div>
  );
}

export function ClassroomVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-line bg-mist p-6 md:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#bfdbfe,transparent_40%)]" />
      <div className="relative grid gap-4">
        <div className="rounded-2xl bg-navy p-5 text-white">
          <p className="text-xs uppercase tracking-[0.18em] text-sky">Live workshop</p>
          <p className="mt-2 text-xl font-semibold">SEO + Ads lab</p>
          <p className="mt-2 text-sm text-white/65">Students practise keyword maps, landing pages and campaign structure in Kolkata batches.</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {["Laptop learning", "Analytics review", "Campaign planning", "Portfolio build"].map((item) => (
            <div key={item} className="rounded-2xl bg-white p-4 text-sm font-medium text-navy shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
