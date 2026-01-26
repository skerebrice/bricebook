// Detectar si es móvil o computadora
function detectDevice() {
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
    
    if (isMobile) {
        console.log("📱 Web Mobile detectado");
        document.body.classList.add("mobile");
    } else {
        console.log("💻 Web Desktop detectado");
        document.body.classList.add("desktop");
    }
}

detectDevice();


// MENU MOBILE TOGGLE
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navMenu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

