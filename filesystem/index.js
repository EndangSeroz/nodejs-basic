const fs = require('fs');
const path = require('path');

path.resolve(__dirname, 'notes.txt');

const fileReadCallback = (error, data) => {
    if (error) {
        console.log(`Gagal membaca berkas`);
        return;
    }
    console.log(data);
}

fs.readFile('notes.txt', 'UTF-8', fileReadCallback);