// =============================
// TYPING EFFECT
// =============================

var typed = new Typed(".typing", {
    strings: [
        "Full Stack Developer",
        "React Developer",
        "Python Developer",
        "Software Engineer",
        "Web Developer"
    ],
    typeSpeed: 90,
    backSpeed: 60,
    backDelay: 1500,
    loop: true
});


// =============================
// ACTIVE NAVBAR
// =============================

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                "header nav a[href*='" + id + "']"
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }

        }

    });

};


// =============================
// SCROLL REVEAL ANIMATION
// =============================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.2});


document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});


// =============================
// GLOW EFFECT
// =============================

document.querySelectorAll(".skill").forEach(skill=>{

skill.addEventListener("mousemove",()=>{

skill.style.boxShadow="0 0 30px gold";

});

skill.addEventListener("mouseleave",()=>{

skill.style.boxShadow="";

});

});


// =============================
// PROJECT HOVER
// =============================

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});


// =============================
// BACK TO TOP BUTTON
// =============================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#d4af37";
topBtn.style.color="#000";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 0 20px gold";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// =============================
// CONTACT FORM
// =============================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}


// =============================
// CONSOLE MESSAGE
// =============================

console.log("%cWelcome Recruiter 👋","color:gold;font-size:22px;font-weight:bold");

console.log("%cPortfolio Developed by THILAGAVATHI G","color:white;font-size:16px");
