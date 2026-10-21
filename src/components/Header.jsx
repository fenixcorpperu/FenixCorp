import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import FenixLogo from './FenixLogo'

const pilares = [
  { label: '📁 Fenix Scan', desc: 'Digitalización Documental', href: '#fenix-scan' },
  { label: '⚡ Fenix Automatización', desc: 'Workflows e IA', href: '#fenix-automatizacion' },
  { label: '💻 Fenix Desarrollo', desc: 'Software a Medida & Cloud', href: '#fenix-desarrollo' },
  { label: '🎓 Fenix Academy', desc: 'Capacitación Corporativa', href: '#fenix-academy' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
    setDropdownOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-lg border-b border-white/8 shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => scrollTo('#inicio')} className="flex items-center gap-3 group">
            <FenixLogo className="w-9 h-9" />
            <span className="text-xl font-bold tracking-tight">
              <span className="text-white">Fenix</span>
              <span className="gradient-text"> Corp</span>
            </span>
          </button>

          {/* Nav Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollTo('#inicio')} className="nav-link">Inicio</button>

            {/* Dropdown Pilares */}
            <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <button className="nav-link flex items-center gap-1">
                Soluciones
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-2xl bg-navy-800/95 backdrop-blur-xl border border-white/10 shadow-2xl p-3 z-50">
                  <div className="text-xs font-semibold text-graphite-500 uppercase tracking-wider px-3 py-2">
                    Nuestros Pilares
                  </div>
                  {pilares.map((p) => (
                    <button
                      key={p.href}
                      onClick={() => scrollTo(p.href)}
                      className="w-full flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group text-left"
                    >
                      <span className="text-lg leading-none mt-0.5">{p.label.split(' ')[0]}</span>
                      <div>
                        <div className="text-sm font-medium text-white group-hover:text-amber-400 transition-colors">
                          {p.label.split(' ').slice(1).join(' ')}
                        </div>
                        <div className="text-xs text-graphite-500">{p.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => scrollTo('#nosotros')} className="nav-link">Nosotros</button>
            <button onClick={() => scrollTo('#metricas')} className="nav-link">Casos de Éxito</button>
            <button onClick={() => scrollTo('#contacto')} className="nav-link">Contacto</button>
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button onClick={() => scrollTo('#contacto')} className="btn-primary text-xs px-5 py-2.5">
              Agendar Asesoría
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menú"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 py-4 space-y-1 bg-navy-900/98 backdrop-blur-xl">
            <button onClick={() => scrollTo('#inicio')} className="w-full text-left px-4 py-3 text-sm font-medium text-graphite-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
              Inicio
            </button>
            <div className="px-4 py-2 text-xs font-semibold text-graphite-600 uppercase tracking-wider">Soluciones</div>
            {pilares.map((p) => (
              <button
                key={p.href}
                onClick={() => scrollTo(p.href)}
                className="w-full text-left px-6 py-2.5 text-sm text-graphite-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
              >
                {p.label}
              </button>
            ))}
            <button onClick={() => scrollTo('#nosotros')} className="w-full text-left px-4 py-3 text-sm font-medium text-graphite-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
              Nosotros
            </button>
            <button onClick={() => scrollTo('#metricas')} className="w-full text-left px-4 py-3 text-sm font-medium text-graphite-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
              Casos de Éxito
            </button>
            <button onClick={() => scrollTo('#contacto')} className="w-full text-left px-4 py-3 text-sm font-medium text-graphite-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
              Contacto
            </button>
            <div className="px-4 pt-2">
              <button onClick={() => scrollTo('#contacto')} className="btn-primary w-full justify-center">
                Agendar Asesoría
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
