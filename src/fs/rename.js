import * as fs from 'node:fs/promises';

const err = new Error('FS operation failed');
 
const wrongFilePath = new URL('./files/wrongFilename.txt', import.meta.url);
const properFilePath = new URL('./files/wrongFilename.md', import.meta.url);

async function checkExists(path) {  
    try {
      await fs.access(path)
     
        return true
    } catch {
        
      return false
    }
  }


const rename = async () => {
        // Write your code here 
        // check wrongFilename exist - true
    const wrongFileExist = await checkExists(wrongFilePath)
    console.log(wrongFileExist)
    // check properFilename.md already exists  - false
    const properFileExist = await checkExists(properFilePath)
    console.log(properFileExist)
    if(wrongFileExist && !properFileExist) {
        fs.rename(wrongFilePath, properFilePath)
    } else {
    throw err
    }
};

await rename();
