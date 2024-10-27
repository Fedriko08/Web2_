/*================== toggle icon navbar ================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Pastikan 'bx-x' adalah class yang valid
    navbar.classList.toggle('active');
};

/*================== scroll sections active link ================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*================== sticky navbar ================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*================== remove toggle icon and navbar when click navbar link (scroll) ================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*================== scroll reveal ================*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.judul', { origin: 'top' });
ScrollReveal().reveal('video', { origin: 'left' });
ScrollReveal().reveal('.text-section', { origin: 'right' });
ScrollReveal().reveal('.container', { origin: 'bottom' });

function adjustLayout() {
    const videos = document.querySelectorAll('video');
    const textSections = document.querySelectorAll('.text-section');

    // Atur lebar video agar lebih kecil pada layar kecil
    if (window.innerWidth < 768) { // Jika layar lebih kecil dari 768px
        videos.forEach(video => {
            video.style.width = '100%';
        });
        textSections.forEach(section => {
            section.style.width = '100%';
            section.style.padding = '10px';
        });
    } else { // Jika layar lebih besar atau sama dengan 768px
        videos.forEach(video => {
            video.style.width = '600px';
        });
        textSections.forEach(section => {
            section.style.width = '500px';
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    function adjustLayout() {
        const containers = document.querySelectorAll('.container');
        const isMobile = window.innerWidth <= 768;

        containers.forEach(container => {
            container.style.gap = isMobile ? '2rem' : '5rem'; // Jarak antar elemen di dalam container
        });
    }

    adjustLayout();
    window.addEventListener('resize', adjustLayout); // Sesuaikan layout saat ukuran layar berubah
});

