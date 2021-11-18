const fs = require('fs');
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if error, reject the Promise and send error to the Promise's catch method
            if (err) {
                reject(err);
                //return to end function and not execute the resolve function
                return;
            }

            //if ok, resolve the Promise and send succesful data to .then()method
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });


    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err)
                return;
            }
            resolve({
                ok: true,
                message: 'css file copied'

            });
        });
        
        
  });

}

module.exports = { writeFile, copyFile };