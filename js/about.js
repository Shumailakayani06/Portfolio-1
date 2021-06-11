/* Navigration Bar */

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-link");
    const navLinks = document.querySelectorAll(".nav-link li");
    const bodY = document.getElementsByTagName("BODY")[0];
    
    // toggle nav
    burger.addEventListener("click", () => {
        //toggle nav
        nav.classList.toggle("nav-active");

        
        
   
        bodY.style.overflowX ="hidden";
        nav.style.display = "flex";
        nav.style.overflow = "hidden";
        
        
        
        //animate links

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation ="";
                nav.style.overflow ="hidden";
                bodY.style.overflowX ="hidden";
                
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                bodY.style.overflowX ="hidden";
                
            }
            burger.classList.toggle("toggle");
            
        });
    
        
   
    });
}

navSlide();
/* Loader */

window.addEventListener("load", function(){
    const loader = document.querySelector(".loader");
    
    loader.className += " hidden";
    
    })