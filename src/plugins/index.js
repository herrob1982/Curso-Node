

const {getAge} = require('../plugins/get-age.plugin');
const {getId} = require('../plugins/get-id.plugin');
const {http, httpAxios} = require('../plugins/http-client.plugin');    

module.exports = {
    getAge,
    getId,
    http,
    httpAxios
}
