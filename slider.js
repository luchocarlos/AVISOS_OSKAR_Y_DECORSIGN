const slider = document.querySelector("#slider")

let sliderSection = document.querySelectorAll(".slider__section")
let sliderSectionLast = sliderSection[sliderSection.length-1];


const btnLeft = document.querySelector("#btn-left")
const btnRight = document.querySelector("#btn-right")


slider.insertAdjacentElement('afterbegin' , sliderSectionLast);


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



function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}


btnRight.addEventListener('click', function(){
    Next();
})

btnLeft.addEventListener('click', function(){
    Prev();
})

//////////////////////////////////////////////

const slider2 = document.querySelector("#slider2")

let sliderSection2 = document.querySelectorAll(".slider__section2")
let sliderSectionLast2 = sliderSection2[sliderSection2.length-1];


const btnLeft2 = document.querySelector("#btn-left2")
const btnRight2 = document.querySelector("#btn-right2")


slider2.insertAdjacentElement('afterbegin' , sliderSectionLast2);


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



function Prev2() {
    let sliderSection2 = document.querySelectorAll(".slider__section2");
    let sliderSectionLast2 = sliderSection2[sliderSection2.length-1];
    slider2.style.marginLeft = "0";
    slider2.style.transition = "all 0.5s";
    setTimeout(function(){
        slider2.style.transition="none";
        slider2.insertAdjacentElement('afterbegin', sliderSectionLast2);
        slider2.style.marginLeft = "-100%";
    }, 500);
}


btnRight2.addEventListener('click', function(){
    Next2();
})

btnLeft2.addEventListener('click', function(){
    Prev2();
})

//////////////////////////////////////////////

const slider3 = document.querySelector("#slider3")

let sliderSection3 = document.querySelectorAll(".slider__section3")
let sliderSectionLast3 = sliderSection3[sliderSection3.length-1];


const btnLeft3 = document.querySelector("#btn-left3")
const btnRight3 = document.querySelector("#btn-right3")


slider3.insertAdjacentElement('afterbegin' , sliderSectionLast3);


function Next3() {
     let sliderSectionFirts3 = document.querySelectorAll(".slider__section3")[0];
     slider3.style.marginLeft = "-200%";
     slider3.style.transition = "all 0.5s";
     setTimeout(function(){
         slider3.style.transition="none";
         slider3.insertAdjacentElement('beforeend', sliderSectionFirts3);
         slider3.style.marginLeft = "-100%";
     }, 500);
}



function Prev3() {
    let sliderSection3 = document.querySelectorAll(".slider__section3");
    let sliderSectionLast3 = sliderSection3[sliderSection3.length-1];
    slider3.style.marginLeft = "0";
    slider3.style.transition = "all 0.5s";
    setTimeout(function(){
        slider3.style.transition="none";
        slider3.insertAdjacentElement('afterbegin', sliderSectionLast3);
        slider3.style.marginLeft = "-100%";
    }, 500);
}


btnRight3.addEventListener('click', function(){
    Next3();
})

btnLeft3.addEventListener('click', function(){
    Prev3();
})

//////////////////////////////////////////////

const slider4 = document.querySelector("#slider4")

let sliderSection4 = document.querySelectorAll(".slider__section4")
let sliderSectionLast4 = sliderSection4[sliderSection4.length-1];


const btnLeft4 = document.querySelector("#btn-left4")
const btnRight4 = document.querySelector("#btn-right4")


slider4.insertAdjacentElement('afterbegin' , sliderSectionLast4);


function Next4() {
     let sliderSectionFirts4 = document.querySelectorAll(".slider__section4")[0];
     slider4.style.marginLeft = "-200%";
     slider4.style.transition = "all 0.5s";
     setTimeout(function(){
         slider4.style.transition="none";
         slider4.insertAdjacentElement('beforeend', sliderSectionFirts4);
         slider4.style.marginLeft = "-100%";
     }, 500);
}



function Prev4() {
    let sliderSection4 = document.querySelectorAll(".slider__section4");
    let sliderSectionLast4 = sliderSection4[sliderSection4.length-1];
    slider4.style.marginLeft = "0";
    slider4.style.transition = "all 0.5s";
    setTimeout(function(){
        slider4.style.transition="none";
        slider4.insertAdjacentElement('afterbegin', sliderSectionLast4);
        slider4.style.marginLeft = "-100%";
    }, 500);
}


btnRight4.addEventListener('click', function(){
    Next4();
})

btnLeft4.addEventListener('click', function(){
    Prev4();
})

//////////////////////////////////////////////

const slider5 = document.querySelector("#slider5")

let sliderSection5 = document.querySelectorAll(".slider__section5")
let sliderSectionLast5 = sliderSection5[sliderSection5.length-1];


const btnLeft5 = document.querySelector("#btn-left5")
const btnRight5 = document.querySelector("#btn-right5")


slider5.insertAdjacentElement('afterbegin' , sliderSectionLast5);


function Next5() {
     let sliderSectionFirts5 = document.querySelectorAll(".slider__section5")[0];
     slider5.style.marginLeft = "-200%";
     slider5.style.transition = "all 0.5s";
     setTimeout(function(){
         slider5.style.transition="none";
         slider5.insertAdjacentElement('beforeend', sliderSectionFirts5);
         slider5.style.marginLeft = "-100%";
     }, 500);
}



function Prev5() {
    let sliderSection5 = document.querySelectorAll(".slider__section5");
    let sliderSectionLast5 = sliderSection5[sliderSection5.length-1];
    slider5.style.marginLeft = "0";
    slider5.style.transition = "all 0.5s";
    setTimeout(function(){
        slider5.style.transition="none";
        slider5.insertAdjacentElement('afterbegin', sliderSectionLast5);
        slider5.style.marginLeft = "-100%";
    }, 500);
}


btnRight5.addEventListener('click', function(){
    Next5();
})

btnLeft5.addEventListener('click', function(){
    Prev5();
})

//////////////////////////////////////////////

const slider6 = document.querySelector("#slider6")

let sliderSection6 = document.querySelectorAll(".slider__section6")
let sliderSectionLast6 = sliderSection6[sliderSection6.length-1];


const btnLeft6 = document.querySelector("#btn-left6")
const btnRight6 = document.querySelector("#btn-right6")


slider6.insertAdjacentElement('afterbegin' , sliderSectionLast6);


function Next6() {
     let sliderSectionFirts6 = document.querySelectorAll(".slider__section6")[0];
     slider6.style.marginLeft = "-200%";
     slider6.style.transition = "all 0.5s";
     setTimeout(function(){
         slider6.style.transition="none";
         slider6.insertAdjacentElement('beforeend', sliderSectionFirts6);
         slider6.style.marginLeft = "-100%";
     }, 500);
}



function Prev6() {
    let sliderSection6 = document.querySelectorAll(".slider__section6");
    let sliderSectionLast6 = sliderSection6[sliderSection6.length-1];
    slider6.style.marginLeft = "0";
    slider6.style.transition = "all 0.5s";
    setTimeout(function(){
        slider6.style.transition="none";
        slider6.insertAdjacentElement('afterbegin', sliderSectionLast6);
        slider6.style.marginLeft = "-100%";
    }, 500);
}


btnRight6.addEventListener('click', function(){
    Next6();
})

btnLeft6.addEventListener('click', function(){
    Prev6();
})

//////////////////////////////////////////////

const slider7 = document.querySelector("#slider7")

let sliderSection7 = document.querySelectorAll(".slider__section7")
let sliderSectionLast7 = sliderSection7[sliderSection7.length-1];


const btnLeft7 = document.querySelector("#btn-left7")
const btnRight7 = document.querySelector("#btn-right7")


slider7.insertAdjacentElement('afterbegin' , sliderSectionLast7);


function Next7() {
     let sliderSectionFirts7 = document.querySelectorAll(".slider__section7")[0];
     slider7.style.marginLeft = "-200%";
     slider7.style.transition = "all 0.5s";
     setTimeout(function(){
         slider7.style.transition="none";
         slider7.insertAdjacentElement('beforeend', sliderSectionFirts7);
         slider7.style.marginLeft = "-100%";
     }, 500);
}



function Prev7() {
    let sliderSection7 = document.querySelectorAll(".slider__section7");
    let sliderSectionLast7 = sliderSection7[sliderSection7.length-1];
    slider7.style.marginLeft = "0";
    slider7.style.transition = "all 0.5s";
    setTimeout(function(){
        slider7.style.transition="none";
        slider7.insertAdjacentElement('afterbegin', sliderSectionLast7);
        slider7.style.marginLeft = "-100%";
    }, 500);
}


btnRight7.addEventListener('click', function(){
    Next7();
})

btnLeft7.addEventListener('click', function(){
    Prev7();
})

//////////////////////////////////////////////

const slider8 = document.querySelector("#slider8")

let sliderSection8 = document.querySelectorAll(".slider__section8")
let sliderSectionLast8 = sliderSection8[sliderSection8.length-1];


const btnLeft8 = document.querySelector("#btn-left8")
const btnRight8 = document.querySelector("#btn-right8")


slider8.insertAdjacentElement('afterbegin' , sliderSectionLast8);


function Next8() {
     let sliderSectionFirts8 = document.querySelectorAll(".slider__section8")[0];
     slider8.style.marginLeft = "-200%";
     slider8.style.transition = "all 0.5s";
     setTimeout(function(){
         slider8.style.transition="none";
         slider8.insertAdjacentElement('beforeend', sliderSectionFirts8);
         slider8.style.marginLeft = "-100%";
     }, 500);
}



function Prev8() {
    let sliderSection8 = document.querySelectorAll(".slider__section8");
    let sliderSectionLast8 = sliderSection8[sliderSection8.length-1];
    slider8.style.marginLeft = "0";
    slider8.style.transition = "all 0.5s";
    setTimeout(function(){
        slider8.style.transition="none";
        slider8.insertAdjacentElement('afterbegin', sliderSectionLast8);
        slider8.style.marginLeft = "-100%";
    }, 500);
}


btnRight8.addEventListener('click', function(){
    Next8();
})

btnLeft8.addEventListener('click', function(){
    Prev8();
})

//////////////////////////////////////////////

const slider9 = document.querySelector("#slider9")

let sliderSection9 = document.querySelectorAll(".slider__section9")
let sliderSectionLast9 = sliderSection9[sliderSection9.length-1];


const btnLeft9 = document.querySelector("#btn-left9")
const btnRight9 = document.querySelector("#btn-right9")


slider9.insertAdjacentElement('afterbegin' , sliderSectionLast9);


function Next9() {
     let sliderSectionFirts9 = document.querySelectorAll(".slider__section9")[0];
     slider9.style.marginLeft = "-200%";
     slider9.style.transition = "all 0.5s";
     setTimeout(function(){
         slider9.style.transition="none";
         slider9.insertAdjacentElement('beforeend', sliderSectionFirts9);
         slider9.style.marginLeft = "-100%";
     }, 500);
}



function Prev9() {
    let sliderSection9 = document.querySelectorAll(".slider__section9");
    let sliderSectionLast9 = sliderSection9[sliderSection9.length-1];
    slider9.style.marginLeft = "0";
    slider9.style.transition = "all 0.5s";
    setTimeout(function(){
        slider9.style.transition="none";
        slider9.insertAdjacentElement('afterbegin', sliderSectionLast9);
        slider9.style.marginLeft = "-100%";
    }, 500);
}


btnRight9.addEventListener('click', function(){
    Next9();
})

btnLeft9.addEventListener('click', function(){
    Prev9();
})

//////////////////////////////////////////////

const slider10 = document.querySelector("#slider10")

let sliderSection10 = document.querySelectorAll(".slider__section10")
let sliderSectionLast10 = sliderSection10[sliderSection10.length-1];


const btnLeft10 = document.querySelector("#btn-left10")
const btnRight10 = document.querySelector("#btn-right10")


slider10.insertAdjacentElement('afterbegin' , sliderSectionLast10);


function Next10() {
     let sliderSectionFirts10 = document.querySelectorAll(".slider__section10")[0];
     slider10.style.marginLeft = "-200%";
     slider10.style.transition = "all 0.5s";
     setTimeout(function(){
         slider10.style.transition="none";
         slider10.insertAdjacentElement('beforeend', sliderSectionFirts10);
         slider10.style.marginLeft = "-100%";
     }, 500);
}



function Prev10() {
    let sliderSection10 = document.querySelectorAll(".slider__section10");
    let sliderSectionLast10 = sliderSection10[sliderSection10.length-1];
    slider10.style.marginLeft = "0";
    slider10.style.transition = "all 0.5s";
    setTimeout(function(){
        slider10.style.transition="none";
        slider10.insertAdjacentElement('afterbegin', sliderSectionLast10);
        slider10.style.marginLeft = "-100%";
    }, 500);
}


btnRight10.addEventListener('click', function(){
    Next10();
})

btnLeft10.addEventListener('click', function(){
    Prev10();
})

const slider11 = document.querySelector("#slider11")

let sliderSection11 = document.querySelectorAll(".slider__section11")
let sliderSectionLast11 = sliderSection11[sliderSection11.length-1];


const btnLeft11 = document.querySelector("#btn-left11")
const btnRight11 = document.querySelector("#btn-right11")


slider11.insertAdjacentElement('afterbegin' , sliderSectionLast11);


function Next11() {
     let sliderSectionFirts11 = document.querySelectorAll(".slider__section11")[0];
     slider11.style.marginLeft = "-200%";
     slider11.style.transition = "all 0.5s";
     setTimeout(function(){
         slider11.style.transition="none";
         slider11.insertAdjacentElement('beforeend', sliderSectionFirts11);
         slider11.style.marginLeft = "-100%";
     }, 500);
}



function Prev11() {
    let sliderSection11 = document.querySelectorAll(".slider__section11");
    let sliderSectionLast11 = sliderSection11[sliderSection11.length-1];
    slider11.style.marginLeft = "0";
    slider11.style.transition = "all 0.5s";
    setTimeout(function(){
        slider11.style.transition="none";
        slider11.insertAdjacentElement('afterbegin', sliderSectionLast11);
        slider11.style.marginLeft = "-100%";
    }, 500);
}


btnRight11.addEventListener('click', function(){
    Next11();
})

btnLeft11.addEventListener('click', function(){
    Prev11();
})

//////////////////////////////////////////////

const slider12 = document.querySelector("#slider12")

let sliderSection12 = document.querySelectorAll(".slider__section12")
let sliderSectionLast12 = sliderSection12[sliderSection12.length-1];


const btnLeft12 = document.querySelector("#btn-left12")
const btnRight12 = document.querySelector("#btn-right12")


slider12.insertAdjacentElement('afterbegin' , sliderSectionLast12);


function Next12() {
     let sliderSectionFirts12 = document.querySelectorAll(".slider__section12")[0];
     slider12.style.marginLeft = "-200%";
     slider12.style.transition = "all 0.5s";
     setTimeout(function(){
         slider12.style.transition="none";
         slider12.insertAdjacentElement('beforeend', sliderSectionFirts12);
         slider12.style.marginLeft = "-100%";
     }, 500);
}



function Prev12() {
    let sliderSection12 = document.querySelectorAll(".slider__section12");
    let sliderSectionLast12 = sliderSection12[sliderSection12.length-1];
    slider12.style.marginLeft = "0";
    slider12.style.transition = "all 0.5s";
    setTimeout(function(){
        slider12.style.transition="none";
        slider12.insertAdjacentElement('afterbegin', sliderSectionLast12);
        slider12.style.marginLeft = "-100%";
    }, 500);
}


btnRight12.addEventListener('click', function(){
    Next12();
})

btnLeft12.addEventListener('click', function(){
    Prev12();
})

//////////////////////////////////////////////

const slider13 = document.querySelector("#slider13")

let sliderSection13 = document.querySelectorAll(".slider__section13")
let sliderSectionLast13 = sliderSection13[sliderSection13.length-1];


const btnLeft13 = document.querySelector("#btn-left13")
const btnRight13 = document.querySelector("#btn-right13")


slider13.insertAdjacentElement('afterbegin' , sliderSectionLast13);


function Next13() {
     let sliderSectionFirts13 = document.querySelectorAll(".slider__section13")[0];
     slider13.style.marginLeft = "-200%";
     slider13.style.transition = "all 0.5s";
     setTimeout(function(){
         slider13.style.transition="none";
         slider13.insertAdjacentElement('beforeend', sliderSectionFirts13);
         slider13.style.marginLeft = "-100%";
     }, 500);
}



function Prev13() {
    let sliderSection13 = document.querySelectorAll(".slider__section13");
    let sliderSectionLast13 = sliderSection13[sliderSection13.length-1];
    slider13.style.marginLeft = "0";
    slider13.style.transition = "all 0.5s";
    setTimeout(function(){
        slider13.style.transition="none";
        slider13.insertAdjacentElement('afterbegin', sliderSectionLast13);
        slider13.style.marginLeft = "-100%";
    }, 500);
}


btnRight13.addEventListener('click', function(){
    Next13();
})

btnLeft13.addEventListener('click', function(){
    Prev13();
})
