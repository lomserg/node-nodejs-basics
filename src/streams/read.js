
import { createReadStream } from 'fs'
const anotherFile = new URL('./files/fileToRead.txt', import.meta.url);
const read = async () => {
    // Write your code here 
    const myReadStream = createReadStream(anotherFile)
    myReadStream.on('data', function(chunck){
        process.stdout.write(chunck)
    })
};

await read();