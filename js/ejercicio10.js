let filas = parseInt(prompt("ingrese un numero de filas"));
let columnas = parseInt(prompt("ingrese un numero de columnas"));

console.log(filas);
console.log(columnas);

document.write(`<table>
<tbody>`)

for(let indiceFila = 1; indiceFila <= filas; indiceFila++){
    document.write(`<table>
    <tbody>
        <tr>
            <td>hola</td>
            <td>mundo 2</td>
        </tr>`)
    }
    document.write(`
    </tbody>
    </table>`)
    





