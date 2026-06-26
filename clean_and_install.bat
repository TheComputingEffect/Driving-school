@echo off
echo ===================================================
echo [1/4] Stopping any running Node.js / Next.js processes...
echo ===================================================
taskkill /f /im node.exe 2>nul

echo.
echo ===================================================
echo [2/4] Deleting existing node_modules directory...
echo ===================================================
if exist node_modules (
    rmdir /s /q node_modules
    if exist node_modules (
        echo WARNING: Could not delete node_modules completely. 
        echo Please close any editor (VS Code, etc.) or folders using it and run this script again.
        pause
        exit /b 1
    )
)

echo.
echo ===================================================
echo [3/4] Reinstalling dependencies (npm install)...
echo ===================================================
call npm install

echo.
echo ===================================================
echo [4/4] Starting the development server (npm run dev)...
echo ===================================================
call npm run dev

pause
