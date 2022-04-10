import { exec, execSync } from 'child_process';
import { createServer } from 'net';
import * as path from 'path';

let pid = 0;
export let port = 33333;

const randomPort = async (): Promise<number> => {
  const MAXPORT = 65536;
  const MINPORT = 10000;
  const rp = (cb: (p: number) => void) => {
    const p = Math.round(Math.random() * (MAXPORT - MINPORT) + MINPORT);
    const server = createServer();
    server.listen(p, '127.0.0.1', () => {
      server.once('close', () => cb(p));
      server.close();
    });
    server.on('error', _ => { rp(cb) });
  };
  return new Promise(resolve => { rp(p => resolve(p)) });
};

export const run = async (): Promise<void> => {
  port = await randomPort();
  const proc = exec(`${path.resolve('libs/pytxt2aa/pytxt2aa.exe')} -p ${port}`);
  pid = proc.pid ? proc.pid : 0;
};

export const kill = () => {
  execSync(`taskkill /F /PID ${pid} /T`);
};
