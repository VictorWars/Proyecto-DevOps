const Test = require('../models').Test;

const getAll = () => {
    return new Promise((resolve, reject) => {
        Test.findAll().then((tests) => resolve(tests)).catch((error) => reject(error));
    });
}

const create = (body) => {
    return new Promise((resolve, reject) => {
        Test.create(body).then((test)=>resolve(test));
    });
};


module.exports = {
    getAll,
    create
};