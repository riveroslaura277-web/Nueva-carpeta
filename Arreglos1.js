const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("node:process");
const { log } = require("node:console");
const { asyncWrapProviders } = require("node:async_hooks");
const rl = readline.createInterface({ input, output });

async function pedirDato(texto) {
  const dato = await rl.question(texto);
  return dato;
}

async function main() {
    let tamañoArreglo = new Array (5)
 let resultado = 0
 async function miArreglo(tamañoArreglo) {
  for (let i = 0; i < tamañoArreglo.length; i++) {
    tamañoArreglo[i] = await pedirDato('ingrese el numero que desea asignar al arreglo')
    if (tamañoArreglo[i]>0) {
        resultado =  resultado + tamañoArreglo[i]
        
    
    }
 }
  return resultado
 }
 
let suma = await miArreglo(tamañoArreglo)
console.log('la suma de los numeros que ingresaste en el arreglo es de', suma)
   
    rl.close();
    }
    main();