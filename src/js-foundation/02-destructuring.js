//console.log(process.env);

const { NODE_ENV, PORT, SHELL } = process.env;
console.log('NODE_ENV:', NODE_ENV);
console.log('PORT:', PORT);
console.log('SHELL:', SHELL);   

console.table({ NODE_ENV, PORT, SHELL });


const parametros = ['valor1', 'valor2', 'valor3'];

const [,,valorParametro3] = parametros; 
console.log('Valor del tercer1 parámetro:', valorParametro3);

