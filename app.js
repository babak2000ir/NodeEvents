import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('event', (param) => {
    setImmediate(() => {
        param.a++;
        console.log(`Zeroth handler(immidiate): an event occurred! ${param.a}`);
    });
});
myEmitter.on('event', (param) => {
    setTimeout(() => {
        param.a++;
        console.log(`First handler(3s): an event occurred! ${param.a}`);
    }, 3000);
});
myEmitter.on('event', (param) => {
    setTimeout(() => {
        param.a++;
        console.log(`Second handler(2s): an event occurred! ${param.a}`);
    }, 2000);
});
myEmitter.on('event', (param) => {
    setImmediate(() => {
        param.a++;
        console.log(`Third handler(immidiate): an event occurred! ${param.a}`);
    });
});
myEmitter.on('event', (param) => {
    param.a++;
    console.log(`Last handler(no timer): an event occurred! ${param.a}`);
});
const eventParams = {};
eventParams.a = 1;
myEmitter.emit('event', eventParams);
console.log(`Coming out of event handlers: ${eventParams.a}`);