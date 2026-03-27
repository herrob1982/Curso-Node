

// const template = require ('./js-foundation/01-template');
// console.log(template.emailTemplate);

// const { emailTemplate } = require ('./js-foundation/01-template');
// console.log(emailTemplate);

// require('./js-foundation/02-destructuring');


// const { getUserById} =  require('./js-foundation/03-callbacks.js');
// const { getUserByIdArrow } =  require('./js-foundation/04-arrow.js');   

// const userId = 2;

// getUserById(userId, function(error,user){
//     if(error){
//         throw new Error(error);
//     } 
//     console.log('Usuario encontrado:', {user});
    
// })


// getUserByIdArrow(userId, (error, user) => {
//     if (error) {
//         throw new Error(error);
//     }

//     console.log('Usuario encontrado Flecha:', { user });
// });


// require('./js-foundation/05-factory.js');


// const {getAge, getId} = require('./plugins');

// const {builtMakePerson} = require('./js-foundation/05-factory.js');

// const makePerson = builtMakePerson({getId, getAge});
// const obj = { name: 'roberto', age: 43 , birthdate: '1982-09-07'};

// const john = makePerson(obj);
// console.log({john});    




const {getPokemonById, getPokemonByIdCadena, getPokemonByIdAsync} = require('./js-foundation/06-promises');
const { buildLogger } = require('./plugins');

//getPokemonById(2);

//  getPokemonByIdCadena(22)
//  .then((pokemon) => console.log(pokemon.abilities))
//  .catch(error => console.log('Por favor intente de nuevo'))
//  .finally(() => console.log('Proceso finalizado'));



const logger = buildLogger('aaplication11');
logger.log('Iniciando aplicación');





