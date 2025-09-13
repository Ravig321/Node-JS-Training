const EventEmitter = require('events');

let eventEmitter = new EventEmitter()


eventEmitter.on('greet', ()=>{
    console.log(`Hello !!!!!`);
})
eventEmitter.on('greet', (name)=>{
    console.log(`Hello ${name} !!!!!`);
})

// This will execute only once
eventEmitter.once('morning', (name)=>{
    console.log(`Hello Good Morning ${name} !!!!!`);
})


const myListner = ()=> { console.log(`Hello Ravi !!!!!`)}
eventEmitter.on('greet2', myListner);
eventEmitter.removeListener('greet2', myListner);
eventEmitter.on('greet2', myListner);

// To invoke the event

eventEmitter.emit('greet');
eventEmitter.emit('morning', 'Ravi');
eventEmitter.emit('morning', 'Ravi');
eventEmitter.emit('greet', 'Ravi');
eventEmitter.emit('greet2');

console.log(eventEmitter.listenerCount('morning'));

console.log(eventEmitter.listeners('greet'));
console.log(eventEmitter.listeners('morning'));
console.log(eventEmitter.listeners('greet2'));










