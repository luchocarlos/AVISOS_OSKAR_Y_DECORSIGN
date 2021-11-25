const menu = document.getElementById('menu');
const toggle = document.getElementById('toggle');
const opcion = document.getElementById('opcion')
const opcion1 = document.getElementById('opcion1')
const opcion2 = document.getElementById('opcion2')
const opcion3 = document.getElementById('opcion3')

menu.addEventListener("click", function(){
    toggle.classList.toggle("show")
})

opcion.addEventListener("click", function(){
        toggle.classList.remove("show")
})

opcion1.addEventListener("click", function(){
        toggle.classList.remove("show")
})

opcion2.addEventListener("click", function(){
        toggle.classList.remove("show")
})

opcion3.addEventListener("click", function(){
        toggle.classList.remove("show")
})