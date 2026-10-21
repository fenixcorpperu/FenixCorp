import { Shield, Target, Users, Award } from 'lucide-react'
import FenixLogo from './FenixLogo'

const VALORES = [
  {
    icon: Shield,
    titulo: 'Seguridad & Confianza',
    desc: 'Operamos bajo los más estrictos estándares de seguridad de la información, garantizando la integridad y confidencialidad de cada activo digital de tu empresa.',
  },
  {
    icon: Target,
    titulo: 'Precisión & Excelencia',
    desc: 'Cada solución que implementamos está diseñada con rigor técnico, orientada a resultados medibles y alineada a los objetivos estratégicos de tu organización.',
  },
  {
    icon: Users,
    titulo: 'Enfoque en el Cliente',
    desc: 'No vendemos productos, construimos alianzas estratégicas de largo plazo. Tu éxito digital es nuestra métrica más importante.',
  },
  {
    icon: Award,
    titulo: 'Innovación Continua',
    desc: 'Incorporamos tecnologías emergentes —IA, cloud y automatización— para mantenerte siempre a la vanguardia de la transformación digital.',
  },
]

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-800/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenido izquierda */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/8 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-6">
              Quiénes Somos
            </div>
            <h2 className="section-title text-white mb-6 leading-tight">
              Somos el motor de la{' '}
              <span className="gradient-text">evolución digital</span>{' '}
              de tu empresa
            </h2>
            <p className="text-graphite-400 text-base leading-relaxed mb-6">
              <strong className="text-white">Fenix Corp</strong> es una empresa especializada en transformación digital empresarial. Nacimos con la convicción de que la tecnología debe ser un habilitador de negocios y no una barrera.
            </p>
            <p className="text-graphite-400 text-base leading-relaxed mb-8">
              Como el ave que representa nuestro nombre, ayudamos a las organizaciones a renacer desde sus procesos más básicos hacia una operación completamente digital, ágil y escalable.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-graphite-300 text-sm font-medium">ISO 27001</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-graphite-300 text-sm font-medium">GDPR Compliant</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-graphite-300 text-sm font-medium">AWS Partner</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-graphite-300 text-sm font-medium">Azure Certified</span>
            </div>
          </div>

          {/* Valores derecha */}
          <div className="grid sm:grid-cols-2 gap-5">
            {VALORES.map(({ icon: Icon, titulo, desc }) => (
              <div
                key={titulo}
                className="card-dark p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-amber-400" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-white text-base mb-2">{titulo}</h3>
                <p className="text-graphite-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
