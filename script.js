const heroVideo = document.querySelector('.hero-video');

function setVideoSrc() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 768) {
    heroVideo.src = 'media/Video-Hero-Mobile.webm';
  } else {
    heroVideo.src = 'media/Video-Hero.webm';
  }
}

// Get the header element
const header = document.querySelector('header');

// Create a back-to-top button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = 'Voltar ao topo';
backToTopButton.classList.add('back-to-top');

// Add the back-to-top button to the header
header.appendChild(backToTopButton);

// Add an event listener to the window's scroll event
let scrollTimeout = null;
window.addEventListener('scroll', () => {
  // Clear the previous timeout
  clearTimeout(scrollTimeout);

  // Set a new timeout to debounce the scroll event
  scrollTimeout = setTimeout(() => {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Verify the scroll direction
    const scrollDirection = getScrollDirection();

    // If the user is scrolling up, show the back-to-top button e hide o header
    if (scrollDirection === 'up') {
      backToTopButton.classList.remove('hidden');
      header.classList.add('hidden');
    } else {
      // If the user is scrolling down, hide the back-to-top button e show o header
      backToTopButton.classList.add('hidden');
      header.classList.remove('hidden');
    }
  }, 100); // 100ms debounce timeout
});

// Function to verify the scroll direction
function getScrollDirection() {
  const scrollPosition = window.scrollY;
  const lastScrollPosition = window.lastScrollPosition || 0;
  window.lastScrollPosition = scrollPosition;

  if (scrollPosition > lastScrollPosition) {
    return 'down';
  } else if (scrollPosition < lastScrollPosition) {
    return 'up';
  } else {
    return 'none';
  }
}

// Add an event listener to the back-to-top button
backToTopButton.addEventListener('click', () => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Chama a função quando a página é carregada
setVideoSrc();

// Chama a função quando a janela é redimensionada
window.addEventListener('resize', setVideoSrc);

// Facts counter
$('[data-toggle="counter-up"]').counterUp({
  delay: 10,
  time: 2000
})(jQuery);

