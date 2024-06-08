particlesJS("particles", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "push"
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.work__slider');
    const prevButton = document.querySelector('.work__slider-button.prev');
    const nextButton = document.querySelector('.work__slider-button.next');
  
    const itemsToShow = 3; // Number of items to show at once
    const totalItems = slider.children.length;
    let currentIndex = 0;
  
    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex -= itemsToShow;
        if (currentIndex < 0) {
          currentIndex = 0;
        }
        updateSliderPosition();
      }
    });
  
    nextButton.addEventListener('click', () => {
      if (currentIndex < totalItems - itemsToShow) {
        currentIndex += itemsToShow;
        if (currentIndex > totalItems - itemsToShow) {
          currentIndex = totalItems - itemsToShow;
        }
        updateSliderPosition();
      }
    });
  
    function updateSliderPosition() {
      const slideWidth = slider.children[0].getBoundingClientRect().width + parseFloat(getComputedStyle(slider).gap);
      slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }
  });
  
// Last Modification Time

document.getElementById("location").innerHTML = "Page Location: " + window.location.href;
document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;


sr.reveal('.about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.skills__item,.about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img,',{interval: 200}); 
