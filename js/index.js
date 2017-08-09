(($, document) => {
    'use strict';

    // $ es la variable con la que generalmente nombramos a
    // jQuery. Esto es por simplicidad, de modo que;
    //
    // en lugar de usar:
    // jQuery('p.couldbered').addClass('red');
    //
    // usamos:
    // $('p.couldbered').addClass('red');

    // Primero se espera a que el documento cargue inicialmente

    console.log($('a'));

    $(document).ready(() => {
        console.log('document#onload', $('a'));

        // Podemos crear elements usando jQuery
        $('<a>')
            .text('Example link')
            .attr('href', 'https://example.com')
            .appendTo('.container-fluid');

        let newParagraph = $('<p>')
            .text('<p>Texto del parrafo</p>')
            .appendTo('.container-fluid');

        let jQueryAnchor = $('<a>')
            .appendTo('.container-fluid');

        // Asignar variables a los elementos/selectores de jQuery...
        let coconutHeadImage = $('<img>')
            .attr('src', 'https://vignette2.wikia.nocookie.net/ned/images/3/3b/Tumblr_lzxhgu5GA51rqtcv9o1_500.png/revision/latest?cb=20120909201041')
            .attr('alt', 'Cabeza de coco');

        // ... y retomar elementos mas tarde para manipulacion.
        jQueryAnchor
            .attr('href', 'https://jquery.com')
            .html(coconutHeadImage);
    });
})(window.jQuery, window.document); // Pasamos a la funcion la libreria jQuery.
