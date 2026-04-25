// 1. Indimi (Translations)
const translations = {
    en: {
        heroSub: "Capturing Stories Through the Lens",
        heroCta: "EXPLORE ARCHIVE",
        aboutLabel: "Beyond Photography",
        aboutTitle: "Every frame is a heartbeat, every shot a legacy.",
        aboutDesc: "At Semitha Image, we don't just take photos; we preserve memories. We believe that behind every face, every event, or every landscape in Rwanda, there is a unique story that deserves to be seen with pure artistic emotion.",
        portfolioTitle: "Portfolio Archive",
        waMsg: "Hello Semitha Image, I am interested in this photo: "
    },
    rw: {
        heroSub: "Gufata Inkuru Ukoresheje lens ya camera",
        heroCta: "REBA AMAFOTO",
        aboutLabel: "Inyuma y'ifoto",
        aboutTitle: "Buri frame ni umutima utera, buri foto ni umurage.",
        aboutDesc: "Muri Semitha Image, ntabwo dufata amafoto gusa; tubika ibihe bitazibagirana. Twizera ko inyuma ya buri muntu, buri birori, cyangwa buri landscape mu Rwanda, hari inkuru yihariye ikwiriye kubonwa n'isi mu buryo bw'ubuhanzi bwuzuye amarangamutima.",
        portfolioTitle: "Ububiko bw'Amafoto",
        waMsg: "Muraho Semitha Image, nishimiye iyi foto: "
    },
    fr: {
        heroSub: "Capturer des histoires à travers l'objectif",
        heroCta: "VOIR LES PHOTOS",
        aboutLabel: "Au-delà de la photographie",
        aboutTitle: "Chaque cadre est un battement de cœur, chaque cliché un héritage.",
        aboutDesc: "Chez Semitha Image, nous ne nous contentons pas de prendre des photos ; nous préservons des souvenirs. Nous pensons que derrière chaque visage, chaque événement ou chaque paysage au Rwanda, se cache une histoire unique.",
        portfolioTitle: "Archives du Portfolio",
        waMsg: "Bonjour Semitha Image, je suis intéressé par cette photo: "
    }
};

let currentLang = 'en';

// Gushyiraho ururimi
function setLanguage(lang) {
    currentLang = lang;
    
    // Hindura amabuton y'indimi
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${lang}`);
    if(activeBtn) activeBtn.classList.add('active');

    // Hindura amagambo kuri page
    document.getElementById('hero-sub').innerText = translations[lang].heroSub;
    document.getElementById('hero-cta').innerText = translations[lang].heroCta;
    document.getElementById('about-label').innerText = translations[lang].aboutLabel;
    document.getElementById('about-title').innerText = translations[lang].aboutTitle;
    document.getElementById('about-desc').innerText = translations[lang].aboutDesc;
    document.getElementById('portfolio-title').innerText = translations[lang].portfolioTitle;
}

// 2. Home Page Slideshow (5 Images)
const heroImages = ["334.jpg", "i.jpg", "11.jpg", "f.jpg"]; 
let slideIndex = 0;

function startHeroSlideshow() {
    const slideImg = document.getElementById('slide-img');
    if(!slideImg) return;

    setInterval(() => {
        // Animation yo gusohoka
        slideImg.style.opacity = '0';
        
        setTimeout(() => {
            slideIndex = (slideIndex + 1) % heroImages.length;
            slideImg.src = heroImages[slideIndex];
            // Animation yo kwinjira
            slideImg.style.opacity = '0.4';
            slideImg.style.transform = 'scale(1.1)';
        }, 1500);
    }, 5000);
}

// 3. Portfolio Gallery (Single Entry)
const rwandaImages = ["a.jpg", "3.jpg", "e.jpg", "f.jpg", "g.jpg", "h.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

function loadGallery() {
    const container = document.getElementById('main-gallery');
    if(!container) return;
    
    container.innerHTML = '';
    rwandaImages.forEach((img, index) => {
        const item = document.createElement('div');
        item.className = "gallery-item group";
        item.innerHTML = `
            <img src="${img}" class="w-full h-full object-cover opacity-80 transition duration-1000 group-hover:scale-110 group-hover:opacity-100" alt="Rwanda View">
            <div class="gallery-overlay">
                <button onclick="contactWA(${index + 1})" class="msg-btn shadow-2xl">Message</button>
            </div>
        `;
        container.appendChild(item);
    });
}

// WhatsApp Contact
function contactWA(id) {
    const msg = encodeURIComponent(`${translations[currentLang].waMsg} Rwanda View #${id}`);
    window.open(`https://wa.me/250796028068?text=${msg}`, '_blank');
}

// 4. Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
    startHeroSlideshow();
    setLanguage('en'); // Tangirira ku Cyongereza
    
    // Lucide Icons (nka message-circle, facebook, instagram)
    if(window.lucide) {
        lucide.createIcons();
    }
});
