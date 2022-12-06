
import * as fs from 'node:fs/promises';
const err = new Error('FS operation failed');
const anotherFile = new URL('./files/', import.meta.url);

async function checkExists(path) {  
    try {
      await fs.access(path)
        return true
    } catch {
        
      return false
    }
  }




  const list = async () => {
    // Write your code here 
    const folderExist = await checkExists(anotherFile)
    if(folderExist) {
        const files = await fs.readdir(anotherFile);
        for (const file of files)
          console.log(file);
    }else{
        throw err
    }
};

await list();