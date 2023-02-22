const fs = require('fs');

const readableSteam = fs.createReadStream('../filesystem/notes.txt', {
    highWaterMark:10
});

readableSteam.on('readable', () => {
    try {
        process.stdout.write(`[${readableSteam.read()}]`);
    } catch (error) {
        
    }
});

readableSteam.on('end', () => {
    console.log(`Done`);
});