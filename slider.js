const slider = document.querySelector("#slider")
const slider2 = document.querySelector("#slider2")

let sliderSection = document.querySelectorAll(".slider__section")
let sliderSectionLast = sliderSection[sliderSection.length - 1];

let sliderSection2 = document.querySelectorAll(".slider__section2")
let sliderSectionLast2 = sliderSection2[sliderSection2.length - 1];


const btnLeft = document.querySelector("#btn-left")
const btnRight = document.querySelector("#btn-right")

const btnLeft2 = document.querySelector("#btn-left2")
const btnRight2 = document.querySelector("#btn-right2")


slider.insertAdjacentElement('afterbegin' , sliderSectionLast);
slider2.insertAdjacentElement('afterbegin' , sliderSectionLast2);

function Next() {
     let sliderSectionFirts = document.querySelectorAll(".slider__section")[0];
     slider.style.marginLeft = "-200%";
     slider.style.transition = "all 0.5s";
     setTimeout(function(){
         slider.style.transition="none";
         slider.insertAdjacentElement('beforeend', sliderSectionFirts);
         slider.style.marginLeft = "-100%";
     }, 500);
}

function Next2() {
    let sliderSectionFirts2 = document.querySelectorAll(".slider__section2")[0];
    slider2.style.marginLeft = "-200%";
    slider2.style.transition = "all 0.5s";
    setTimeout(function(){
        slider2.style.transition="none";
        slider2.insertAdjacentElement('beforeend', sliderSectionFirts2);
        slider2.style.marginLeft = "-100%";
    }, 500);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev2() {
    let sliderSection2 = document.querySelectorAll(".slider__section2");
    let sliderSectionLast2 = sliderSection2[sliderSection2.length - 1];
    slider2.style.marginLeft = "0";
    slider2.style.transition = "all 0.5s";
    setTimeout(function(){
        slider2.style.transition="none";
        slider2.insertAdjacentElement('afterbegin', sliderSectionLast2);
        slider2.style.marginLeft = "-100%";
    }, 500);
}



btnRight.addEventListener('click', function(){
    Next();
})

btnLeft.addEventListener('click', function(){
    Prev();
})

btnRight2.addEventListener('click', function(){
    Next2();
})

btnLeft2.addEventListener('click', function(){
    Prev2();
})


//////////////////////////////////////////////
