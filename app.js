/*
//Determinamos el título
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto'

//Determinamos el texto secundario del párrafo
let parrafo = document.querySelector ('p');
parrafo.innerHTML = 'Ingresa un número del 1 al 10:'
*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados= [];
let numeroMaximo=10;

console.log (numeroSecreto);

//Se declara una función genérica para simplificar el código 
//y ahorrar variables que pueden ser inútiles en un futuro.
function asignarTextoElemento(elemento, texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`¡Has acertado el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}!`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acertó.
        if (numeroDeUsuario>numeroSecreto) {
        asignarTextoElemento('p','El número secreto es menor')
        } else{
        asignarTextoElemento('p','El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    } 
    return;
}

function limpiarCaja () {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSectreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    // Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Todos los números posibles han sido sorteados!')
    } else {
            // Si el num generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSectreto ();
        } else {
            listaNumerosSorteados.push (numeroGenerado)
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
//Se hace uso de la función genérica.
asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', `Ingresa un número del 1 al ${numeroMaximo}:`);
numeroSecreto = generarNumeroSectreto();
intentos = 1;
}
function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensajes de inicio
    //Generar el número aleatorio
    //Inicializar el conteo de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
   document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

