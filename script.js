// 1. Language Data
const translations = {
    en: {
        heroSub: "Capturing Stories Through the Lens",
        heroCta: "VIEWS THE IMAGES",
        aboutLabel: "The Photographer's Goal",
        aboutTitle: "Turning fleeting moments into timeless legacies.",
        aboutDesc: "Semitha Image was founded on a single principle: Emotional Authenticity. Our goal is to ensure every frame in Rwanda tells a story.",
        portfolioTitle: "Portfolio Archive",
        waMsg: "Hello Semitha Image, I am interested in this photo: "
    },
    rw: {
        heroSub: "Gufata Inkuru Ukoresheje lens ya camera",
        heroCta: "REBA AMAFOTO",
        aboutLabel: "Intego y'Umuhanga mu mafoto",
        aboutTitle: "Guhindura ibihe by'akanya gato umurage utazigera ushira.",
        aboutDesc: "Semitha Image yashinzwe ku ihame rimwe: Ukuri mu byiyumvo. Intego yacu ni ukumenya ko buri foto mu Rwanda ivuga inkuru.",
        portfolioTitle: "Ububiko bw'Amafoto",
        waMsg: "Muraho Semitha Image, nishimiye iyi foto: "
    },
    fr: {
        heroSub: "Capturer des histoires à travers l'objectif",
        heroCta: "VOIR LES PHOTOS",
        aboutLabel: "L'objectif du photographe",
        aboutTitle: "Transformer des moments fugaces en héritages intemporels.",
        aboutDesc: "Semitha Image a été fondée sur un seul principe : l'authenticité émotionnelle. Notre objectif est de raconter une histoire à travers chaque image au Rwanda.",
        portfolioTitle: "Archives du Portfolio",
        waMsg: "Bonjour Semitha Image, je suis intéressé par cette photo: "
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');

    // Update Text
    document.getElementById('hero-sub').innerText = translations[lang].heroSub;
    document.getElementById('hero-cta').innerText = translations[lang].heroCta;
    document.getElementById('about-label').innerText = translations[lang].aboutLabel;
    document.getElementById('about-title').innerText = translations[lang].aboutTitle;
    document.getElementById('about-desc').innerText = translations[lang].aboutDesc;
    document.getElementById('portfolio-title').innerText = translations[lang].portfolioTitle;
}

// 2. 300 Image Gallery Logic (Rwanda Places Only)
// Note: We use professional photography IDs that reflect Rwanda's aesthetic
const galleryContainer = document.getElementById('main-gallery');

const rwandaImages = [
    "a.jpg", // Hills
    "d.jpg", // Kigali
    "e.jpg", // Nature
     "f.jpg", // Hills
    "g.jpg", // Kigali
    "h.jpg", // Nature
    "i.jpg", // Nature
     "1.jpg", // Nature
     "2.jpg", // Nature
     "3.jpg", // Nature
     "4.jpg", // Nature
];

function loadGallery() {
    for (let i = 1; i <= 30; i++) {
        const imgUrl = rwandaImages[i % rwandaImages.length] + `?auto=format&fit=crop&w=800&q=60`;
        const item = document.createElement('div');
        item.className = "gallery-item relative group overflow-hidden bg-[#111]";
        
        item.innerHTML = `
            <img src="${imgUrl}" loading="lazy" class="w-full h-full object-cover opacity-80 transition duration-700">
            <div class="gallery-overlay absolute inset-0 flex flex-col justify-end p-6">
                <h4 class="text-white font-serif italic">Rwanda View #${i}</h4>
                <button onclick="contactWA(${i})" class="text-[10px] text-gold uppercase tracking-widest mt-2 border-b border-gold/40">Inquire</button>
            </div>
        `;
        galleryContainer.appendChild(item);
    }
}

function contactWA(id) {
    const msg = encodeURIComponent(`${translations[currentLang].waMsg} Rwanda View #${id}`);
    window.open(`https://wa.me/250796028068?text=${msg}`, '_blank');
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
    lucide.createIcons();
    setLanguage('en');
});
