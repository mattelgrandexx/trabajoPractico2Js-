let sumaTotal = 0;
do{
    let numero =prompt("introduce un numero");
    if(Number(numero)==numero){
        numero=Number(numero);
        sumaTotal = sumaTotal + numero
    }else{
        if(numero != undefined){
            alert(numero+"no es un numero");
        }
    }while(numero != undefined);
}

document.write("sumaTotal");