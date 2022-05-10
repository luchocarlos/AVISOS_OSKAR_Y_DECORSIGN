newFunction();

function newFunction() {
    window.onload = setTimeout(function () {

        var preload = document.getElementById('preload');
        var body = document.getElementById('hidden');

        preload.classList.add('remove');
        body.classList.remove('hidden');
    }

    ); 500;
}
