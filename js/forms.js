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

    class LoginForm extends Form {
        constructor () { super('login-form'); }

        /* function a () -> Promise
            1. a().then(function(result) { }).catch(function(error) { });
            2. async function () {
                try {
                    let result = await a();
                } catch (error) {
                    // Error
                }
            }
        */

        submit() {
            // Here we insert the submit operation code
            $.ajax('https://api.example.com/auth/token', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: $.param({
                    'grant_type': 'password',
                    'client_id': '***',
                    'client_secret': '****',
                    username: this.email,
                    password: this.password
                })
            }).then(function(login) {
                return $.ajax('https://api.agentowl.me/users/me', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${login.access_token}`
                    }
                });
            }).then(user => {
                console.log(user);
            }).catch (error => {
                $('<div class="alert"></div>')
                    .text(error.message)
                    .appendTo('body');
            });
        }
    }

    $(() => {
        new LoginForm();
        $('.container a').toggleClass('active');
    });

})(window.jQuery);
