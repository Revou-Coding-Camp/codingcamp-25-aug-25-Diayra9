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

function validateForm(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !phone || !message) {
        alert("Please fill in all fields.");
        return false;
    }

    const feedbackMessage = document.getElementById('feedbackMessage');
    feedbackMessage.textContent = "Terima kasih! Mohon tunggu informasi dari tim kami.";
    feedbackMessage.classList.remove('hidden');

    document.getElementById('contactForm').reset();

    return false; 
}

function showBuyPopup() {
    const popupModal = document.getElementById('popupModal');
    popupModal.classList.remove('hidden');
}

document.getElementById('closePopup').onclick = function() {
    document.getElementById('popupModal').classList.add('hidden');
};

document.getElementById('popupModal').onclick = function(event) {
    if (event.target === this) {
        this.classList.add('hidden');
    }
};
