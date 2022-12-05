import * as fs from 'node:fs/promises';
const anotherFile = new URL('./files/fileToRead.txt', import.meta.url);
const err = new Error('FS operation failed');
//read.js - implement function that prints content of the fileToRead.txt 
// into console (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
async function checkExists(path) {  
    try {
      await fs.access(path)
        return true
    } catch {
        
      return false
    }
  }

const read = async () => {
    // Write your code here 
    const fileExist = await checkExists(anotherFile)
    if(fileExist) {
        const data = await fs.readFile(anotherFile, { encoding: 'utf8' });
            console.log(data)
    } else {
        throw err
    }
    };
    
    await read();