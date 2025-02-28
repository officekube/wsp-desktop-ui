const { app, BrowserWindow } = require('electron');
const path = require('path');

if (require('electron-squirrel-startup')) {
  app.quit();
}

let mainWindow = null;

function createWindow() {
  // Avoid creating multiple windows unnecessarily
  if (mainWindow) return;


  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, '../preload/index.js'),
    },
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:3000')
    .then(() => {
      mainWindow.webContents.openDevTools();
    })
    .catch((err) => {
      console.error('Failed to load URL:', err);
    });
  } else {
    mainWindow.loadFile(path.join(__dirname, '../../build/index.html'))
    .catch((err) => {
      console.error('Failed to load file:', err);
    });
  }

  // Clean up mainWindow reference when closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Ensure the app is ready before creating the window
app.whenReady().then(() => {
  createWindow();
}).catch((err) => {
  console.error('App failed to start:', err);
});

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