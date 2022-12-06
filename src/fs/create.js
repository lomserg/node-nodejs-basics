import * as fs from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const err = new Error('FS operation failed');
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

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
  
  const anotherFile = __dirname + '/files/fresh.txt'
  const fileText = 'I am fresh and young'
    
    const fileIsExist = await checkExists(anotherFile)
        if (fileIsExist) {
             throw err
        }
        await fs.writeFile(anotherFile, fileText, 'utf8');
    
};

await create();
