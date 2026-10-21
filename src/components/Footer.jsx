import { FileSearch, Zap, Code2, GraduationCap, Shield, Lock, ExternalLink } from 'lucide-react'
import FenixLogo from './FenixLogo'

const PILARES_LINKS = [
  { icon: FileSearch, label: 'Fenix Scan', href: '#fenix-scan', color: 'text-blue-400' },
  { icon: Zap, label: 'Fenix Automatización', href: '#fenix-automatizacion', color: 'text-amber-400' },
  { icon: Code2, label: 'Fenix Desarrollo', href: '#fenix-desarrollo', color: 'text-violet-400' },
  { icon: GraduationCap, label: 'Fenix Academy', href: '#fenix-academy', color: 'text-emerald-400' },
]

const EMPRESA_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Ecosistema 360°', href: '#ecosistema' },
  { label: 'Casos de Éxito', href: '#metricas' },
  { label: 'Contacto', href: '#contacto' },
]

const CERTIF = [
  { label: 'ISO 27001', desc: 'Seguridad de la Información' },
  { label: 'GDPR', desc: 'Protección de Datos' },
  { label: 'SOC 2', desc: 'Controles de Seguridad' },
]

// Iconos de redes sociales SVG inline
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px copper-line" />

      {/* CTA Banner superior */}
      <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-amber-400 font-semibold uppercase tracking-wider mb-1">¿Listo para transformar tu organización?</p>
            <h3 className="text-2xl font-bold text-white">
              Agenda una <span className="gradient-text">asesoría gratuita</span> hoy
            </h3>
          </div>
          <button
            onClick={() => scrollTo('#contacto')}
            className="btn-primary px-8 py-4 text-base flex-shrink-0"
          >
            Agendar Asesoría
          </button>
        </div>
      </div>

      {/* Contenido principal del footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Columna Marca */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <FenixLogo className="w-10 h-10" />
              <span className="text-xl font-bold">
                <span className="text-white">Fenix</span>
                <span className="gradient-text"> Corp</span>
              </span>
            </div>
            <p className="text-graphite-500 text-sm leading-relaxed mb-5">
              Transformación Digital 360°. Digitalizamos, automatizamos, desarrollamos y capacitamos para elevar tu organización al siguiente nivel.
            </p>
            {/* Redes sociales */}
            <div className="flex items-center gap-3">
              {[
                { icon: LinkedInIcon, label: 'LinkedIn' },
                { icon: TwitterIcon, label: 'X / Twitter' },
                { icon: InstagramIcon, label: 'Instagram' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-graphite-500 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Columna Pilares */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Nuestros Pilares</h4>
            <ul className="space-y-3">
              {PILARES_LINKS.map(({ icon: Icon, label, href, color }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="flex items-center gap-2.5 text-graphite-500 hover:text-white transition-colors text-sm group"
                  >
                    <Icon className={`w-3.5 h-3.5 ${color}`} strokeWidth={2} />
                    <span className="group-hover:translate-x-0.5 transition-transform">{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Empresa */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-3">
              {EMPRESA_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-graphite-500 hover:text-white transition-colors text-sm hover:translate-x-0.5 transition-transform block"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Certificaciones */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Seguridad & Certificaciones</h4>
            <div className="space-y-3">
              {CERTIF.map(({ label, desc }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">{label}</p>
                    <p className="text-graphite-600 text-xs">{desc}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 mt-4 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                <Lock className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <p className="text-xs text-graphite-500">Todos los datos transmitidos con cifrado TLS 1.3</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-graphite-600 text-xs">
            © {currentYear} <span className="text-graphite-500">Fenix Corp</span>. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs text-graphite-600">
            <a href="#" className="hover:text-graphite-400 transition-colors">Política de Privacidad</a>
            <span>·</span>
            <a href="#" className="hover:text-graphite-400 transition-colors">Términos de Servicio</a>
            <span>·</span>
            <a href="#" className="hover:text-graphite-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
