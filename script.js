const heroVideo = document.querySelector('.hero-video');

function setVideoSrc() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 768) {
    heroVideo.src = 'media/Video-Hero-Mobile.webm';
  } else {
    heroVideo.src = 'media/Video-Hero.webm';
  }
}

// Chama a função quando a página é carregada
setVideoSrc();

// Chama a função quando a janela é redimensionada
window.addEventListener('resize', setVideoSrc);

// Facts counter
$('[data-toggle="counter-up"]').counterUp({
  delay: 10,
  time: 2000
})(jQuery);

