/*const carousel = document.querySelector('.carousel-slide');
const carouselImg = document.querySelectorAll('.carousel-slide img');

const prev = document.querySelector('#prev-button');
const next = document.querySelector('#nxt-button');

let counter = 0;
let width = carouselImg[0].clientWidth;

carousel.style.transform = 'translateX(' + (-width * counter) + 'px)';
// transform: translateX(1200px)


prev.addEventListener('click', () => {
    carousel.style.transition = 'transform 0.5s ease-in-out';
    counter--
    carousel.style.transform = 'translateX(' + (-width * counter) + 'px)';
});

next.addEventListener('click', () => {
    carousel.style.transition = 'transform 0.5s ease-in-out';
    counter++
    carousel.style.transform = 'translateX(' + (-width * counter) + 'px)';
});*/

function typingEffect() {
    const texts = ["Welcome to 2Hs skateboarding", "We make perfect boards", "We offer the best skate support", "Scroll down and explore more"]
    let index = 0;
    let count  = 0;
    let currentTxt = "";
    let letter = 0  ;

    (function typing() {

        if(index === texts.length) {
            index = 0;
        }

        currentTxt = texts[index];
        letter = currentTxt.slice(0, ++count);

          document.querySelector(".typing").textContent = letter;

        if(letter.length === currentTxt.length) {
            index++;
            count = 0;
        }
        setTimeout(typing, 500);
    }());
}

function navSlide() {

    const burger = document.querySelector (".burger");
    const nav = document.querySelector ("nav ul");
    const navLinks = document.querySelectorAll("nav ul li");

    burger.addEventListener( "click", () =>{

        nav.classList.toggle("nav-active");

        burger.classList.toggle("close");

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = "";
            }else{
                link.style.animation = `fade 0.5s ease forwards ${index / 7 + 0.5}s`

            };

        });

    });
    
}

function scroll() {
   document.addEventListener('scroll', () => {
        const historyTexts = document.querySelectorAll(".history-text");
        const historyImgs = document.querySelectorAll(".history-img");
        historyTexts.forEach(text => {
            textPosition = text.getBoundingClientRect().top;
            screenPosition = window.innerHeight / 1.2;
            if(textPosition < screenPosition) {
                text.classList.add("history-active");
            }
        });

        historyImgs.forEach(img => {
            imgPosition = img.getBoundingClientRect().top;
            screenPosition = window.innerHeight / 1.2;
            if(imgPosition < screenPosition) {
                img.classList.add("history-active");
            }
        });
    }); 
}

function ctaPopup() {
    const ctaBtns = document.querySelectorAll(".cta-button");
    const formClose = document.querySelector(".form-close");
    const ctaBg = document.querySelector(".cta-bg");

    ctaBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            ctaBg.classList.add("form-active");
        });
    })
    
    formClose.addEventListener('click', () => {
        ctaBg.classList.remove("form-active");
    });
}

function animateForm() {
    const arrows = document.querySelectorAll(".fa-arrow-down");
    arrows.forEach(arrow => {
        const input = arrow.previousElementSibling;
        const parent = arrow.parentElement;
        const nxtInput = parent.nextElementSibling;
        arrow.addEventListener('click', ()=> {
            if(input.type === "text" && validation(input)) {
                nxtForm(parent, nxtInput);
            } else if(input.type === "email" && validateEmail(input)) {
                nxtForm(parent, nxtInput);
            } else if(input.type === "password" && validation(input)) {
                nxtForm(parent, nxtInput);
            } else {
               parent.style.animation = "wiggle 0.5s ease-in-out"; 
            }
            parent.addEventListener('animationend', () => {
                parent.style.animation = '';
            });
        });

        function validation(user) {
            if(user.value.length < 6) {
                console.log("error");
                alert();                
            } else {
                success();
                return true;
            }
        }

        function validateEmail(email) {
            const validation = /^[^@]+@[^@]+\.[^@]+$/; // /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
            if(validation.test(email.value)) {
                console.log("error");
                success();
                return true;                
            } else {
                alert();
            }
        }

        const icon = input.previousElementSibling;

        function success() {
            icon.style.color = 'teal';
            arrow.style.color = 'teal';
        }

        function alert() {
            icon.style.color = 'crimson';
            arrow.style.color = 'crimson';
        }

        function nxtForm(parent, nxtInput) {
            parent.classList.add("inactive");
            parent.classList.remove("active");
            nxtInput.classList.add("active");
        }
    });
    
}
typingEffect();
animateForm();
navSlide();
scroll();
ctaPopup();


