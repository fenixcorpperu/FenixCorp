# Fenix Corp — Sitio Web Corporativo

Sitio web corporativo de **Fenix Corp**, empresa de Transformación Digital 360°.

## Stack Tecnológico

- **React 18** — UI framework
- **Vite 5** — Build tool y dev server
- **Tailwind CSS 3** — Framework de estilos utilitarios
- **Lucide React** — Íconos
- **GitHub Pages** — Hosting estático

## Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx         # Navegación fija con menú desplegable
│   ├── Hero.jsx           # Sección principal con CTA
│   ├── Pilares.jsx        # Grid de 4 pilares (Scan, Auto, Dev, Academy)
│   ├── Ecosistema.jsx     # Diagrama de ciclo integrado 360°
│   ├── Metricas.jsx       # Contadores animados con Intersection Observer
│   ├── Nosotros.jsx       # Valores y certif icaciones
│   ├── Contacto.jsx       # Formulario dinámico con validación
│   ├── Footer.jsx         # Footer completo con links y certif icaciones
│   └── FenixLogo.jsx      # Logo SVG del ave fénix
├── App.jsx
├── main.jsx
└── index.css              # Tailwind + componentes personalizados
```

## Desarrollo Local

```bash
npm install
npm run dev
```

## Build y Deploy

### Deploy manual con gh-pages

```bash
npm run deploy
```

### Deploy automático (GitHub Actions)

El workflow en `.github/workflows/deploy.yml` se ejecuta automáticamente al hacer push a `main`.

**Configuración requerida en GitHub:**
1. Ir a `Settings > Pages`
2. En **Source**, seleccionar **GitHub Actions**

## Configuración de Base URL

Si el repositorio tiene un nombre diferente a `FenixCorp`, actualizar en `vite.config.js`:

```js
base: '/NOMBRE-DE-TU-REPO/',
```

## Personalización

- **Contacto**: Actualizar email, teléfono y ubicación en `src/components/Contacto.jsx`
- **Formulario**: Integrar con Formspree, EmailJS u otro servicio en el `handleSubmit` de `Contacto.jsx`
- **Métricas**: Ajustar los números reales en `src/components/Metricas.jsx`
- **Colores**: Configurados en `tailwind.config.js`
