import * as fs from 'node:fs/promises';

const err = new Error('FS operation failed');
 
const fileToRemove = new URL('./files/fileToRemove.txt', import.meta.url);


async function checkExists(path) {  
    try {
      await fs.access(path)
      console.log('FS operation failed')
        return true
    } catch {
        
      return false
    }
  }


//implement function that deletes file fileToRemove.txt 
//(if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)



const remove = async () => {
    // Write your code here 
    const fileExist = await checkExists(fileToRemove)
    if(fileExist) {
       await fs.unlink(fileToRemove)
    } else {
        throw err
    }
    
};

await remove();