const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("node:process");
const rl = readline.createInterface({ input, output });

async function pedirDato(texto) {
  const dato = await rl.question(texto);
  return Number(dato); // convertir a número
  
}
async function main() {
    let tamañoArreglo = new Array (5)
for (let i = 0; i < tamañoArreglo.length; i++) {
    tamañoArreglo[i] = await pedirDato('Ingrese el número que desea asignar al arreglo');
}
function miarreglo (arr) {
  return [...new Set(arr)];
  
}
 console.log(tamañoArreglo);
 const arregloSinDuplicados = miarreglo(tamañoArreglo);
 console.log('nuevo arreglo sin duplicados ',arregloSinDuplicados);
 









  rl.close();
}

main();

