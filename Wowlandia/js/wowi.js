var imagenes = [];
imagenes["Tank"] = "Img/Guerrero.png";
imagenes["Ranger"] = "Img/Demon.png";
imagenes["Mage"] = "Img/Elfo.png";

var coleccion = [];
coleccion.push(new Personaje("Tank", 1000, 10));
coleccion.push(new Personaje("Ranger", 500, 20));
coleccion.push(new Personaje("Mage", 400, 25));

for(var character of coleccion)
{
	character.mostrar();
}
