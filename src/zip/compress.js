import { createGzip } from'zlib';
import { pipeline } from 'stream';
import path from 'path';
import {
  createReadStream,
  createWriteStream,
} from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const compress = async () => {
    // Write your code here 
   
    const myReadStream = createReadStream(__dirname + '/files/fileToCompress.txt');
    const myWriteStream = createWriteStream(__dirname + '/files/archive.gz');
    const gzip = createGzip();
    pipeline(myReadStream, gzip, myWriteStream, (err) => {
        if (err) {
          console.error('An error occurred:', err);
          process.exitCode = 1;
        }
      });

};

await compress();