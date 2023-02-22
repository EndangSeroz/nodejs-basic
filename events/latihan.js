//TODO 1
const {EventEmitter} = require('events');

const birthdayEventListener = ({name}) => {
    console.log(`Happy Birthday ${name}!`);
}

//TODO 2
const myEmitter = new EventEmitter();

//TODO 3
myEmitter.on('hbd', birthdayEventListener);

//TODO 4
myEmitter.emit('hbd', {name: 'Endang'});