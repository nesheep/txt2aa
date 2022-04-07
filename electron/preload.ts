import { ipcRenderer, contextBridge } from 'electron';

import * as C from './cannel';

contextBridge.exposeInMainWorld('api', {
  getPort: async (): Promise<number> => await ipcRenderer.invoke(C.GET_PORT),
  openImage: async (): Promise<string> => await ipcRenderer.invoke(C.OPEN_IMAGE),
  openFont: async (): Promise<string> => await ipcRenderer.invoke(C.OPEN_FONT),
  download: (url: string, filename: string) => ipcRenderer.send(C.DOWNLOAD, url, filename),
});
