/* Navigration Bar */

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-link");
    const navLinks = document.querySelectorAll(".nav-link li");
    // toggle nav
    burger.addEventListener("click", () => {
        //toggle nav
        nav.classList.toggle("nav-active");

        
        nav.style.display = "flex";
        nav.style.overflow = "hidden";
        
        //animate links

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation ="";
                nav.style.overflow ="hidden";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                
            }

            burger.classList.toggle("toggle");
        });
    
    
   
    });
}

navSlide();