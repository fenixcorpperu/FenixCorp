import Header from './components/Header'
import Hero from './components/Hero'
import Pilares from './components/Pilares'
import Ecosistema from './components/Ecosistema'
import Metricas from './components/Metricas'
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Pilares />
        <Ecosistema />
        <Metricas />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
