import { createGzip, createUnzip } from'zlib';
import { pipeline } from 'stream';
import path from 'path';
import {
  createReadStream,
  createWriteStream,
} from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    // Write your code here 
  const myWriteStream = createWriteStream(__dirname + '/files/fileToCompress.txt')
  const myReadStream = createReadStream(__dirname + '/files/archive.gz')
  const unZip = createUnzip()
  pipeline(myReadStream, unZip, myWriteStream, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });

};

await decompress();