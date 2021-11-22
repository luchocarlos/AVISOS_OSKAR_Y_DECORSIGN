const menu = document.getElementById('menu');
const toggle = document.getElementById('toggle');
const opcion = document.getElementById('opcion')

menu.addEventListener("click", function(){
    toggle.classList.toggle("show")
})

opcion.addEventListener("click", function(){
        toggle.classList.remove("show")
})
