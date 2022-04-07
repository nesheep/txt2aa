import { BrowserWindow, FileFilter, IpcMainEvent, IpcMainInvokeEvent, dialog } from 'electron';
import { download } from 'electron-dl';

import { port } from './pytxt2aa';

export const getPort = (_: IpcMainInvokeEvent): number => port;

const openFile = async (event: IpcMainInvokeEvent, filters: FileFilter[]): Promise<string> => {
  const win = BrowserWindow.fromWebContents(event.sender);
  if (!win) return '';
  const dialogRet = await dialog.showOpenDialog(win, { filters });
  if (!dialogRet.filePaths.length) return '';
  return dialogRet.filePaths[0];
};

export const openImage = async (event: IpcMainInvokeEvent): Promise<string> => {
  const filters: FileFilter[] = [{ name: 'Images', extensions: ['jpg', 'png'] }];
  return await openFile(event, filters);
};

export const openFont = async (event: IpcMainInvokeEvent): Promise<string> => {
  const filters: FileFilter[] = [{ name: 'Fonts', extensions: ['ttf', 'ttc', 'otf', 'otc'] }];
  return await openFile(event, filters);
};

export const downloadUrl = async (event: IpcMainEvent, url: string, filename: string): Promise<void> => {
  const win = BrowserWindow.fromWebContents(event.sender);
  if (!win) return;
  await download(win, url, { filename, saveAs: true });
};
