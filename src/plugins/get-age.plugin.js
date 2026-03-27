
const getAgePlugin = require('get-age')

const getAge = (birthdate) => {
    if (!birthdate) throw new Error('Birthdate is required');

    return getAgePlugin(new Date(birthdate));
    
}

module.exports= {
    getAge
}