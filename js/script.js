document.addEventListener('DOMContentLoaded', function () {
    // SLIDER
    const slides = document.querySelectorAll('.slide');
    const slideImages = [
        '../photo/bg-01.jpg',
        '../photo/bg-03.jpg',
        '../photo/bg-02.jpg'
    ];
    let currentSlide = 0;

    slides.forEach((slide, index) => {
        slide.style.backgroundImage = `url('${slideImages[index]}')`;
    });

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000);

    // POPUP NAMA
    const namePopup = document.getElementById('namePopup');
    const closeNamePopup = document.getElementById('closeNamePopup');
    const saveNameBtn = document.getElementById('saveName');
    const greetingText = document.getElementById('greetingText');

    closeNamePopup.addEventListener('click', () => namePopup.classList.add('hidden'));

    saveNameBtn.addEventListener('click', () => {
        const nameValue = document.getElementById('popupNameInput').value.trim();
        if (nameValue.length > 0) {
            greetingText.textContent = `Halo ${nameValue}, Selamat Datang!`;
            greetingText.classList.remove('hidden');
            namePopup.classList.add('hidden');
        } else {
            alert("Nama tidak boleh kosong!");
        }
    });

    // POPUP BELI
    const popupModal = document.getElementById('popupModal');
    const closePopup = document.getElementById('closePopup');

    window.showBuyPopup = () => popupModal.classList.remove('hidden');
    closePopup.addEventListener('click', () => popupModal.classList.add('hidden'));
    popupModal.addEventListener('click', (e) => {
        if (e.target === popupModal) popupModal.classList.add('hidden');
    });

    // NAVIGATION
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    hamburger.addEventListener('click', () => navMenu.classList.toggle('hidden'));

    // FORM VALIDATION
    const form = document.getElementById('contactForm');
    const submittedData = document.getElementById('submittedData');

    const validators = {
    name: value => value ? true : "Nama tidak boleh kosong!",
    email: value => /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(value) ? true : "Email tidak valid!",
    phone: value => /^[0-9]{10,15}$/.test(value) ? true : "Nomor telepon harus angka 10-15 digit!",
    message: value => value ? true : "Pesan tidak boleh kosong!"
    };

    form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputs = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        message: form.message.value.trim()
    };

    for (const [key, validate] of Object.entries(validators)) {
        const result = validate(inputs[key]);
        if (result !== true) {
        showValidationPopup(result); 
        return false;
        }
    }

    submittedData.innerHTML = `
        <h3 class="font-bold mb-2">Data yang Berhasil Anda Kirim:</h3>
        <p><strong>Nama:</strong> ${inputs.name}</p>
        <p><strong>Email:</strong> ${inputs.email}</p>
        <p><strong>Phone:</strong> ${inputs.phone}</p>
        <p><strong>Pesan:</strong> ${inputs.message}</p>
    `;
    submittedData.classList.remove('hidden');
    showValidationPopup("Pesan berhasil dikirim!");

    form.reset();
    });

    function showValidationPopup(msg) {
    const popup = document.getElementById("validationPopup");
    const messageEl = document.getElementById("validationMessage");

    messageEl.textContent = msg;
    popup.classList.remove("hidden");

    document.getElementById("closeValidationPopup").onclick = () => popup.classList.add("hidden");
    document.getElementById("okValidation").onclick = () => popup.classList.add("hidden");
    }
});