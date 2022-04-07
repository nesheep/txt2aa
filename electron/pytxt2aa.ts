import { exec, execSync } from 'child_process';
import * as path from 'path';

export let port = 0;
let pid = 0;

export const run = () => {
  port = 33333;
  const proc = exec(`${path.resolve('libs/pytxt2aa/pytxt2aa.exe')} -p ${port}`);
  pid = proc.pid ? proc.pid : 0;
};

export const kill = () => {
  execSync(`taskkill /F /PID ${pid} /T`);
};
