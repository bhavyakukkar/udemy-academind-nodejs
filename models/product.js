const fs = require('fs');
const { resolve } = require('path');
const path = require('path');

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if(!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });
    }

    static fetchAll() {
        return new Promise((resolve, reject) => {
            const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');
            fs.readFile(p, (err, fileContent) => {
                if (err) {
                    resolve([]);
                }
                else {
                    resolve(JSON.parse(fileContent));
                }
            });
        });
    }
}