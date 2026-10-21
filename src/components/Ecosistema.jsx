import { FileSearch, Zap, Code2, GraduationCap, ArrowRight, RefreshCw } from 'lucide-react'

const PASOS = [
  {
    num: '01',
    icon: FileSearch,
    nombre: 'Fenix Scan',
    accion: 'Digitaliza los datos',
    desc: 'Convierte activos físicos en datos digitales estructurados y accesibles.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    arrowColor: 'text-blue-500/40',
  },
  {
    num: '02',
    icon: Zap,
    nombre: 'Fenix Automatización',
    accion: 'Agiliza los flujos',
    desc: 'Los datos digitales alimentan workflows inteligentes que operan sin fricción.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    arrowColor: 'text-amber-500/40',
  },
  {
    num: '03',
    icon: Code2,
    nombre: 'Fenix Desarrollo',
    accion: 'Construye la infraestructura',
    desc: 'La plataforma tecnológica a medida que sostiene y escala todo el ecosistema.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    arrowColor: 'text-violet-500/40',
  },
  {
    num: '04',
    icon: GraduationCap,
    nombre: 'Fenix Academy',
    accion: 'Capacita al equipo',
    desc: 'El talento humano adopta, domina y evoluciona junto a las herramientas digitales.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    arrowColor: 'text-emerald-500/40',
  },
]

export default function Ecosistema() {
  return (
    <section id="ecosistema" className="py-24 md:py-32 bg-navy-900 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800/30 to-navy-900" />
      <div className="absolute top-0 left-0 right-0 h-px copper-line" />
      <div className="absolute bottom-0 left-0 right-0 h-px copper-line" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/8 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-5">
            <RefreshCw className="w-3.5 h-3.5" />
            Ciclo de Valor Continuo
          </div>
          <h2 className="section-title text-white mb-4">
            Ecosistema{' '}
            <span className="gradient-text">Integrado 360°</span>
          </h2>
          <p className="text-lg text-graphite-400 max-w-2xl mx-auto">
            Los 4 pilares no operan de forma aislada. Se conectan en un ciclo virtuoso que maximiza el valor en cada etapa de tu transformación digital.
          </p>
        </div>

        {/* Diagrama de flujo */}
        {/* Desktop: horizontal */}
        <div className="hidden lg:flex items-start justify-center gap-0 relative">
          {PASOS.map((paso, idx) => {
            const Icon = paso.icon
            const isLast = idx === PASOS.length - 1
            return (
              <div key={paso.num} className="flex items-start">
                {/* Card de paso */}
                <div className={`w-56 xl:w-64 flex flex-col items-center text-center p-6 rounded-2xl border ${paso.border} ${paso.bg} transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group`}>
                  {/* Número */}
                  <div className={`text-xs font-bold ${paso.color} tracking-widest mb-3 opacity-60`}>
                    PASO {paso.num}
                  </div>
                  {/* Icono */}
                  <div className={`w-14 h-14 rounded-xl ${paso.bg} border ${paso.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${paso.color}`} strokeWidth={1.5} />
                  </div>
                  {/* Nombre */}
                  <h3 className="font-bold text-white text-base mb-1">{paso.nombre}</h3>
                  <p className={`text-sm font-semibold ${paso.color} mb-3`}>{paso.accion}</p>
                  <p className="text-xs text-graphite-500 leading-relaxed">{paso.desc}</p>
                </div>

                {/* Conector / flecha (excepto el último que conecta de vuelta) */}
                {!isLast ? (
                  <div className="flex items-center self-center mx-0 relative">
                    <div className="w-16 xl:w-20 h-px bg-gradient-to-r from-white/10 to-white/20" />
                    <ArrowRight className="w-4 h-4 text-graphite-600 -ml-1" />
                  </div>
                ) : (
                  <div className="flex items-center self-center mx-0 relative">
                    {/* Flecha de retorno (cierre del ciclo) */}
                    <div className="ml-3 flex flex-col items-center gap-1">
                      <div className="w-px h-6 bg-amber-500/30" />
                      <div className="text-xs text-amber-500/50 font-bold tracking-wider">CICLO</div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Mobile/Tablet: vertical */}
        <div className="lg:hidden space-y-4 max-w-md mx-auto">
          {PASOS.map((paso, idx) => {
            const Icon = paso.icon
            const isLast = idx === PASOS.length - 1
            return (
              <div key={paso.num}>
                <div className={`flex items-start gap-4 p-5 rounded-2xl border ${paso.border} ${paso.bg}`}>
                  <div className={`w-12 h-12 rounded-xl ${paso.bg} border ${paso.border} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${paso.color}`} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className={`text-xs font-bold ${paso.color} tracking-widest mb-1 opacity-60`}>PASO {paso.num}</div>
                    <h3 className="font-bold text-white text-base">{paso.nombre}</h3>
                    <p className={`text-sm font-semibold ${paso.color} mb-1`}>{paso.accion}</p>
                    <p className="text-xs text-graphite-500 leading-relaxed">{paso.desc}</p>
                  </div>
                </div>
                {!isLast && (
                  <div className="flex justify-center py-2">
                    <div className="w-px h-6 bg-gradient-to-b from-white/10 to-white/20" />
                  </div>
                )}
              </div>
            )
          })}
          {/* Ciclo de vuelta */}
          <div className="flex items-center gap-3 px-5">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
            <div className="flex items-center gap-2 text-amber-500/50 text-xs font-bold tracking-wider">
              <RefreshCw className="w-3 h-3" />
              Ciclo Continuo
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          </div>
        </div>

        {/* Descripción del ecosistema */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card-dark p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-3">¿Por qué un ecosistema integrado?</h3>
            <p className="text-graphite-400 text-sm leading-relaxed">
              La transformación digital no es un proyecto de un solo paso. Es un ciclo continuo donde cada pilar potencia al siguiente: los documentos digitalizados alimentan la automatización, la infraestructura tecnológica sustenta ambos, y el equipo capacitado maximiza el retorno de inversión de toda la cadena.
            </p>
          </div>
          <div className="card-dark p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-3">El resultado: Madurez Digital</h3>
            <p className="text-graphite-400 text-sm leading-relaxed">
              Empresas que adoptan el ecosistema 360° de Fenix Corp reportan reducciones de hasta el 70% en costos operativos asociados a procesos manuales, y una mejora sustancial en la trazabilidad, seguridad y velocidad de gestión de su información crítica.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
