import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

// ─── Configuración ────────────────────────────────────────────────────────────
// Pegá aquí la URL de tu Google Apps Script después de desplegarlo
const GAS_URL = 'https://script.google.com/macros/s/AKfycbw0MIRbCJJ_4CFbil8W25iENygMp5mwfBOTUVPQl_GLEhLIl5wNF3x7qzc8Fhgpq2Z75Q/exec'

const WHATSAPP_NUMBER = '51991081578' // sin + ni espacios
const WHATSAPP_MSG    = encodeURIComponent('Hola Fenix Corp, me gustaría obtener más información sobre sus servicios.')
// ──────────────────────────────────────────────────────────────────────────────

const SERVICIOS = [
  { value: 'scan',          label: '📁 Digitalización Documental (Fenix Scan)' },
  { value: 'automatizacion',label: '⚡ Automatización de Procesos (Fenix Automatización)' },
  { value: 'desarrollo',    label: '💻 Desarrollo de Software (Fenix Desarrollo)' },
  { value: 'academy',       label: '🎓 Capacitación Corporativa (Fenix Academy)' },
  { value: 'integral',      label: '🔄 Solución Integral 360° (Todos los pilares)' },
]

const initialForm = {
  nombre: '', empresa: '', email: '', telefono: '', servicio: '', mensaje: '',
}

export default function Contacto() {
  const [form,   setForm]   = useState(initialForm)
  const [status, setStatus] = useState(null)   // null | 'sending' | 'success' | 'error'
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.nombre.trim())  e.nombre  = 'El nombre es requerido'
    if (!form.empresa.trim()) e.empresa = 'La empresa es requerida'
    if (!form.email.trim())   e.email   = 'El email es requerido'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email inválido'
    if (!form.servicio)       e.servicio = 'Seleccioná el área de interés'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return }

    setStatus('sending')
    try {
      // Envío a Google Apps Script (no-cors porque GAS devuelve redirect)
      await fetch(GAS_URL, {
        method:  'POST',
        mode:    'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ ...form, fecha: new Date().toLocaleString('es-PE') }),
      })
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`

  return (
    <section id="contacto" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800/40 to-navy-900" />
      <div className="absolute top-0 inset-x-0 h-px copper-line" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* ── Información de contacto ── */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-6">
              Hablemos
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Iniciemos tu{' '}
              <span className="gradient-text">transformación digital</span>
            </h2>
            <p className="text-graphite-400 text-base leading-relaxed mb-8">
              Cuéntanos cuál es tu desafío principal y un especialista de Fenix Corp diseñará
              una solución a la medida de tu organización.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:fenixcorpperu@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-graphite-500 mb-0.5">Email</p>
                  <p className="text-white font-medium text-sm group-hover:text-amber-400 transition-colors">
                    fenixcorpperu@gmail.com
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-graphite-500 mb-0.5">WhatsApp Business</p>
                  <p className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">
                    +51 991 081 578
                  </p>
                </div>
              </a>

              {/* Ubicación */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-graphite-500 mb-0.5">Ubicación</p>
                  <p className="text-white font-medium text-sm">Lima, Perú</p>
                </div>
              </div>
            </div>

            {/* CTA WhatsApp directo */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-3 w-full py-3.5 rounded-xl
                         bg-emerald-500/10 border border-emerald-500/30 text-emerald-400
                         font-semibold text-sm hover:bg-emerald-500/20 hover:border-emerald-500/50
                         hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]
                         transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Escribir por WhatsApp ahora
            </a>
          </div>

          {/* ── Formulario ── */}
          <div className="lg:col-span-3">
            <div className="card-dark p-8 rounded-2xl border border-white/10">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
                  <p className="text-graphite-400 text-sm max-w-sm mx-auto mb-6">
                    Un especialista de Fenix Corp se pondrá en contacto contigo dentro de
                    las próximas 24 horas hábiles.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button onClick={() => setStatus(null)} className="btn-outline-copper">
                      Enviar otro mensaje
                    </button>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm
                                 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400
                                 hover:bg-emerald-500/20 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Contactar por WhatsApp
                    </a>
                  </div>
                </div>
              ) : status === 'error' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Error al enviar</h3>
                  <p className="text-graphite-400 text-sm max-w-sm mx-auto mb-6">
                    Hubo un problema al enviar tu mensaje. Por favor contáctanos directamente
                    por WhatsApp o email.
                  </p>
                  <button onClick={() => setStatus(null)} className="btn-outline-copper">
                    Intentar de nuevo
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">

                  {/* Servicio */}
                  <div>
                    <label className="block text-sm font-semibold text-graphite-300 mb-2">
                      ¿En qué área necesita ayuda principalmente? <span className="text-amber-500">*</span>
                    </label>
                    <select
                      name="servicio"
                      value={form.servicio}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-navy-800 border text-sm text-white
                        focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all
                        ${errors.servicio ? 'border-red-500/60' : 'border-white/10 hover:border-white/20'}`}
                    >
                      <option value="" disabled className="text-graphite-500">Seleccionar área de interés...</option>
                      {SERVICIOS.map(s => (
                        <option key={s.value} value={s.value} className="bg-navy-800">{s.label}</option>
                      ))}
                    </select>
                    {errors.servicio && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />{errors.servicio}
                      </p>
                    )}
                  </div>

                  {/* Nombre y Empresa */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { name: 'nombre',  label: 'Nombre completo', placeholder: 'Tu nombre',                   required: true },
                      { name: 'empresa', label: 'Empresa',         placeholder: 'Nombre de tu organización',   required: true },
                    ].map(f => (
                      <div key={f.name}>
                        <label className="block text-sm font-semibold text-graphite-300 mb-2">
                          {f.label} {f.required && <span className="text-amber-500">*</span>}
                        </label>
                        <input
                          type="text"
                          name={f.name}
                          value={form[f.name]}
                          onChange={handleChange}
                          placeholder={f.placeholder}
                          className={`w-full px-4 py-3 rounded-xl bg-navy-800 border text-sm text-white
                            placeholder-graphite-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all
                            ${errors[f.name] ? 'border-red-500/60' : 'border-white/10 hover:border-white/20'}`}
                        />
                        {errors[f.name] && (
                          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />{errors[f.name]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Email y Teléfono */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-graphite-300 mb-2">
                        Email <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="tu@empresa.com"
                        className={`w-full px-4 py-3 rounded-xl bg-navy-800 border text-sm text-white
                          placeholder-graphite-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all
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
                        type="tel" name="telefono" value={form.telefono} onChange={handleChange}
                        placeholder="+51 XXX XXX XXX"
                        className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-white/10
                          hover:border-white/20 text-sm text-white placeholder-graphite-600
                          focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                      />
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="block text-sm font-semibold text-graphite-300 mb-2">
                      Cuéntanos sobre tu proyecto
                    </label>
                    <textarea
                      name="mensaje" value={form.mensaje} onChange={handleChange} rows={4}
                      placeholder="Describí brevemente el desafío o proyecto en el que necesitás apoyo..."
                      className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-white/10
                        hover:border-white/20 text-sm text-white placeholder-graphite-600
                        focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit" disabled={status === 'sending'}
                    className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Enviando...</>
                    ) : (
                      <>Solicitar Asesoría Gratuita<Send className="w-4 h-4" /></>
                    )}
                  </button>

                  <p className="text-xs text-graphite-600 text-center">
                    Al enviar aceptás nuestra{' '}
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
