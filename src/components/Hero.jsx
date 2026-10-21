import { ArrowRight, Play, Sparkles } from 'lucide-react'

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient y grid */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Grid decorativo */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Orbes de luz decorativos */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wide uppercase mb-8 animate-fade-up">
          <Sparkles className="w-3.5 h-3.5" />
          Transformación Digital 360°
        </div>

        {/* Título principal */}
        <h1 className="section-title text-white mb-6 animate-fade-up-delay-1 text-balance leading-tight">
          Evolucionamos la gestión,{' '}
          <span className="gradient-text">tecnología y talento</span>{' '}
          de tu organización
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-graphite-400 max-w-3xl mx-auto mb-10 animate-fade-up-delay-2 leading-relaxed text-balance">
          En <span className="text-white font-semibold">Fenix Corp</span> integramos{' '}
          <span className="text-graphite-300">digitalización documental masiva</span>,{' '}
          <span className="text-graphite-300">automatización de procesos con IA</span>,{' '}
          <span className="text-graphite-300">desarrollo de software a medida</span> y{' '}
          <span className="text-graphite-300">capacitación corporativa de alto impacto</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
          <button
            onClick={() => scrollTo('#pilares')}
            className="btn-primary text-base px-8 py-4"
          >
            Explorar Soluciones
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollTo('#contacto')}
            className="btn-secondary text-base px-8 py-4"
          >
            <Play className="w-4 h-4" />
            Hablar con un Especialista
          </button>
        </div>

        {/* Estadísticas rápidas */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: '+5M', label: 'Documentos digitalizados' },
            { value: '+12K', label: 'Horas operativas ahorradas' },
            { value: '+80', label: 'Soluciones desplegadas' },
            { value: '+1,200', label: 'Profesionales capacitados' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-graphite-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-graphite-600 text-xs">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-amber-500/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500/60 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
