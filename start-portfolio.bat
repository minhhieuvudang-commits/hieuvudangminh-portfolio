@echo off
title Hieu Vu Dang Minh - Portfolio Server
cd /d "C:\Users\hieu.vu\.gemini\antigravity\scratch\hieu-portfolio"

set "NODE_DIR=C:\Users\hieu.vu\AppData\Local\Microsoft\WinGet\Packages\OpenJS.NodeJS.LTS_Microsoft.Winget.Source_8wekyb3d8bbwe\node-v24.20.0-win-x64"
if exist "%NODE_DIR%\npm.cmd" (
    set "PATH=%NODE_DIR%;%PATH%"
)

echo ========================================================
echo Starting Hieu Vu Dang Minh Portfolio Website...
echo URL: http://localhost:3000
echo ========================================================

npm run start -- -p 3000
pause
