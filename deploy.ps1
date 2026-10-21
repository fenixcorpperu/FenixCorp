# =============================================================
#  Fenix Corp — Deploy a GitHub Pages
#  Ejecutar desde la raíz del repositorio: .\deploy.ps1
# =============================================================

$ErrorActionPreference = "Stop"
$repoPath = $PSScriptRoot

Write-Host "`n🔥 Fenix Corp — Publicando en GitHub Pages..." -ForegroundColor Yellow

# 1. Verifica que estamos en el directorio correcto
Set-Location $repoPath
Write-Host "📁 Directorio: $repoPath" -ForegroundColor Cyan

# 2. Muestra el remoto configurado
Write-Host "`n🔗 Remoto configurado:" -ForegroundColor Cyan
git remote -v

# 3. Stage de todos los archivos nuevos y modificados
Write-Host "`n📦 Agregando archivos al staging..." -ForegroundColor Cyan
git add src/
git add public/
git add index.html
git add package.json
git add vite.config.js
git add tailwind.config.js
git add postcss.config.js
git add .gitignore
git add README.md
git add .github/

# 4. Commit
Write-Host "`n✅ Creando commit..." -ForegroundColor Cyan
git commit -m "feat: lanzamiento inicial sitio web corporativo Fenix Corp

- Hero section con CTA y estadísticas animadas
- Grid 4 pilares interactivos (Scan, Automatización, Desarrollo, Academy)
- Ecosistema integrado 360° con diagrama de flujo
- Métricas con contadores animados (IntersectionObserver)
- Sección Nosotros con valores corporativos
- Formulario de contacto dinámico con validación
- Footer completo con certificaciones de seguridad
- GitHub Actions workflow para deploy automático en Pages
- Stack: React 18 + Vite 5 + Tailwind CSS 3"

# 5. Push a main
Write-Host "`n🚀 Publicando en GitHub (rama main)..." -ForegroundColor Cyan
git push -u origin main

Write-Host "`n✨ ¡Listo! El workflow de GitHub Actions se activará automáticamente." -ForegroundColor Green
Write-Host "🌐 Tu sitio estará disponible en: https://fenixcorpperu.github.io/FenixCorp/" -ForegroundColor Green
Write-Host "`n⚙️  Recuerda activar GitHub Pages en:" -ForegroundColor Yellow
Write-Host "   Settings > Pages > Source > GitHub Actions`n" -ForegroundColor Yellow
