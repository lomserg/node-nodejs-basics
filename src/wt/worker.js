import { workerData, parentPort } from 'worker_threads'


// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

// const sendResult = () => {
//     console.log(workerData);
//     // This function sends result of nthFibonacci computations to main thread
    
// };
// console.log(parentPort);

parentPort.postMessage([workerData, nthFibonacci(workerData)])