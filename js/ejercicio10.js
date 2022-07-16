let filas = parseInt(prompt("ingrese un numero de filas"));
let columnas = parseInt(prompt("ingrese un numero de columnas"));

console.log(filas);
console.log(columnas);

document.write(`<table>
<tbody>`)

for(let indiceFila = 0; indiceFila < filas; indiceFila++){
    document.write(`<tr>`)
    for(let indiceColumna = 0; indiceColumna < columnas; indiceColumna++){
        document.write(`<td>hola</td>`)
        }
    document.write(`</tr>`)
    }
    document.write(`
    </tbody>
    </table>`)
    





