import * as crypto from 'node:crypto'
import * as fs from 'node:fs/promises';
const anotherFile = new URL('./files/fileToCalculateHashFor.txt', import.meta.url);


const calculateHash = async () => {
    // Write your code here 
    const data = await fs.readFile(anotherFile, { encoding: 'utf8' });
    const hash = crypto.createHash('sha256')
    const result = hash.update(data).digest('hex')
    console.log(result)
};

await calculateHash();