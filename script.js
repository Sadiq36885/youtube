document.addEventListener('DOMContentLoaded', function () {
    const aboutImage = document.querySelector('.about-image');
    const aboutText = document.querySelector('.about-text');

    const imageWidth = aboutImage.offsetWidth; 
    const textWidth = aboutText.offsetWidth; 

    aboutImage.addEventListener('click', function () {
        const textWidth = aboutText.offsetWidth; 
        const additionalImageOffset = -70; 
        const additionalTextOffset = 50; 

        aboutImage.style.transform = aboutImage.style.transform === `translateX(${textWidth + additionalImageOffset}px)` ? 'translateX(0)' : `translateX(${textWidth + additionalImageOffset}px)`; 
        aboutText.style.transform = aboutText.style.transform === `translateX(-${aboutImage.offsetWidth - additionalTextOffset}px)` ? 'translateX(0)' : `translateX(-${aboutImage.offsetWidth - additionalTextOffset}px)`; 
    });

    // Barların başlangıçta sıfırdan başlaması ve animasyonla dolması
    const bars = document.querySelectorAll('.bar');
    const values = {
        'channels-bar': '10+', 
        'subscribers-bar': '900K+', 
        'views-bar': '60 Milyon+', 
        'revenue-bar': '40K+'
    };

    bars.forEach(bar => {
        bar.style.width = '0'; 
        const barId = bar.getAttribute('id');
        setTimeout(() => {
            bar.style.width = '60%'; 
            const barNumber = document.createElement('div'); 
            barNumber.classList.add('bar-number'); 
            barNumber.textContent = values[barId]; 
            bar.appendChild(barNumber); 
        }, 500);
    });

    // 10 saniyede bir barların yeniden dolması
    setInterval(() => {
        bars.forEach(bar => {
            bar.style.width = '0';
            const barId = bar.getAttribute('id');
            setTimeout(() => {
                bar.style.width = '60%'; 
                const barNumber = document.createElement('div'); 
                barNumber.classList.add('bar-number'); 
                barNumber.textContent = values[barId]; 
                bar.appendChild(barNumber); 
            }, 500);
        });
    }, 10000); 

    // Sayfa kaydırma işlemi
    const menuLinks = document.querySelectorAll('nav ul li a');
    const fixedMenuLinks = document.querySelectorAll('#fixed-menu ul li a'); // Geçici menü bağlantıları

    const scrollToSection = (targetId) => {
        const targetElement = document.querySelector(targetId);
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

        // Sayfayı hedef konuma kaydır
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth' // Animasyonlu kaydırma
        });
    };

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToSection(targetId); // Hedef konuma kaydır
        });
    });

    fixedMenuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToSection(targetId); // Hedef konuma kaydır
        });
    });

    // Geçici Menü
    const fixedMenu = document.getElementById('fixed-menu');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 120) { // 120 piksel kaydırıldığında
            fixedMenu.style.opacity = '1'; // Menü görünür
            fixedMenu.style.pointerEvents = 'auto'; // Tıklanabilir yap
        } else {
            fixedMenu.style.opacity = '0'; // Menü gizli
            fixedMenu.style.pointerEvents = 'none'; // Tıklanamaz yap
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const channelHeading = document.querySelector('.centered-heading');

    // Sayfanın yüklendiğinde başlığı göster
    setTimeout(() => {
        channelHeading.classList.add('show');
    }, 500); // 0.5 saniye gecikmeli göster

    // Scroll olayı için
    const observerOptions = {
        root: null, // Gözlemci için kök
        rootMargin: '0px',
        threshold: 0.5 // %50 görünür olunca tetiklesin
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                channelHeading.classList.add('show'); // Göründüğünde göster
                observer.unobserve(entry.target); // Gözlemden kaldır
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(channelHeading); // Başlığı gözlemle
});
