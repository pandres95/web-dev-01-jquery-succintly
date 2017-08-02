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

            // Nuestra clase
            let vm = this;

            // Accedo al form
            let formElement = $(`#${id}`);

            // Recorro los input del formulario
            formElement.find('input').each(function () {
                // Recorro cada input
                let input = $(this);

                console.log(input.attr('name'));

                // Asigno una propiedad de la clase con la cual puedo manejar
                // el valor del input
                Object.defineProperty(vm, input.attr('name'), {
                    get() {
                        return input.val();
                    },
                    set(parameter) {
                        input.val(parameter);
                    }
                });
                console.log(vm, vm[input.attr('name')]);
            });

            formElement.submit(e => {
                e.preventDefault();
                // Thruthy / Falsy
                // true = true, {}, 'asdasda', 1, function, etc.
                // false = undefined, '', null
                let submitFunction = this.submit || (() => {});
                submitFunction();
            });
        }
    }

    class LoginForm extends Form {
        constructor () { super('login-form'); }

        submit() {
            console.log(this);
            // Here we put the code for the 'submit' event in the form.
            console.log(this.email, this.password);
        }
    }

    $(() => new LoginForm());
})(window.jQuery);
