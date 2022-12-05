
import { createWriteStream } from 'fs'
const anotherFile = new URL('./files/fileToWrite.txt', import.meta.url);
const write = async () => {
    // Write your code here 
    const myWriteStream = createWriteStream(anotherFile)
    process.stdin.pipe(myWriteStream)
};

await write();