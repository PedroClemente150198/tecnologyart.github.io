document.querySelectorAll('.carousel-container').forEach(container => {
    const carousel = container.querySelector('.carousel');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    const images = carousel.querySelectorAll('img');
    const totalImages = images.length;
    let index = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % totalImages;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    // Opcional: Automatizar el carrusel para que avance solo
    setInterval(() => {
        index = (index + 1) % totalImages;
        updateCarousel();
    }, 3000); // Cambiar cada 5 segundos
});
