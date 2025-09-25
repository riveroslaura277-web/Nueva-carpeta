const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("node:process");
const { log } = require("node:console");
const rl = readline.createInterface({ input, output });


async function pedirDato(texto) {
  const dato = await rl.question(texto);
  return Number(dato); // Convertir a número
}

async function main() {
  let tamañoArreglo = new Array(5);

  async function numeroMayor(tamañoArreglo) {
    let mayor = Number.NEGATIVE_INFINITY; // Valor inicial muy pequeño
    for (let i = 0; i < tamañoArreglo.length; i++) {
      tamañoArreglo[i] = await pedirDato(
        `Ingrese el número que desea asignar al arreglo [${i + 1}]: `
      );

      if (tamañoArreglo[i] > mayor) {
        mayor = tamañoArreglo[i]; // Actualiza si encuentra uno más grande
      }
    }
    return mayor;
  }

  let mayor = await numeromayor(tamañoArreglo);
  console.log("El número mayor en el arreglo es:", mayor);

  rl.close();
}

main();

