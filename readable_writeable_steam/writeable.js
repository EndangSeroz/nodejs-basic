const fs = require('fs');

const writeableSteam = fs.createWriteStream('output.txt');

writeableSteam.write('Ini baris pertama\n');
writeableSteam.write('Ini baris kedua\n');
writeableSteam.end('Akhir dari writeable steam');