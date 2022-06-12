import { ipcRenderer, contextBridge } from 'electron';

import * as C from './channel';

contextBridge.exposeInMainWorld('api', {
  getPorts: async (): Promise<number[]> => await ipcRenderer.invoke(C.GET_PORTS),
  openImage: async (): Promise<string> => await ipcRenderer.invoke(C.OPEN_IMAGE),
  openFont: async (): Promise<string> => await ipcRenderer.invoke(C.OPEN_FONT),
  download: (url: string, filename: string) => ipcRenderer.send(C.DOWNLOAD, url, filename),
});
