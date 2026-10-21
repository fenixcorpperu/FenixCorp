@echo off
SET GIT="C:\Users\almac_\AppData\Local\GitHubDesktop\app-3.6.7\resources\app\git\cmd\git.exe"
SET REPO=d:\PROYECTOS\FENIX\FenixCorp

echo.
echo =========================================
echo   FENIX CORP - Publicando en GitHub
echo =========================================
echo.

cd /d %REPO%

echo [1/5] Configurando remoto origin...
%GIT% remote remove origin 2>nul
%GIT% remote add origin https://github.com/fenixcorpperu/FenixCorp.git
echo     OK

echo [2/5] Configurando rama main...
%GIT% checkout -b main 2>nul || %GIT% checkout main
echo     OK

echo [3/5] Agregando archivos...
%GIT% add .
echo     OK

echo [4/5] Creando commit...
%GIT% commit -m "feat: lanzamiento inicial sitio web corporativo Fenix Corp"
echo     OK

echo [5/5] Publicando en GitHub...
%GIT% push -u origin main
echo.
echo =========================================
echo   Listo! Sitio publicado.
echo   Activa GitHub Pages en:
echo   Settings > Pages > Source > GitHub Actions
echo   URL: https://fenixcorpperu.github.io/FenixCorp/
echo =========================================
echo.
pause
