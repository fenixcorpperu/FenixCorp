import { useState } from 'react'
import { ArrowRight, FileSearch, Zap, Code2, GraduationCap, CheckCircle2 } from 'lucide-react'

const PILARES = [
  {
    id: 'fenix-scan',
    emoji: '📁',
    icon: FileSearch,
    nombre: 'Fenix Scan',
    tagline: 'Digitalización Documental Avanzada',
    color: 'from-blue-600/20 to-cyan-600/20',
    borderHover: 'hover:border-blue-500/40',
    iconColor: 'text-blue-400',
    accentColor: 'bg-blue-500/10',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
    descripcion:
      'Gestión documental, custodia digital, indexación inteligente y conversión a cero papel para tu organización.',
    propuestaValor:
      'Digitalización masiva de archivos físicos con tecnología OCR, organización estructurada en la nube y máxima seguridad de la información corporativa.',
    puntos: [
      'Escaneo de alta velocidad industrial',
      'Indexación de metadatos con OCR inteligente',
      'Resguardo seguro certificado en la nube',
      'Cumplimiento normativo y legal',
    ],
    cta: 'Digitalizar mis Archivos',
    href: '#contacto',
  },
  {
    id: 'fenix-automatizacion',
    emoji: '⚡',
    icon: Zap,
    nombre: 'Fenix Automatización',
    tagline: 'Workflows e Inteligencia Artificial',
    color: 'from-amber-600/20 to-orange-600/20',
    borderHover: 'hover:border-amber-500/40',
    iconColor: 'text-amber-400',
    accentColor: 'bg-amber-500/10',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]',
    descripcion:
      'Eficiencia operativa y optimización de procesos de negocio mediante flujos automáticos inteligentes.',
    propuestaValor:
      'Conectamos tus documentos digitalizados y sistemas internos con flujos de trabajo automáticos para eliminar tareas repetitivas, reducir errores y disminuir costos operativos hasta un 70%.',
    puntos: [
      'Automatización RPA de procesos manuales',
      'Integración de sistemas y APIs empresariales',
      'Workflows inteligentes con IA generativa',
      'Dashboards de monitoreo en tiempo real',
    ],
    cta: 'Automatizar Procesos',
    href: '#contacto',
  },
  {
    id: 'fenix-desarrollo',
    emoji: '💻',
    icon: Code2,
    nombre: 'Fenix Desarrollo',
    tagline: 'Software a Medida & Cloud',
    color: 'from-violet-600/20 to-purple-600/20',
    borderHover: 'hover:border-violet-500/40',
    iconColor: 'text-violet-400',
    accentColor: 'bg-violet-500/10',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',
    descripcion:
      'Construcción de plataformas web, sistemas de gestión DMS/ERP y aplicaciones empresariales a medida.',
    propuestaValor:
      'Creamos las herramientas digitales y la arquitectura tecnológica escalable que tu empresa necesita para gestionar sus datos, documentos y operaciones con máxima eficiencia.',
    puntos: [
      'Desarrollo de plataformas web y mobile',
      'Sistemas DMS / ERP personalizados',
      'Arquitectura cloud escalable (AWS / Azure)',
      'Integraciones con sistemas legacy',
    ],
    cta: 'Iniciar Proyecto',
    href: '#contacto',
  },
  {
    id: 'fenix-academy',
    emoji: '🎓',
    icon: GraduationCap,
    nombre: 'Fenix Academy',
    tagline: 'Capacitación y Talento Corporativo',
    color: 'from-emerald-600/20 to-teal-600/20',
    borderHover: 'hover:border-emerald-500/40',
    iconColor: 'text-emerald-400',
    accentColor: 'bg-emerald-500/10',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
    descripcion:
      'Formación especializada y adopción tecnológica en equipos de trabajo para asegurar la transformación digital.',
    propuestaValor:
      'Capacitamos a tu personal en el uso de nuevas tecnologías, herramientas digitales y metodologías ágiles para garantizar la adopción exitosa de cada solución implementada.',
    puntos: [
      'Programas de capacitación in-company',
      'Certificaciones en herramientas digitales',
      'Metodologías ágiles y gestión del cambio',
      'E-learning corporativo a medida',
    ],
    cta: 'Ver Programas',
    href: '#contacto',
  },
]

function PilarCard({ pilar, isActive, onClick }) {
  const Icon = pilar.icon

  return (
    <div
      id={pilar.id}
      onClick={onClick}
      className={`pilar-card group ${pilar.glowColor} ${pilar.borderHover} cursor-pointer`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-expanded={isActive}
    >
      {/* Fondo gradiente sutil */}
      <div className={`absolute inset-0 bg-gradient-to-br ${pilar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

      <div className="relative z-10">
        {/* Header de la card */}
        <div className="flex items-start justify-between mb-5">
          <div className={`w-14 h-14 rounded-xl ${pilar.accentColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`w-7 h-7 ${pilar.iconColor}`} strokeWidth={1.5} />
          </div>
          <span className="text-3xl group-hover:scale-110 transition-transform duration-300 origin-right">
            {pilar.emoji}
          </span>
        </div>

        {/* Nombre y tagline */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-50 transition-colors">
            {pilar.nombre}
          </h3>
          <p className={`text-sm font-medium ${pilar.iconColor}`}>{pilar.tagline}</p>
        </div>

        {/* Descripción */}
        <p className="text-graphite-400 text-sm leading-relaxed mb-5 group-hover:text-graphite-300 transition-colors">
          {pilar.descripcion}
        </p>

        {/* Puntos clave */}
        <ul className="space-y-2 mb-6">
          {pilar.puntos.map((punto) => (
            <li key={punto} className="flex items-start gap-2 text-sm text-graphite-400">
              <CheckCircle2 className={`w-4 h-4 ${pilar.iconColor} mt-0.5 flex-shrink-0`} />
              <span>{punto}</span>
            </li>
          ))}
        </ul>

        {/* Propuesta de valor expandida */}
        <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-40 opacity-100 mb-5' : 'max-h-0 opacity-0'}`}>
          <div className={`p-4 rounded-xl ${pilar.accentColor} border border-white/5`}>
            <p className="text-sm text-graphite-300 leading-relaxed">{pilar.propuestaValor}</p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#contacto"
          onClick={(e) => {
            e.stopPropagation()
            document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="btn-outline-copper w-full justify-center group/btn"
        >
          {pilar.cta}
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  )
}

export default function Pilares() {
  const [activeCard, setActiveCard] = useState(null)

  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id)
  }

  return (
    <section id="pilares" className="py-24 md:py-32 relative overflow-hidden">
      {/* Fondo con sutil gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/50 to-navy-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de sección */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-5">
            Ecosistema de Soluciones
          </div>
          <h2 className="section-title text-white mb-4">
            Nuestros <span className="gradient-text">4 Pilares</span> de Solución
          </h2>
          <p className="text-lg text-graphite-400 max-w-2xl mx-auto">
            Una suite integrada de servicios diseñada para acompañar a tu organización en cada etapa de su transformación digital.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {PILARES.map((pilar) => (
            <PilarCard
              key={pilar.id}
              pilar={pilar}
              isActive={activeCard === pilar.id}
              onClick={() => handleCardClick(pilar.id)}
            />
          ))}
        </div>

        {/* CTA final de sección */}
        <div className="text-center mt-14">
          <p className="text-graphite-500 text-sm mb-4">¿Necesitás una solución integral que combine todos los pilares?</p>
          <button
            onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-base px-9 py-4"
          >
            Solución Integral 360°
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
