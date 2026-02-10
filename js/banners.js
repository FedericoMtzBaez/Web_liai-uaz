const BANNERS_DATA = [
    {
        img: '../banners/baner1.png',
        link: null,
        alt: 'Banner 1'
    },
    {
        img: '../banners/baner2.png',
        link: null,
        alt: 'Banner 2'
    },
    {
        img: 'banners/baner3.png',
        link: null,
        alt: 'Banner 3'
    },
    {
        img: 'banners/baner4.png',
        link: null,
        alt: 'Banner 4'
    },
    {
        img: 'banners/baner5.png',
        link: null,
        alt: 'Banner 5'
    },
    {
        img: 'banners/baner6.png',
        link: null,
        alt: 'Banner 6'
    },
    {
        img: 'banners/baner7.png',
        link: null,
        alt: 'Banner 7'
    },
    {
        img: 'banners/baner8.png',
        link: null,
        alt: 'Banner 8'
    },
    {
        img: 'banners/baner9.png',
        link: null,
        alt: 'Banner 9'
    },
];

export function setupBanners() {
    const container = document.getElementById('banner-container');
    if (!container || BANNERS_DATA.length === 0) return;

    // 1. Generar el HTML dinámicamente
    let htmlContent = '<div class="banner-track">';

    BANNERS_DATA.forEach((banner, index) => {
        const activeClass = index === 0 ? 'active' : '';
        const imageHtml = `<img src="${banner.img}" alt="${banner.alt}" class="banner-img">`;

        let itemHtml;
        if (banner.link) {
            itemHtml = `<a href="${banner.link}" target="_blank" class="banner-item ${activeClass}">${imageHtml}</a>`;
        } else {
            itemHtml = `<div class="banner-item ${activeClass}">${imageHtml}</div>`;
        }

        htmlContent += itemHtml;
    });

    htmlContent += '</div>';

    // Controles (opcional, puntos de navegación)
    htmlContent += '<div class="banner-indicators">';
    BANNERS_DATA.forEach((_, index) => {
        htmlContent += `<span class="banner-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>`;
    });
    htmlContent += '</div>';

    container.innerHTML = htmlContent;

    // 2. Lógica del Carrusel (Rotación automática)
    initBannerLogic();
}

function initBannerLogic() {
    const items = document.querySelectorAll('.banner-item');
    const dots = document.querySelectorAll('.banner-dot');
    let currentIndex = 0;
    const intervalTime = 5000; // 5 segundos por banner

    function showBanner(index) {
        // Remover clases activas
        items.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Activar el actual
        items[index].classList.add('active');
        dots[index].classList.add('active');

        currentIndex = index;
    }

    function nextBanner() {
        let nextIndex = (currentIndex + 1) % items.length;
        showBanner(nextIndex);
    }

    // Iniciar rotación
    let timer = setInterval(nextBanner, intervalTime);

    // Click en los puntos
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            clearInterval(timer); // Pausar al interactuar
            const index = parseInt(e.target.getAttribute('data-index'));
            showBanner(index);
            timer = setInterval(nextBanner, intervalTime); // Reiniciar
        });
    });
}