const axios = require('axios');
const fs = require('fs');
const util = require('util');

async function getUsers() {
    const response = await axios.get('https://reqres.in/api/users');
    return response;
}

async function readDataFromTxt() {
    const readFilePromisify = util.promisify(fs.readFile);

    readFilePromisify('./data.txt')
        .then(data => {
            console.log(data.toString());
        })
}

module.exports = {getUsers, readDataFromTxt};
