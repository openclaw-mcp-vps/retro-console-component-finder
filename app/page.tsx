export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-3 py-1 rounded mb-6 tracking-widest uppercase">
          Retro Gaming
        </div>
        <h1 className="text-4xl font-bold text-[#c9d1d9] mb-4 leading-tight">
          Find Obsolete Components for{' '}
          <span className="text-[#58a6ff]">Retro Console Projects</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          The searchable database and marketplace for discontinued chips, displays, and components needed for homebrew retro console builds. Real supplier contacts, real availability.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-3 rounded hover:bg-[#79b8ff] transition-colors text-lg"
        >
          Start Finding Components — $15/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Instant access.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-3 gap-4 mb-20 text-center">
        {[
          { icon: '🔍', label: 'Searchable DB', desc: 'Thousands of obsolete parts indexed' },
          { icon: '🛒', label: 'Marketplace', desc: 'User-contributed listings & trades' },
          { icon: '📡', label: 'Live Availability', desc: 'Real-time supplier API integration' },
        ].map((f) => (
          <div key={f.label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="text-[#58a6ff] font-bold text-sm mb-1">{f.label}</div>
            <div className="text-[#8b949e] text-xs">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-center text-[#c9d1d9] mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-bold text-sm uppercase tracking-widest mb-2">Pro Access</div>
          <div className="text-5xl font-bold text-[#c9d1d9] mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Full component database access',
              'Detailed specs & datasheets',
              'Verified supplier contacts',
              'Marketplace listings & trades',
              'Real-time availability alerts',
              'Priority community support',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] text-[#0d1117] font-bold py-3 rounded hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center text-[#c9d1d9] mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What kinds of components are in the database?',
              a: 'We cover CPUs, PPUs, sound chips, display controllers, custom ASICs, and passive components used in classic consoles from the 70s through 90s — plus modern equivalents and drop-in replacements where available.',
            },
            {
              q: 'How do I list components I want to sell or trade?',
              a: 'Pro subscribers can post listings directly from their dashboard. Listings include condition grading, photos, and your preferred contact method. The community handles negotiation.',
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes. Cancel from your account dashboard at any time. You keep access until the end of your billing period with no hidden fees.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-[#58a6ff] font-bold mb-2 text-sm">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Retro Console Component Finder. Built for the homebrew community.
      </footer>
    </main>
  )
}
