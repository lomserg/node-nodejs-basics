import { spawn } from 'child_process'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const spawnChildProcess = async () => {
    let initiated = false
    const chProces = spawn(`node`, [`${__dirname}/files/script.js`, ...process.argv])
    process.stdin.on('data', (msg) => {
        chProces.stdin.write(msg)
    })
    chProces.stdout.on('data', (data) => {
        console.log(data.toString())
        if(!initiated){
            console.log('Please write to console..' + '\n') 
            initiated = true
        }
    })
};

spawnChildProcess();