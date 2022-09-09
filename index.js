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

bouton.onclick = function(){

    if(j==0){

        corps.style.backgroundColor = moyen;
        corps.style.color = clair;
        note.style.color = fonce;
        note.style.outlineColor = clair;
        bouton.style.backgroundColor = clair;
        bouton.style.color = fonce;
        bouton.innerText = "☉" ;
        

        for(m=0; m<entete.length; m++){

            entete[m].style.backgroundColor = fonce;
        }

        for(n=0; n<lien.length; n++){

            lien[n].style.color = clair;
            
        }

        j=1;

    }
    else{
        
        corps.style.backgroundColor = clair;
        corps.style.color = fonce2;
        note.style.outlineColor = fonce2;
        bouton.style.backgroundColor = fonce;
        bouton.style.color = clair;
        bouton.innerText = "☽";

   
        for(m=0; m<entete.length; m++){

            entete[m].style.backgroundColor = lila;
        }


        for(n=0; n<lien.length; n++){

            lien[n].style.color = fonce2;
            
        }

        j=0;
    }
    
};

    // Date d'anniversaire

    function calculerAge(anniv = "2000-10-31") {
        const annif = new Date(anniv);
        return Math.abs(new Date(Date.now() - annif.getTime()).getUTCFullYear() - 1970);
    };
    
    let bulle = document.querySelector(".bubulle").setAttribute("aria-label", calculerAge() + " ans");