document.getElementById("ham").addEventListener("click",()=>{
        document.getElementById("mob").classList.remove("transformation");

    document.getElementById("mob").classList.add("transform");
    document.getElementById("overlay-nav-mobile").style.display="block"


})



document.getElementById("cross").addEventListener("click",()=>{


    document.getElementById("mob").classList.remove("transform")
        document.getElementById("mob").classList.add("transformation");
        document.getElementById("overlay-nav-mobile").style.display = "none";


})