
import * as fs from 'node:fs/promises';
const err = new Error('FS operation failed');
const anotherFile = new URL('./files/fresh.txt', import.meta.url);
const fileText = 'I am fresh and young'

async function checkExists(path) {  
    try {
      await fs.access(path)
      console.log('FS operation failed')
        return true
    } catch {
        
      return false
    }
  }


const create = async () => {
    // Write your code here 
    
    const fileIsExist = await checkExists(anotherFile)
        if (fileIsExist) {
             throw err
        }
        await fs.writeFile(anotherFile, fileText, 'utf8');
    
};

await create();
