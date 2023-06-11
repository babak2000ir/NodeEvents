import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('event', (param) => {
    param.a++;
    console.log(`First handler: an event occurred! ${param.a}`);
});
myEmitter.on('event', (param) => {
    param.a++;
    console.log(`Second handler: an event occurred! ${param.a}`);
});

const eventParams = {};
eventParams.a = 1;
myEmitter.emit('event', eventParams);
console.log(`Coming out of event handlers: ${eventParams.a}`);