declare global {
  interface Window {
    api: Api;
  }
}

export type Api = {
  getPort: () => Promise<number>;
  openImage: () => Promise<string>;
  openFont: () => Promise<string>;
  download: (url: string, filename: string) => void;
};
