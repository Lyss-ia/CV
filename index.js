//Variables

let i=0;
let j=0;
const light="rgb(222, 172, 240)"; 
const medium="rgb(139, 89, 158)";
const dark="rgb(47, 36, 46)";
const darker="rgb(24, 19, 24)";
const lilac = "rgb(197,163,230)";
const image = document.querySelector("img");
const note = document.querySelector("aside");
const button = document.querySelector("button");
const body = document.querySelector("body");
const head = document.querySelectorAll("header, main");
const link = document.querySelectorAll("a, svg");
      

if(localStorage.getItem("theme")=="day"){
    j=1;
}
else{
    j=0;
}
//Agrandir l'image de profil

image.onclick = function(){

    if(i==0){
 
        image.classList.add("click")
        image.style.transition = "width, 2s";
        note.style.height="auto";
        i=1;

    }
    else{
        
        image.classList.remove("click")
        image.style.transition = "width, 2s";
        i=0;
    }
    
};

//Mode sombre 

const changetheme = function(){

    if(j==0){

        body.style.backgroundColor = medium;
        body.style.color = light;
        note.style.color = dark;
        note.style.outlineColor = light;
        button.style.backgroundColor = light;
        button.style.color = dark;
        button.innerText = "☉" ;
        localStorage.setItem("theme", "night");
        
        for (const iterator of head) {

            iterator.style.backgroundColor = dark;
            
        }

        for (const iterator of link) {

            iterator.style.color = light;
        }

        j=1;

    }

    else{
        
        body.style.backgroundColor = light;
        body.style.color = darker;
        note.style.outlineColor = darker;
        button.style.backgroundColor = darker;
        button.style.color = lilac;
        button.innerText = "☽";
        localStorage.setItem("theme", "day");

        for (const iterator of head) {

            iterator.style.backgroundColor = lilac;
        }

        for (const iterator of link) {

            iterator.style.color = darker;
            
        }

        j=0;
    }
    
};

button.onclick = changetheme;
changetheme();

// Date d'anniversaire

function calculateAge(anniv = "2000-10-31") {
    const anniversary = new Date(anniv);
    return Math.abs(new Date(Date.now() - anniversary.getTime()).getUTCFullYear() - 1970);
};

let bubble = document.querySelector(".bubble").setAttribute("aria-label", calculateAge() + " ans");
