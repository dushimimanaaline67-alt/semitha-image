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
    const activeBtn = document.getElementById(`btn-${lang}`);
    if(activeBtn) activeBtn.classList.add('active');

    // Update Text
    document.getElementById('hero-sub').innerText = translations[lang].heroSub;
    document.getElementById('hero-cta').innerText = translations[lang].heroCta;
    document.getElementById('about-label').innerText = translations[lang].aboutLabel;
    document.getElementById('about-title').innerText = translations[lang].aboutTitle;
    document.getElementById('about-desc').innerText = translations[lang].aboutDesc;
    document.getElementById('portfolio-title').innerText = translations[lang].portfolioTitle;
}

// 2. Logic yo kwerekana ifoto inshuro imwe no kuyuzuza muri Frame
const galleryContainer = document.getElementById('main-gallery');

// Urutonde rw'amafoto (Yashyire mu folder imwe n'iyi file)
const rwandaImages = [
    "a.jpg", "d.jpg", "e.jpg", "f.jpg", "g.jpg", 
    "h.jpg", "i.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"
];

function loadGallery() {
    galleryContainer.innerHTML = ''; 

    rwandaImages.forEach((imgName, index) => {
        const item = document.createElement('div');
        
        // 'aspect-square' cyangwa 'aspect-[4/5]' bituma frame igira intera ihoraho
        // 'overflow-hidden' ituma ifoto itarenga kadiri
        item.className = "gallery-item relative group overflow-hidden bg-[#111] aspect-[4/5] rounded-sm";
        
        item.innerHTML = `
            <img 
                src="${imgName}" 
                alt="Rwanda View ${index + 1}"
                loading="lazy" 
                class="w-full h-full object-cover opacity-90 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
            >
            <div class="gallery-overlay absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 class="text-white font-serif italic text-sm">Rwanda View #${index + 1}</h4>
                <button 
                    onclick="contactWA(${index + 1})" 
                    class="text-[10px] text-orange-400 uppercase tracking-widest mt-2 border-b border-orange-400/40 w-fit hover:text-white hover:border-white transition-colors"
                >
                    Inquire
                </button>
            </div>
        `;
        galleryContainer.appendChild(item);
    });
}

function contactWA(id) {
    const msg = encodeURIComponent(`${translations[currentLang].waMsg} Rwanda View #${id}`);
    window.open(`https://wa.me/250796028068?text=${msg}`, '_blank');
}

// Gukora Initialization
document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
    if(typeof lucide !== 'undefined') lucide.createIcons();
    setLanguage('en');
});
