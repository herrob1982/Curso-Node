
// const {getAge, getId} = require('../plugins');

// const builtPerson = ({ name, birthdate }) => {

//     return {
//         id: getId(),
//         name: name,
//         age: getAge(new Date(birthdate)),
//         birthdate: birthdate,
//         }

// }

// const obj = { name: 'roberto', age: 43 , birthdate: '1982-09-07'};
// const john = builtPerson(obj);
// console.log({john});

// module.exports = {
//     builtPerson
// }


    const builtMakePerson = ({getId, getAge}) => {

        return  ({ name, birthdate }) => {

            return {
                id: getId(),
                name: name,
                age: getAge(new Date(birthdate)),
                birthdate: birthdate,
                }
        }

    }

    module.exports = {
        builtMakePerson
    }




