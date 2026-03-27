

const {getAge} = require('../plugins/get-age.plugin');
const {getId} = require('../plugins/get-id.plugin');
const {http, httpAxios} = require('../plugins/http-client.plugin');    
const buildLogger = require('../plugins/logger.plugin');

module.exports = {
    getAge,
    getId,
    http,
    httpAxios,
    buildLogger
}
