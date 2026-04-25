const translations = {
    en: { heroSub: "Capturing Stories Through the Lens", heroCta: "EXPLORE ARCHIVE", portfolioTitle: "Portfolio Archive", waMsg: "Hello Semitha Image, I am interested in this photo: " },
    rw: { heroSub: "Gufata Inkuru Ukoresheje lens ya camera", heroCta: "REBA AMAFOTO", portfolioTitle: "Ububiko bw'Amafoto", waMsg: "Muraho Semitha Image, nishimiye iyi foto: " },
    fr: { heroSub: "Capturer des histoires à travers l'objectif", heroCta: "VOIR LES PHOTOS", portfolioTitle: "Archives du Portfolio", waMsg: "Bonjour Semitha Image, je suis intéressé par cette photo: " }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');
    document.getElementById('hero-sub').innerText = translations[lang].heroSub;
    document.getElementById('hero-cta').innerText = translations[lang].heroCta;
    document.getElementById('portfolio-title').innerText = translations[lang].portfolioTitle;
}

// Cinematic Slideshow
const heroImages = ["334.jpg", "i.jpg", "f.jpg"]; 
let slideIndex = 0;
function nextSlide() {
    const slideImg = document.getElementById('slide-img');
    if(!slideImg) return;
    slideIndex = (slideIndex + 1) % heroImages.length;
    slideImg.style.opacity = '0';
    setTimeout(() => {
        slideImg.src = heroImages[slideIndex];
        slideImg.style.opacity = '0.4';
    }, 1000);
}
setInterval(nextSlide, 5000);

// Portfolio Gallery (Single Entry)
const rwandaImages = ["a.jpg", "d.jpg", "e.jpg", "f.jpg", "g.jpg", "h.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

function loadGallery() {
    const container = document.getElementById('main-gallery');
    if(!container) return;
    container.innerHTML = '';
    rwandaImages.forEach((img, index) => {
        const item = document.createElement('div');
        item.className = "gallery-item group";
        item.innerHTML = `
            <img src="${img}" class="w-full h-full object-cover opacity-80 transition duration-1000 group-hover:scale-110 group-hover:opacity-100">
            <div class="gallery-overlay">
                <button onclick="contactWA(${index + 1})" class="msg-btn shadow-2xl">Message</button>
            </div>
        `;
        container.appendChild(item);
    });
}

function contactWA(id) {
    const msg = encodeURIComponent(`${translations[currentLang].waMsg} Rwanda View #${id}`);
    window.open(`https://wa.me/250796028068?text=${msg}`, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
    if(window.lucide) lucide.createIcons();
    setLanguage('en');
});
