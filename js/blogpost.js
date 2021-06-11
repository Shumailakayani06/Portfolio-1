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


let blogPost = document.querySelector(".sPost");
let recepiep = document.querySelector(".recipes")

const qString = window.location.search;
const id = new URLSearchParams (qString).get("id");

if (!id) {window.location = "index.html";}

let pURL = "https://flowerpowerlcb.com/wp-json/wp/v2/posts/"+ id + "?_embed&per_page=3";
fetch (pURL)
.then (response => response.json())
.then (data => {
    specificPost (data);
    console.log(data);
    

})

.catch((error) => {
    console.error('Error', error)
});

let sPostContent = "";
let recepieP ="";
function specificPost(data){
    console.log(data);
    

    sPostContent += `
  <h1>${data.title.rendered}</h2> 
  <img src="${data._embedded["wp:featuredmedia"][0].source_url}">
    
    `;

    recepieP += `
    <p>${data.content.rendered}</p>
    `;

   


blogPost.innerHTML = sPostContent;
recepiep.innerHTML = recepieP;
document.title = data.title.rendered

}




