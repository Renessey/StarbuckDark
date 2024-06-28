const galleryItems = document.querySelectorAll('.gallery li img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
let currentIndex = 0;

// Exibe a lightbox com a imagem clicada
function showLightbox(index) {
    lightboxImage.src = galleryItems[index].src;
    lightbox.classList.remove('hidden');
    currentIndex = index;
}

// Oculta a lightbox
function hideLightbox() {
    lightbox.classList.add('hidden');
}

// Navega para a imagem anterior
function showPreviousImage() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    showLightbox(currentIndex);
}

// Navega para a próxima imagem
function showNextImage() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showLightbox(currentIndex);
}

// Event listeners
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => showLightbox(index));
});

document.querySelector('.close-button').addEventListener('click', hideLightbox);
prevButton.addEventListener('click', showPreviousImage);
nextButton.addEventListener('click', showNextImage);
