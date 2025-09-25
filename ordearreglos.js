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

  for (let i = 0; i < tamañoArreglo.length; i++) {
    tamañoArreglo[i] = Number(await pedirDato('ingresa un valor al array'));
  }

  function miarreglo() {
    tamañoArreglo.sort((a, b) => b - a);
  }

  miarreglo();
console.log('el orden acendente del arreglo es', tamañoArreglo);

  rl.close();
}

main();