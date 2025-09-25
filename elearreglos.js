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
    let tamañoArreglo = new Array (5)
    let num = 0;


        for (let i = 0; i < tamañoArreglo.length; i++) {
            tamañoArreglo[i] = await pedirDato('Ingrese el número que desea asignar al arreglo');
        }
        function miArreglo(tamañoArreglo, num) {
            let posicion = -1; // Valor por defecto si no se encuentra

            for (let i = 0; i < tamañoArreglo.length; i++) {
                if (tamañoArreglo[i] === num) {
                    posicion = i; // Actualiza la posición si se encuentra
                    break; // Salir del bucle una vez encontrado
                }
            }
            return posicion; // Retorna la posición (o -1 si no se encontró)
        }
        num = await pedirDato('Ingrese el número que desea buscar en el arreglo');
        let posicion = miArreglo(tamañoArreglo, num);

        if (posicion == -1) {
            console.log('el numero no se encontro ');
        } else {
            console.log('el numero que busco esta en la posicion', posicion + 1);
        }
  rl.close();
}

main();
