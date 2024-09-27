/* recherche de réservation*/
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        console.log('Form submitted');
    });
});
// destinations
function pulseShrink(element) {
    element.classList.add('shrink');
    setTimeout(() => {
        element.classList.remove('shrink');
    }, 300); // 300ms delay before returning to original size
}

// carousel testimony
document.addEventListener('DOMContentLoaded', function() {
    var carousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
        interval: 5000,
        wrap: true
    });

    var testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(function(card) {
        card.addEventListener('click', function() {
            this.style.transform = this.style.transform === 'scale(1.1)' ? 'scale(1)' : 'scale(1.1)';
        });
    });
});
