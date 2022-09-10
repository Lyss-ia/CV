//Variables

let i=0;
let j=0;
const clair="rgb(222, 172, 240)"; 
const moyen="rgb(139, 89, 158)";
const fonce="rgb(47, 36, 46)";
const fonce2="rgb(24, 19, 24)";
const lila = "rgb(197,163,230)";
const image = document.querySelector("img");
const note = document.querySelector("aside");
const bouton = document.querySelector("button");
const corps = document.querySelector("body");
const entete = document.querySelectorAll("header, main");
const lien = document.querySelectorAll("a, svg");
      

if(localStorage.getItem("theme")=="clair"){
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

const changertheme = function(){

    if(j==0){

        corps.style.backgroundColor = moyen;
        corps.style.color = clair;
        note.style.color = fonce;
        note.style.outlineColor = lila;
        bouton.style.backgroundColor = clair;
        bouton.style.color = fonce;
        bouton.innerText = "☉" ;
        localStorage.setItem("theme", "sombre");
        
        for (const iterateur of entete) {

            iterateur.style.backgroundColor = fonce;
            
        }

        for (const iterateur of lien) {

            iterateur.style.color = clair;
        }

        j=1;

    }

    else{
        
        corps.style.backgroundColor = clair;
        corps.style.color = fonce2;
        note.style.outlineColor = fonce2;
        bouton.style.backgroundColor = fonce2;
        bouton.style.color = lila;
        bouton.innerText = "☽";
        localStorage.setItem("theme", "clair");

        for (const iterateur of entete) {

            iterateur.style.backgroundColor = lila;
        }

        for (const iterateur of lien) {

            iterateur.style.color = fonce2;
            
        }

        j=0;
    }
    
};

bouton.onclick = changertheme;
changertheme();

// Date d'anniversaire

function calculerAge(anniv = "2000-10-31") {
    const annif = new Date(anniv);
    return Math.abs(new Date(Date.now() - annif.getTime()).getUTCFullYear() - 1970);
};

let bulle = document.querySelector(".bubulle").setAttribute("aria-label", calculerAge() + " ans");
