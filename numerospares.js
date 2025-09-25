const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

async function pedirDato(texto) {
  const dato = await rl.question(texto);
  return Number(dato); // Convertir a número
}

async function main() {
  let tamañoArreglo = new Array(5);

  async function contarPares(tamañoArreglo) {
    let contador = 0;
    for (let i = 0; i < tamañoArreglo.length; i++) {
      tamañoArreglo[i] = await pedirDato(
        `Ingrese el número que desea asignar al arreglo [{i + 1}]: `
      );

      if (tamañoArreglo[i] % 2 === 0) {
        contador++;
      }
    }
    return contador;
  }

  let cantidadPares = await contarPares(tamañoArreglo);
  console.log("La cantidad de números pares en el arreglo es:", cantidadPares);

  rl.close();
}

main();

