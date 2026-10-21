import { useEffect, useRef, useState } from 'react'
import { FileSearch, Zap, Code2, GraduationCap, TrendingUp } from 'lucide-react'

const STATS = [
  {
    icon: FileSearch,
    value: 5,
    suffix: 'M+',
    label: 'Documentos digitalizados',
    sublabel: 'con tecnología OCR avanzada',
    pilar: 'Fenix Scan',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: Zap,
    value: 12,
    suffix: 'K+',
    label: 'Horas operativas ahorradas',
    sublabel: 'por automatización de procesos',
    pilar: 'Fenix Automatización',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  {
    icon: Code2,
    value: 80,
    suffix: '+',
    label: 'Soluciones de software desplegadas',
    sublabel: 'plataformas activas en producción',
    pilar: 'Fenix Desarrollo',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
  },
  {
    icon: GraduationCap,
    value: 1200,
    suffix: '+',
    label: 'Profesionales capacitados',
    sublabel: 'en transformación digital',
    pilar: 'Fenix Academy',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
]

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])

  return count
}

function StatCard({ stat, animate }) {
  const Icon = stat.icon
  const count = useCountUp(stat.value, 2200, animate)

  const formatNumber = (n) => {
    if (n >= 1000) return (n / 1000).toFixed(1) + 'K'
    return n.toString()
  }

  return (
    <div className={`relative group p-8 rounded-2xl border ${stat.border} ${stat.bg} hover:-translate-y-1 transition-all duration-300 text-center`}>
      {/* Icono */}
      <div className={`w-14 h-14 rounded-xl ${stat.bg} border ${stat.border} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
        <Icon className={`w-7 h-7 ${stat.color}`} strokeWidth={1.5} />
      </div>
      
      {/* Número animado */}
      <div className="mb-2">
        <span className={`text-4xl md:text-5xl font-black ${stat.color}`}>
          {stat.value >= 1000 ? formatNumber(animate ? count : 0) : (animate ? count : 0)}
        </span>
        <span className={`text-3xl font-bold ${stat.color}`}>{stat.suffix}</span>
      </div>

      {/* Label */}
      <p className="text-white font-semibold text-base mb-1">{stat.label}</p>
      <p className="text-graphite-500 text-xs mb-3">{stat.sublabel}</p>
      
      {/* Tag pilar */}
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${stat.bg} ${stat.color} border ${stat.border}`}>
        {stat.pilar}
      </span>
    </div>
  )
}

export default function Metricas() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="metricas" className="py-24 md:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800/40 via-navy-900 to-navy-900" />

      {/* Decorativo */}
      <div className="absolute top-0 inset-x-0 h-px copper-line" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/8 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-5">
            <TrendingUp className="w-3.5 h-3.5" />
            Resultados Comprobados
          </div>
          <h2 className="section-title text-white mb-4">
            Impacto <span className="gradient-text">real</span> en números
          </h2>
          <p className="text-lg text-graphite-400 max-w-2xl mx-auto">
            Resultados medibles que evidencian el valor que Fenix Corp ha entregado a organizaciones de distintos sectores en su camino hacia la madurez digital.
          </p>
        </div>

        {/* Grid de métricas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} animate={isVisible} />
          ))}
        </div>

        {/* Barra de impacto agregado */}
        <div className="mt-14 card-dark rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <p className="text-graphite-400 text-sm mb-2 uppercase tracking-wider font-semibold">Reducción promedio de costos operativos</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-6xl font-black gradient-text">70%</div>
          </div>
          <p className="text-graphite-500 text-sm max-w-lg mx-auto">
            En procesos previamente manuales, nuestros clientes reportan una reducción promedio del 70% en costos operativos al adoptar el ecosistema integrado Fenix Corp.
          </p>
        </div>
      </div>
    </section>
  )
}
