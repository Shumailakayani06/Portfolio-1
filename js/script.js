let url = "https://flowerpowerlcb.com/wp-json/wp/v2/posts?_embed&per_page=3";

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





/* bringing the last 3 posts */

const blogPosts = document.querySelector(".blogPosts");

fetch(url)
.then (response => response.json())
.then (data =>{
    postList(data);
    console.log(data);
})

.catch((error)=>{
    console.error('Error', error);
})

function postList(posts){
    let pList ="";

    for (let item in posts){
        console.log(posts[item]);

        pList += `
<div class="postDiv">
<a href="blogpost.html?id=${posts[item].id}">
<h3 class="blogPostHeading">${posts[item].title.rendered}</h3>
<div class="imgdiv"><img src="${posts[item]._embedded["wp:featuredmedia"][0].source_url}"></div>
</a>
</div>
`

    }

    blogPosts.innerHTML = pList;
}



// /* refresh c*/ 
// let resent = document.querySelector(".nav-link").clientWidth;
// addEventListener("resize", function(){
//     let current = document.querySelector(".nav-link").clientWidth;
//     if(current != resent) this.location.reload();
//     resent = current;
// });




