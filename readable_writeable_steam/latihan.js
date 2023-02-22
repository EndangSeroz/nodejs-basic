const fs = require('fs');
const { resolve } = require('path');

const readableSteam = fs.createReadStream(resolve(__dirname, 'latihan_input.txt'), {
    highWaterMark:15
});

const writeableSteam = fs.createWriteStream(resolve(__dirname, 'latihan_output.txt'));

readableSteam.on('readable', () => {
    try {
        writeableSteam.write(`${readableSteam.read()}\n`);
    } catch (error) {
        
    }
});

readableSteam.on('end', () => {
    writeableSteam.end();
});