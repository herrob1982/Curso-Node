
//Patron adaptador para el cliente http, se puede usar fetch o axios, en este caso se usara fetch

const httpClientePlugin = {

    get: async (url) => {
        const response = await fetch(url);
        return await response.json();
    },
    post: async (url, data) => {},
    put: async (url, data) => {},
    delete: async (url) => {}

}

const axios = require("axios");

const httpClientePluginAxios = {

    get: async (url) => {
        const {data} = await axios(url);
        return await data;
    },
    post: async (url, data) => {},
    put: async (url, data) => {},
    delete: async (url) => {}

}



module.exports = {
    http: httpClientePlugin,
    httpAxios: httpClientePluginAxios,
};