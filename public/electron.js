const { app, BrowserWindow, protocol } = require('electron');
const path = require('path');
const url = require('url');

async function initializeApp() {
  const isDev = (await import('electron-is-dev')).default;
  console.log('Is Dev:', isDev);

  function createWindow() {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
      },
    });

    const appPath = path.join(__dirname, '../build');
    protocol.registerFileProtocol('file', (request, callback) => {
      const pathname = new URL(request.url).pathname;
      const filePath = path.join(appPath, pathname);
      callback({ path: filePath });
    });

    const fileUrl = url.format({
      pathname: path.join(__dirname, '../build/index.html'),
      protocol: 'file:',
      slashes: true
    });
    win.loadURL(fileUrl).catch(err => console.error('Failed to load URL:', err));
    win.webContents.openDevTools();
  }

  app.whenReady().then(() => {
    console.log('App is ready');
    createWindow();
  }).catch(err => console.error('App failed to start:', err));

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