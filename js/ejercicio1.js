let edad = prompt("Introduce tu edad");

if (Number(edad) == edad) {

	if (edad > 18) {
	
		document.write("Puedes conducir");
	}
}
else {
	alert("No es un numero valido");
}