import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Mail, Phone, MapPin } from 'lucide-react'

const SERVICIOS = [
  { value: 'scan', label: '📁 Digitalización Documental (Fenix Scan)' },
  { value: 'automatizacion', label: '⚡ Automatización de Procesos (Fenix Automatización)' },
  { value: 'desarrollo', label: '💻 Desarrollo de Software (Fenix Desarrollo)' },
  { value: 'academy', label: '🎓 Capacitación Corporativa (Fenix Academy)' },
  { value: 'integral', label: '🔄 Solución Integral 360° (Todos los pilares)' },
]

const initialForm = {
  nombre: '',
  empresa: '',
  email: '',
  telefono: '',
  servicio: '',
  mensaje: '',
}

export default function Contacto() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!form.nombre.trim()) newErrors.nombre = 'El nombre es requerido'
    if (!form.empresa.trim()) newErrors.empresa = 'La empresa es requerida'
    if (!form.email.trim()) newErrors.email = 'El email es requerido'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Email inválido'
    if (!form.servicio) newErrors.servicio = 'Seleccioná el área de interés'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setStatus('sending')
    // Simulación de envío (sin backend real - el cliente conectará su propio servicio)
    setTimeout(() => {
      setStatus('success')
      setForm(initialForm)
    }, 1500)
  }

  return (
    <section id="contacto" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800/40 to-navy-900" />
      <div className="absolute top-0 inset-x-0 h-px copper-line" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Información de contacto */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/8 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-6">
              Hablemos
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Iniciemos tu{' '}
              <span className="gradient-text">transformación digital</span>
            </h2>
            <p className="text-graphite-400 text-base leading-relaxed mb-8">
              Cuéntanos cuál es tu desafío principal y un especialista de Fenix Corp diseñará una solución a la medida de tu organización.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-graphite-500 mb-0.5">Email corporativo</p>
                  <p className="text-white font-medium text-sm">contacto@fenixcorp.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-graphite-500 mb-0.5">Teléfono / WhatsApp</p>
                  <p className="text-white font-medium text-sm">+XX (XXX) XXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-graphite-500 mb-0.5">Ubicación</p>
                  <p className="text-white font-medium text-sm">Ciudad, País</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-3">
            <div className="card-dark p-8 rounded-2xl border border-white/8">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
                  <p className="text-graphite-400 text-sm max-w-sm mx-auto mb-6">
                    Un especialista de Fenix Corp se pondrá en contacto contigo dentro de las próximas 24 horas hábiles.
                  </p>
                  <button
                    onClick={() => setStatus(null)}
                    className="btn-outline-copper"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Selector de servicio prominente */}
                  <div>
                    <label className="block text-sm font-semibold text-graphite-300 mb-2">
                      ¿En qué área necesita ayuda principalmente? <span className="text-amber-500">*</span>
                    </label>
                    <select
                      name="servicio"
                      value={form.servicio}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-navy-800 border text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all
                        ${errors.servicio ? 'border-red-500/60' : 'border-white/10 hover:border-white/20'}`}
                    >
                      <option value="" disabled className="text-graphite-500">Seleccionar área de interés...</option>
                      {SERVICIOS.map((s) => (
                        <option key={s.value} value={s.value} className="bg-navy-800">
                          {s.label}
                        </option>
                      ))}
                    </select>
                    {errors.servicio && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.servicio}
                      </p>
                    )}
                  </div>

                  {/* Nombre y Empresa */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-graphite-300 mb-2">
                        Nombre completo <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className={`w-full px-4 py-3 rounded-xl bg-navy-800 border text-sm text-white placeholder-graphite-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all
                          ${errors.nombre ? 'border-red-500/60' : 'border-white/10 hover:border-white/20'}`}
                      />
                      {errors.nombre && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />{errors.nombre}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-graphite-300 mb-2">
                        Empresa <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        value={form.empresa}
                        onChange={handleChange}
                        placeholder="Nombre de tu organización"
                        className={`w-full px-4 py-3 rounded-xl bg-navy-800 border text-sm text-white placeholder-graphite-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all
                          ${errors.empresa ? 'border-red-500/60' : 'border-white/10 hover:border-white/20'}`}
                      />
                      {errors.empresa && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />{errors.empresa}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email y Teléfono */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-graphite-300 mb-2">
                        Email corporativo <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="tu@empresa.com"
                        className={`w-full px-4 py-3 rounded-xl bg-navy-800 border text-sm text-white placeholder-graphite-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all
                          ${errors.email ? 'border-red-500/60' : 'border-white/10 hover:border-white/20'}`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />{errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-graphite-300 mb-2">
                        Teléfono / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        placeholder="+XX XXX XXXX"
                        className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-white/10 hover:border-white/20 text-sm text-white placeholder-graphite-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                      />
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="block text-sm font-semibold text-graphite-300 mb-2">
                      Cuéntanos sobre tu proyecto
                    </label>
                    <textarea
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describí brevemente el desafío o proyecto en el que necesitás apoyo..."
                      className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-white/10 hover:border-white/20 text-sm text-white placeholder-graphite-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Solicitar Asesoría Gratuita
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-graphite-600 text-center">
                    Al enviar este formulario aceptás nuestra{' '}
                    <a href="#" className="text-graphite-500 hover:text-amber-400 transition-colors underline underline-offset-2">
                      Política de Privacidad
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
