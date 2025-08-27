document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    setInterval(nextSlide, 3000);
    const slideImages = [
        '../photo/bg-01.jpg', 
        '../photo/bg-03.jpg',
        '../photo/bg-02.jpg'
    ];
    
    slides.forEach((slide, index) => {
        slide.style.backgroundImage = `url('${slideImages[index]}')`;
    });
});
