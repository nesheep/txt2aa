import { cpus } from 'os';
import * as path from 'path';

import { app, BrowserWindow, ipcMain } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';

import * as C from './channel';
import * as listener from './listener';
import * as pytxt2aa from './pytxt2aa';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    minWidth: 830,
    minHeight: 680,
    autoHideMenuBar: true,
    show: false,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#537146',
      symbolColor: '#212121',
    },
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      spellcheck: false,
    },
  });

  win.once('ready-to-show', () => win.show());

  if (app.isPackaged) {
    win.loadURL(`file://${__dirname}/../index.html`);
  } else {
    win.loadURL('http://localhost:3000/index.html');
    win.webContents.openDevTools();
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname, '..', '..', 'node_modules', '.bin', 'electron.cmd'),
      forceHardReset: true,
      hardResetMethod: 'exit',
    });
  }
};

const quit = () => {
  app.isPackaged && pytxt2aa.kill();
  app.quit();
};

app.whenReady().then(async () => {
  if (app.isPackaged) {
    const cpusLen = cpus().length;
    const procs = cpusLen < 8 ? cpusLen : 8;
    await pytxt2aa.run(procs);
  }

  if (!app.isPackaged) {
    try {
      const name = await installExtension(REACT_DEVELOPER_TOOLS);
      console.log(`Added Extension: ${name}`);
    } catch (error) {
      console.log(`An error occurred: ${error}`);
    }
  }

  createWindow();

  ipcMain.handle(C.GET_PORTS, listener.getPorts);
  ipcMain.handle(C.OPEN_IMAGE, listener.openImage);
  ipcMain.handle(C.OPEN_FONT, listener.openFont);
  ipcMain.on(C.DOWNLOAD, listener.downloadUrl);

  app.once('window-all-closed', () => quit());
});
