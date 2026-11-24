@echo off
title Hieu Vu Dang Minh - Portfolio Server
cd /d "%~dp0"

set "NODE_DIR=C:\Users\hieu.vu\AppData\Local\Microsoft\WinGet\Packages\OpenJS.NodeJS.LTS_Microsoft.Winget.Source_8wekyb3d8bbwe\node-v24.20.0-win-x64"
if exist "%NODE_DIR%\npm.cmd" (
    set "PATH=%NODE_DIR%;%PATH%"
    set "NPM_EXEC=%NODE_DIR%\npm.cmd"
) else (
    set "NPM_EXEC=npm"
)

echo ========================================================
echo Starting Hieu Vu Dang Minh Portfolio Website...
echo URL: http://localhost:3000
echo ========================================================
echo.

"%NPM_EXEC%" run start -- -p 3000
pause
