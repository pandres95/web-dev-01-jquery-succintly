(function ($) {
    'use strict';

    function fibonacci(n) {
        if(n < 0) {
            throw new Error('Fibonacci arranca en ceros');
        }
        return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
    }

    function b(n) {
        if(fibonacci(n) > 100000) { // Esto puede arrojar una excepción
            console.log('Uy! Hay muchos conejos');
        } else {
            console.log('Ok :)');
        }
    }

    $('a#fibo-button').click(function (event) {
        event.preventDefault();

        try {
            let n = Number($('input#fibo').text());
            b(n);
        } catch (error) {
            console.error(error);
        }
    });
})(window.jQuery);
