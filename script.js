document.querySelectorAll('.carousel').forEach(carousel => {
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    images[currentIndex].classList.add('active');

    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length; 
        images[currentIndex].classList.add('active');
    }, 3000);
});

const phoneNumber = "554788085196";

function handleLinkClick(url) {
    window.open(url, "_blank");
}

function handleWhatsAppClick() {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
}

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.style.display = 'none';

let slideIndex = 1;
const slideIntervals = {};

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    slideIndex = 1; 
    showSlides(slideIndex, modalId);    
    startSlideShow(modalId);
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    stopSlideShow(modalId);
}

function startSlideShow(modalId) {
    slideIntervals[modalId] = setInterval(() => {
        plusSlides(1, modalId);
    }, 3000); 
}

function stopSlideShow(modalId) {
    clearInterval(slideIntervals[modalId]); 
}

function plusSlides(n, modalId) {
    showSlides(slideIndex += n, modalId);
}

function currentSlide(n, modalId) {
    showSlides(slideIndex = n, modalId);
}

function showSlides(n, modalId) {
    const slides = document.querySelectorAll(`#${modalId} .slide`);
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    slides.forEach(slide => slide.classList.remove('active'));
    slides[slideIndex - 1].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');

    const checkVisibility = () => {
        galleryItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                item.classList.add('visible'); 
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu-mobile ul');
    const banner = document.querySelector('.banner');

    menuToggle.onclick = function() {
        menu.classList.toggle('active');
        
        if (menu.classList.contains('active')) {
            banner.classList.add('menu-active');
        } else {
            banner.classList.remove('menu-active');
        }
    };
});

function toggleNormalMenu() {
    const normalMenu = document.querySelector('.menu nav ul');
    normalMenu.classList.toggle('active'); 
}

window.onload = function() {
    setTimeout(function() {
        const bannerContent = document.querySelector('.banner-content');
        bannerContent.style.opacity = 1; 
        bannerContent.style.transform = 'translateY(0)';
    }, 2000); 
};

document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');

    const checkVisibility = () => {
        serviceCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                card.classList.add('visible'); 
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 
});
document.addEventListener('DOMContentLoaded', () => {
    const trainingsContainer = document.querySelector('.trainings-container');

    const checkVisibility = () => {
        const rect = trainingsContainer.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            trainingsContainer.classList.add('visible'); 
        }
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 
});