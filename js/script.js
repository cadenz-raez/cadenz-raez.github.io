// ============================
// AEROFIT INTERACTIVE SCRIPT
// ============================



// NAVBAR EFFECT

const navbar =
document.querySelector(
".navbar"
);

window.addEventListener(
"scroll",

()=>{

if(navbar){

if(window.scrollY>50){

navbar.style.background=
"rgba(255,255,255,.98)";

navbar.style.boxShadow=
"0 10px 40px rgba(0,0,0,.08)";

}

else{

navbar.style.background=
"rgba(255,255,255,.92)";

navbar.style.boxShadow=
"none";

}

}

});




// CARD ANIMATION

const cards =
document.querySelectorAll(
".card"
);

cards.forEach(

card=>{

card.addEventListener(

"mouseenter",

()=>{

card.style.transform=
"translateY(-16px)";

});

card.addEventListener(

"mouseleave",

()=>{

card.style.transform=
"translateY(0px)";

});

}

);




// BUTTON EFFECT

const buttons =
document.querySelectorAll(

".btn-dark,.btn-light"

);

buttons.forEach(

btn=>{

btn.addEventListener(

"mouseenter",

()=>{

btn.style.transform=
"scale(1.05)";

});

btn.addEventListener(

"mouseleave",

()=>{

btn.style.transform=
"scale(1)";

});

}

);




// FORM INTERACTION

const forms =
document.querySelectorAll(
"form"
);

forms.forEach(

form=>{

form.addEventListener(

"submit",

(e)=>{

e.preventDefault();

alert(
"✔️ Berhasil!\nData telah diproses."
);

form.reset();

}

);

}

);




// SCROLL REVEAL

const reveal=()=>{

const elements=

document.querySelectorAll(

".services,.about,.cta,.card"

);

elements.forEach(

el=>{

const top=

el.getBoundingClientRect()

.top;

if(

top
<
window.innerHeight
-
100

){

el.style.opacity="1";

el.style.transform=

"translateY(0px)";

}

}

);

};




document
.querySelectorAll(

".services,.about,.cta,.card"

)

.forEach(

el=>{

el.style.opacity="0";

el.style.transform=

"translateY(70px)";

el.style.transition=
".8s";

}

);

window.addEventListener(
"scroll",
reveal
);

reveal();




// TYPING EFFECT

const subtitle=

document.querySelector(
".subtitle"
);

if(subtitle){

const text=

subtitle.innerText;

subtitle.innerText="";

let i=0;

const type=()=>{

if(i<text.length){

subtitle.innerHTML+=

text.charAt(i);

i++;

setTimeout(
type,
60
);

}

};

type();

}




// TITLE EFFECT

const titles=[

"AeroFit 🚴",

"Ride Faster ⚡",

"Premium Bike Care",

"Bike Fitting"

];

let titleIndex=0;

setInterval(

()=>{

document.title=

titles[titleIndex];

titleIndex++;

if(

titleIndex>=
titles.length

){

titleIndex=0;

}

},

2500

);




// MOBILE MENU

const logo=
document.querySelector(
".logo"
);

const nav=
document.querySelector(
".nav-links"
);

if(

window.innerWidth
<
768

){

if(nav){

nav.style.display=
"none";

}

if(logo){

logo.addEventListener(

"click",

()=>{

if(

nav.style.display
==="flex"

){

nav.style.display=
"none";

}

else{

nav.style.display=
"flex";

nav.style.flexDirection=
"column";

nav.style.alignItems=
"center";

}

}

);

}

}




// BOOK BUTTON

const reserve =

document.querySelector(
".cta a"
);

if(reserve){

reserve.addEventListener(

"click",

()=>{

setTimeout(

()=>{

alert(

"🚴 Booking Page Dibuka"

);

},

300

);

}

);

}