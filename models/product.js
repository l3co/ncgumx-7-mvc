const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path');

const dataPath = path.join(rootDir, 'data', 'products.json')

const getDataFromJsonFile = cb => {
    fs.readFile(dataPath, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
}

module.exports = class Product {

    constructor(title) {
        this.title = title;
    }

    save() {
        getDataFromJsonFile(products => {
            products.push(this);
            fs.writeFile(dataPath, JSON.stringify(products), (err) => {
                if (err) {
                    console.log("Error to write file", err);
                }
            });
        });
    }

    static fetchAll(cb) {
        return getDataFromJsonFile(cb);
    }
}