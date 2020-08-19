var canva = document.getElementById("mundo");
var mundo = canva.getContext("2d");
var xa=500;
var ya=250;

var fondo =
        {
            url: "resources/mapa.jpg",
            cargaOk: false
        };
var verde =
        {
            url: "resources/verde.png",
            cargaOk: false,
            cantidad: 20,
            tamano: 80,
            x: new Array(),
            y: new Array()

        };
var amarillo=
{
    url:"resources/amarillo.png",
    cargaOk:false,
   
};
for (i = 0; i <= verde.cantidad - 1; i++)

{

    verde.x[i] = aleatorio(0, canva.width - verde.tamano);

    verde.y[i] = aleatorio(0, canva.height - verde.tamano);

// console.log(verde.x[i], verde.y[i]);

}
            
fondo.imagen = new Image();

fondo.imagen.src = fondo.url;

fondo.imagen.addEventListener("load", cargarFondo);

verde.imagen = new Image();

verde.imagen.src = verde.url;

verde.imagen.addEventListener("load", cargarVerde);

amarillo.imagen=new Image();

amarillo.imagen.src=amarillo.url;

amarillo.imagen.addEventListener("load",cargarAmarillo);


function aleatorio(min, max)

{

var a = Math.floor(Math.random()*(max-min)+min);

return a;

}
function cargarFondo()
{
    fondo.cargaOk=true;
    dibujar();
}
function cargarVerde()
{   
    verde.cargaOk=true;
    dibujar();
}
function cargarAmarillo(){
    amarillo.cargaOk=true;
    dibujar();
}
document.addEventListener("keyup", dibujarAmarillo);

var tecla={
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
};

    


function dibujarAmarillo(evento)

{
    if (evento.keyCode==tecla.UP && fondo.cargaOk && verde.cargaOk&& amarillo.cargaOk)
    {   ya=ya-20;
        dibujar();      
        
    }
    
    else if (evento.keyCode==tecla.DOWN && fondo.cargaOk && verde.cargaOk&& amarillo.cargaOk)
    {   
        ya=ya+20;
        dibujar();
        
    }
    else if (evento.keyCode==tecla.RIGHT && fondo.cargaOk && verde.cargaOk&& amarillo.cargaOk)
    {   
        xa=xa+20;
        dibujar();
        
    }
    else if (evento.keyCode==tecla.LEFT && fondo.cargaOk && verde.cargaOk&& amarillo.cargaOk)
    { xa=xa-20;
    dibujar();
  
    }
}
function dibujar(){
    console.log("dibujando");

if (fondo.cargaOk && verde.cargaOk&& amarillo.cargaOk) 

{

mundo.drawImage(fondo.imagen, 0, 0);

for (var i = 0; i <= verde.cantidad-1; i++) 

{

mundo.drawImage(verde.imagen, verde.x[i], verde.y[i]);
}

mundo.drawImage(amarillo.imagen,xa, ya);

}
}

    

    
