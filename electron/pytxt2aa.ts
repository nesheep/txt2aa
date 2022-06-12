import { execSync, spawn } from 'child_process';
import { createServer } from 'net';
import * as path from 'path';

let pids: number[] = [];
export let ports: number[] = [];

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

const runOne = async (): Promise<void> => {
  const port = await randomPort();
  ports.push(port);
  const proc = spawn(path.resolve('lib/pytxt2aa/pytxt2aa.exe'), ['-p', String(port)]);
  if (proc.pid) pids.push(proc.pid);
};

export const run = async (procs: number = 1): Promise<void> => {
  for (let i = 0; i < procs; i++) await runOne();
};

export const kill = () => {
  pids.forEach(pid => execSync(`taskkill /F /PID ${pid} /T`));
};
