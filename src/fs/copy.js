import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'node:path';
const err = new Error('FS operation failed');
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)



async function checkExists(path) {  
    try {
      await fs.access(path)
     
        return true
    } catch {
        
      return false
    }
  }


const copy = async () => {
  const projectFolderPath = __dirname + '/files/'
const copyFolderPath = __dirname + '/files_copy/'  
const anotherFile = __dirname + '/files/fresh.txt'
const copyAnotherFile = __dirname + '/files_copy/fresh.txt'
   try{
     const folderExist = await checkExists(projectFolderPath)
     const copyFolderExist = await checkExists(copyFolderPath)
     
     if(folderExist && !copyFolderExist) {
      
      await fs.mkdir(copyFolderPath, { recursive: true });
      
      await fs.copyFile(anotherFile, copyAnotherFile);
     } else{
      throw err
     }
   } catch(err){
    throw err
   }
   }




 copy();