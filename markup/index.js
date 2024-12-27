// Select the carousel element
const carousel = document.querySelector('#carouselExample');

// Initialize the Bootstrap Carousel
const bootstrapCarousel = new bootstrap.Carousel(carousel, {
    interval: 3000, // Auto-slide every 3 seconds
    wrap: true,     // Enable infinite looping
    pause: 'hover'  // Pause on hover
});

// Optional: Log the current slide when it changes
carousel.addEventListener('slide.bs.carousel', (event) => {
    console.log(`Slide transitioned to: ${event.to}`);
});

// Custom Previous and Next Controls (Optional)
document.querySelector('.carousel-control-prev').addEventListener('click', () => {
    bootstrapCarousel.prev();
});

document.querySelector('.carousel-control-next').addEventListener('click', () => {
    bootstrapCarousel.next();
});

