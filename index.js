const fs = require('fs');

fs.writeFile('README2.md', '# Description', (error, data) => {
    if(error) {console.log("there was error", err)}
    console.log("succes")
})

fs.readFile('data.txt', 'utf-8', (error, data) => {
    if (error) throw error;
    console.log("here is what's in data text file", data)
})

const fs = requre('fs';
console.log(process))