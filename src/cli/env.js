import { EOL } from "os"

const parseEnv = () => {
    const processEnvRss = Object.keys(process.env)
        .filter((key) => key.includes("RSS"))
        .reduce((acc, item) => {
            acc.push(`${item}=${process.env[item]}`)
            return acc
        }, [])
        .join("; ")

    console.log(processEnvRss)
    console.log(EOL + "The end.")
};

parseEnv();