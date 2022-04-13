var i=0;
var j=0;
var clair="rgb(222, 172, 240)";
var moyen="rgb(139, 89, 158)";
var fonce="rgb(47, 36, 46)";

$("img").on("click", function(){
    if(i==0){
        console.log("click");
        $("img").addClass("click");
        $("aside").css("height",100+"px");
        i=1;

    }
    else{
        
        $("img").removeClass("click");
        $("aside").css("height","auto");
        i=0;
    }
    


});

$("button").on("click",function(){

    if(j==0){
        console.log("click");
        $("body").css("background-color", moyen).css("color", clair);
        $("header,main").css("background-color",fonce);
        $("button").css("background-color",clair).css("color",fonce).html("☉");
        $("a").css("color",clair)

        
        j=1;

    }
    else{
        
        $("body").css("background-color", clair).css("color",fonce)
        $("header,main").css("background-color",moyen);
        $("button").css("background-color",fonce).css("color",clair).html("☽");
        $("a").css("color",fonce)

        j=0;
    }
    
})