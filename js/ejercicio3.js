}
let fraseCompleta=""

while(confirm("¿Desea ingresar palabras?")){
    let textoIngresado = prompt("ingrese una palabra");
    fraseCompleta = fraseCompleta + "-" + textoIngresado
    console.log(textoIngresado)
    console.log(fraseCompleta)