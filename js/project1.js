(function ($) {
    'use strict';

    class Form {
        constructor(id) {
            /*let a = 5;

            // En lugar de  "var b = 'a';", que en mi opinión, está mal.
            // Y de usar un escape.
            let badstring = 'var b = \'a\'';
            // Usamos un template literal
            let string = `var b = 'a';`;*/

            // Y en lugar de hacer
            // let formElement = $('#' + id);

            // Accedo al form
            let formElement = $(`#${id}`);

            // Recorro los input del formulario
            formElement.find('input').each((key, value) => {
                // Recorro cada input
                let input = $(value);

                // Asigno una propiedad de la clase con la cual puedo manejar
                // el valor del input
                Object.defineProperty(this, input.attr('name'), {
                    get() {
                        return input.val();
                    },
                    set(parameter) {
                        input.val(parameter);
                    }
                });
            });

            formElement.submit(e => {
                e.preventDefault();
                // Thruthy / Falsy
                // true = true, {}, 'asdasda', 1, function, etc.
                // false = undefined, '', null
                if(this.submit !== undefined) {
                    this.submit();
                }
            });
        }
    }

    class ChatForm extends Form
    {
        constructor() { super('chat-form'); }

        submit()
        {
            if(this.txtChat !== '')
            {
                let paragraph = $('<p>').text(this.txtChat);
                $('<div>').addClass('entrada row')
                    .append(paragraph)
                    .appendTo('#content');

                this.txtChat = '';
            }
        }
    }

    $(function () {
        $('#content').children().detach();
        new ChatForm();
    })
})(window.jQuery);
