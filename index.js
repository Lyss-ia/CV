//Variables

i=0;
j=0;
let clair="rgb(222, 172, 240)"; 
let moyen="rgb(139, 89, 158)";
let fonce="rgb(47, 36, 46)";
let fonce2="rgb(24, 19, 24)";
let image = document.querySelector("img");
let note = document.querySelector("aside");
let bouton = document.querySelector("button");
let corps = document.querySelector("body");
let entete = document.querySelectorAll("header, main");
let lien = document.querySelectorAll("a, svg");
      

//Agrandir l'image de profil

image.onclick = function(){

    if(i==0){
 
        image.classList.add("click")
        image.style.transition = "width, 2s";
        note.style.height=150 + "px";
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
        bouton.style.backgroundColor = fonce;
        bouton.style.color = clair;
        bouton.innerText = "☽";

   
        for(m=0; m<entete.length; m++){

            entete[m].style.backgroundColor = moyen;
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