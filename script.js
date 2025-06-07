const coche = document.getElementById('coche'); // creo una constante llamada coche que se coge del id 'coche' del div creado antes
let topPos = 500; // Posición inicial de diferencia con el margen superior
let leftPos = 100; // igual, pero con el margen izq
const velocidad = 20; // cuantos píxeles por tecla se va a mover
const anchoCoche = 100; // el tamaño del ancho de la imagen del coche.
const altoCoche = 100; // igual, pero con el alto 

document.addEventListener('keydown', function(e) { // Escucha un evento del tipo keydown y ejecuta la función con el parametro de entrada 'e', que será el evento producido
    const tecla = e.key.toLowerCase(); // guardamos en la constante tecla la propiedad key del evento  y la hacemos minúscula (por si estuviera bloq mayus encendido)
    const maxAncho = window.innerWidth - anchoCoche; // Calculando el punto más a la derecha en el que aún se ve completamente el coche. Porque le restamos el ancho interior de la ventana menos el ancho del coche
    const maxAlto = window.innerHeight - altoCoche; // igual, pero en alto

    switch (tecla) { /// dependiendo de la tecla qeu se pulse
    case 'w': // se ha presionado arriba
        topPos = Math.max(0, topPos - velocidad); // modifico la posición de diferencia de pixeles con el margen superior restándole la velocidad. y si resulta que ya está en el máximo, pues no resto nada, porque está en el borde el coche y quiero que aún se vea.
        coche.style.top = topPos + 'px'; //modifico el valor de la propiedad top del coche concatenando el valor de topPos con la extensión de la unidad pixeles
        // utilizamos la ruta correcta a la imagen
        coche.style.backgroundImage = "url('./coche-arriba.png')";
        break;
    case 's':
        topPos = Math.min(maxAlto, topPos + velocidad);
        coche.style.top = topPos + 'px';
        coche.style.backgroundImage = "url('./coche-abajo.png')";
        break;
    case 'a':
        leftPos = Math.max(0, leftPos - velocidad);
        coche.style.left = leftPos + 'px';
        coche.style.backgroundImage = "url('./coche-izquierda.png')";
        break;
    case 'd':
        leftPos = Math.min(maxAncho, leftPos + velocidad);
        coche.style.left = leftPos + 'px';
        coche.style.backgroundImage = "url('./coche-derecha.png')";
        break;
    }
});