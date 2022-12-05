import { spawn } from 'child_process'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const spawnChildProcess = async (args) => {
    let initiated = false
    const cProces = spawn('node', [`${__dirname}/files/script.js`, ...args.split(' ')])
    process.stdin.on('data', (msg) => {
        cProces.stdin.write(msg)
    })
    chProces.stdout.on('data', (data) => {
        console.log(data.toString())
        if(!initiated){
            console.log('Please write to console..' + '\n') 
            initiated = true
        }
    })
};

spawnChildProcess('--silent --all');