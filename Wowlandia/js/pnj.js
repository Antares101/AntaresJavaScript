class Personaje
{

	constructor(rol, life, atk)
	{		
		this.rol = rol;
		this.life = life;
		this.atk = atk;

		this.image = new Image();
		this.image.src = imagenes[this.rol];
	}
	hablar()
	{
		alert("Hola, soy un "+this.rol);
	}
	mostrar()
	{		
		
		document.body.appendChild(this.image);
		document.write("<p>");
		document.write("<strong>" + this.rol + "</strong><br/>");
		document.write("Vida:" + this.life + "<br/>");
		document.write("Daño:" + this.atk);
		document.write("</p><hr/>");
	}
}