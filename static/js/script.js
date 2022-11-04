let buttons = document.querySelectorAll('button');
let form = document.querySelector('#counterForm');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {

        if(this.name == 'dos') {
            form.action = 'sumarDos';
            form.submit();
        } else if (this.name == 'reiniciar') {
            form.action = 'reiniciar';
            form.submit();
        }

    })
}