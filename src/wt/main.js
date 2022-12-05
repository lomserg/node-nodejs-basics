import { Worker } from 'worker_threads'
import { cpus } from 'os';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


const performCalculations = async () => {
    const cp = cpus()
    let number = 10
    let workers = [];


    cp.map((_) => {
        workers.push(new Promise((res, rej) => {
            const worker = new Worker(__dirname + '/worker.js', {
                workerData: number++
            })
            worker.on('message', msg => res(msg))
            worker.on('error', msg => rej(msg))
        }).then((data) => console.log(data)));
    });
    return workers;
};

await performCalculations();