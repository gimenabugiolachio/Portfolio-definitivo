

/* Mixitup */
let mixerPortfolio = mixitup('.work-container', {
    selectors:{
        target: '.work-card'
    },
    animation: {
        duration:300
    }
});


/* Link Active Work */

const linkWork = document.querySelectorAll(".work-item")

function activeWork(){
    linkWork.forEach(L => L.classList.remove("active-work"))
    this.classList.add("active-work")
}

linkWork.forEach(L=> L.addEventListener("click", activeWork))


/* Portfolio popup */

var workButton = document.getElementById("workButton") 
workButton.addEventListener("click", clicked)

function clicked(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
}

document.querySelector(".portfolio-popup-close").addEventListener("click", clicked)






/* Scroll section */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);


function navHighlighter()
{
let scrollY = window.pageYOffset;

sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute("id");

    if(scrollY>sectionTop && scrollY<=sectionTop + sectionHeight){
        document.querySelector('.nav-menu a[href*=' +sectionId + ']').classList.add("active-link")
    }
    else{
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link")
    }

})


}