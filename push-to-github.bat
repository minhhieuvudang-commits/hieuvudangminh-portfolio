@echo off
title Push Hieu Portfolio to GitHub
cd /d "%~dp0"

echo ========================================================
echo Updating Portfolio to GitHub & Vercel
echo Repository: https://github.com/minhhieuvudang-commits/hieuvudangminh-portfolio.git
echo ========================================================
echo.

set "GIT_CMD=git"
if exist "C:\Users\hieu.vu\AppData\Local\Programs\Git\cmd\git.exe" (
    set "GIT_CMD=C:\Users\hieu.vu\AppData\Local\Programs\Git\cmd\git.exe"
)

echo Adding latest files...
"%GIT_CMD%" add .

echo Committing latest changes...
"%GIT_CMD%" commit -m "feat: sync latest portfolio updates with gallery layout and animations" 2>nul

echo Pushing to GitHub (this will auto-deploy to Vercel)...
"%GIT_CMD%" push origin main

echo.
echo ========================================================
echo SUCCESS!
echo Your latest updates have been pushed to GitHub.
echo Vercel is now automatically building and deploying your live website!
echo ========================================================
echo.
pause
