const {EventEmitter} = require('events');

const myEventEmitter = new EventEmitter();

const makeCoffee = (name) => {
    console.log(`Kopi ${name} telah dibuat!`);
}

const makeBill = (price) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}

//CARA 1
//fungsi sebelumnya gunakan fungsi const ..... = ({name}) =>{}
// myEventEmitter.on('coffee-order', makeCoffee);
// myEventEmitter.on('coffee-order', makeBill);

//CARA 2
//fungsi sebelumnya gunakan const ..... = (name) => {}
const onCoffeeOrderedListener = ({name, price}) => {
    makeCoffee(name);
    makeBill(price);
}

myEventEmitter.on('coffee-order', onCoffeeOrderedListener);

myEventEmitter.emit('coffee-order', {name: 'Tubruk', price: 15000});