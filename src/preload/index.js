const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  getPythonVersion: () => ipcRenderer.invoke('get-python-version'),
  getNodeVersion: () => ipcRenderer.invoke('get-node-version'),
});