import { exec, execSync } from 'child_process';
import { createServer } from 'net';
import * as path from 'path';

let pid = 0;
export let port = 33333;

const randomPort = (): number => {
  try {
    const MAXPORT = 65536;
    const MINPORT = 20000;
    const p = Math.round(Math.random() * (MAXPORT - MINPORT) + MINPORT);
    const server = createServer();
    server.on('error', err => { throw Error(err.message) });
    server.listen(p, '127.0.0.1', () => { server.close() });
    return p;
  } catch {
    return randomPort();
  }
};

export const run = () => {
  port = randomPort();
  const proc = exec(`${path.resolve('libs/pytxt2aa/pytxt2aa.exe')} -p ${port}`);
  pid = proc.pid ? proc.pid : 0;
};

export const kill = () => {
  execSync(`taskkill /F /PID ${pid} /T`);
};
