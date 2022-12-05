import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
const err = new Error('FS operation failed');
const projectFolderPath = new URL('./files/', import.meta.url);
const copyFolderPath = new URL('./files_copy/', import.meta.url)  
const anotherFile = new URL('./files/fresh.txt', import.meta.url);
const copyAnotherFile = new URL('./files_copy/fresh.txt', import.meta.url);

async function checkExists(path) {  
    try {
      await fs.access(path)
     
        return true
    } catch {
        
      return false
    }
  }


const copy = async () => {
    //  проверка есть ли папка files, дожно быть true
    const folderExist = await checkExists(projectFolderPath)
   // проверка есть уже существует папка files_copy, дожно быть false
    const copyFolderExist = await checkExists(copyFolderPath)
    console.log(folderExist)
    console.log(copyFolderExist)
   if(folderExist && !copyFolderExist) {
        // создаваемую папку files_copy
    await fs.mkdir(copyFolderPath, { recursive: true });
     //копируешь содержимое files 
    await fs.copyFile(anotherFile, copyAnotherFile);
   } else {
    throw err
   }
}



 copy();