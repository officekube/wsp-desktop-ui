const { app, BrowserWindow } = require('electron');
const path = require('path');

async function initializeApp() {
    const isDev = (await import('electron-is-dev')).default;

    function createWindow() {
        const win = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            },
        });

        const indexPath = path.join(__dirname, isDev ? '' :'index.html');
        win.loadURL(
            isDev
                ? 'http://localhost:3000'
                : `file://${indexPath}`
        );

        if (isDev) {
            win.webContents.openDevTools();
        }
    }

    app.whenReady().then(createWindow);

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
}

initializeApp().catch(console.error);