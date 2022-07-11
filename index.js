//Variables

i=0;
j=0;
clair="rgb(222, 172, 240)"; 
moyen="rgb(139, 89, 158)";
fonce="rgb(47, 36, 46)";
fonce2="rgb(24, 19, 24)";

//Agrandir l'image de profil

$("img").on("click", function(){

    if(i==0){
 
        $("img").addClass("click").css("transition", "width, 2s");
        $("aside").css("height",150+"px");
        i=1;

    }
    else{
        
        $("img").removeClass("click").css("transition", "width 2s");
        // $("aside").css("height","auto");
        i=0;
    }
    


});

//Mode sombre 

$("button").on("click",function(){

    if(j==0){

        $("body").css("background-color", moyen).css("color", clair);
        $("header,main").css("background-color",fonce);
        $("button").css("background-color",clair).css("color",fonce).html("☉");
        $("a,svg").css("color",clair);

        j=1;

    }
    else{
        
        $("body").css("background-color", clair).css("color",fonce2);
        $("header,main").css("background-color",moyen);
        $("button").css("background-color",fonce).css("color",clair).html("☽");
        $("a,svg").css("color",fonce2)

        j=0;
    }
    
})

    // Date d'anniversaire

    function calculerAge(anniv = "2000-10-31") {
        const annif = new Date(anniv);
        return Math.abs(new Date(Date.now() - annif.getTime()).getUTCFullYear() - 1970);
    }
    
    $(".bubulle").attr("aria-label", calculerAge() + " ans");