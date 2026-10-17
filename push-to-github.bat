@echo off
title Push Hieu Portfolio to GitHub
cd /d "C:\Users\hieu.vu\.gemini\antigravity\scratch\hieu-portfolio"

echo ========================================================
echo Preparing to push portfolio to GitHub:
echo https://github.com/minhhieuvudang-commits/hieuvudangminh-portfolio.git
echo ========================================================

git init
git branch -M main
git remote remove origin 2>nul
git remote add origin https://github.com/minhhieuvudang-commits/hieuvudangminh-portfolio.git
git add .
git commit -m "feat: complete premium personal portfolio website for Hieu Vu Dang Minh"
git push -u origin main

echo.
echo ========================================================
echo Done! If authentication was required, your browser has
echo prompted you to log in to GitHub.
echo ========================================================
pause
