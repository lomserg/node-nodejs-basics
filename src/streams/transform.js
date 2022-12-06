import { Transform, pipeline } from "stream";
import { EOL } from "os";

const transform = async () => {
    // Write your code here
    const reverse = new Transform({transform(chunk, encoding, callback){
        callback(null, chunk.toString()
                            .replace(EOL, '')
                            .split('')
                            .reverse()
                            .join('')+EOL
        )
    }

})

    pipeline(
        process.stdin,
        reverse,
        process.stdout,
        (err) => {
            console.log(err)
        }
    )
};

await transform();