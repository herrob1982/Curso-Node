

const {getAge} = require('../plugins/get-age.plugin');
const {getId} = require('../plugins/get-id.plugin');
const {http} = require('../plugins/http-client.plugin');    

module.exports = {
    getAge,
    getId,
    http
}
