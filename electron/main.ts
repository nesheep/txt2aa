import * as path from 'path';

import { app, BrowserWindow } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';

import * as pytxt2aa from './pytxt2aa';


const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    minWidth: 1000,
    minHeight: 800,
    webPreferences: { preload: path.join(__dirname, 'preload.js') },
  });

  if (app.isPackaged) {
    win.loadURL(`file://${__dirname}/../index.html`);
  } else {
    win.loadURL('http://localhost:3000/index.html');

    win.webContents.openDevTools();

    require('electron-reload')(__dirname, {
      electron: path.join(__dirname, '..', '..', 'node_modules', '.bin', 'electron.cmd'),
      forceHardReset: true,
      hardResetMethod: 'exit'
    });
  }
};

const quit = () => {
  app.isPackaged && pytxt2aa.kill();
  app.quit();
};

app.whenReady().then(async () => {
  app.isPackaged && pytxt2aa.run();

  try {
    const name = await installExtension(REACT_DEVELOPER_TOOLS);
    console.log(`Added Extension: ${name}`);
  } catch (error) {
    console.log(`An error occurred: ${error}`);
  }

  createWindow();

  app.once('window-all-closed', () => quit());
});
