const EventEmitter = require('events');
const emitterTest = new EventEmitter();

emitterTest.on('test', () => {
    console.log('Emitter is working...')
});

emitterTest.emit('test');