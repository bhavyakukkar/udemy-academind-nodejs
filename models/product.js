const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        const p = path.join(path.dirname(require.main.filename), 'data', 'products');
        products.push(this);
    }

    static fetchAll() {
        return products;
    }
}