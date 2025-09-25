const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("node:process");
const { log } = require("node:console");
const { asyncWrapProviders } = require("node:async_hooks");
const rl = readline.createInterface({ input, output });

async function pedirDato(texto) {
  const dato = await rl.question(texto);
  return Number(dato); // Convertir a número
}

async function main() {
  let tamañoArreglo = new Array(5);

  let arregloInvertido = [];
  for (let i = 0; i < tamañoArreglo.length; i++) {
tamañoArreglo[i] = Number (await pedirDato('ingresa un valor al array'))
    
  }

  console.log(tamañoArreglo.reverse());
  

  rl.close();
}

main();
