// ESTO ES DESACONSEJADO, Y SE CONSIDERA UNA PESIMA PRACTICA
// DEJAR VARIABLES GLOBALES
let b = 9;

(function() {
    'use strict';

    // Constantes
    const a = 5;

    // Variables 'let'
    setTimeout(() => {

        try { // Corre bien, maneja su propio scope.
            for (let a = 0; a < 5; a++) {
                console.log('Esto es', a);
            }
        } catch (error) {
            console.error(error);
        }
    }, 10);

    // Variables 'var'
    /*for (var a = 0; a < 5; a++) {
        console.log('Esto es', a);
    }*/

    // Variables 'var'


    console.log(a);


})();
