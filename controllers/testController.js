const testService = require('../services/testService')

const getAll = (req, res) => {
    testService.getAll().then(tests => res.json(tests));
};

const create = (req, res) => {
    testService.create(req.body).then(test => res.json(test));
};

module.exports = {
    getAll,
    create
};