document.addEventListener('DOMContentLoaded', () => {
  const prev = document.querySelector('.tipos-violencia-carousel .prev');
  const next = document.querySelector('.tipos-violencia-carousel .next');
  const carousel = document.querySelector('.tipos-violencia-carousel .tipos-violencia');

  if (!prev || !next || !carousel) return;

  let scrollAmount = 0;

  const card = carousel.querySelector('.card-violencia');
  const style = getComputedStyle(card);
  const cardWidth = card.offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight);

  next.addEventListener('click', () => {
    scrollAmount += cardWidth;
    if (scrollAmount > carousel.scrollWidth - carousel.clientWidth) {
      scrollAmount = carousel.scrollWidth - carousel.clientWidth;
    }
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
  });

  prev.addEventListener('click', () => {
    scrollAmount -= cardWidth;
    if (scrollAmount < 0) scrollAmount = 0;
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
  });

  let isDragging = false;
  let startX;
  let scrollX;

  carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollX = scrollAmount;
    carousel.style.cursor = 'grabbing';
  });

  carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.pageX - carousel.offsetLeft;
    const walk = x - startX;
    scrollAmount = scrollX - walk;
    if (scrollAmount < 0) scrollAmount = 0;
    if (scrollAmount > carousel.scrollWidth - carousel.clientWidth) {
      scrollAmount = carousel.scrollWidth - carousel.clientWidth;
    }
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
  });

  carousel.addEventListener('mouseup', () => {
    isDragging = false;
    carousel.style.cursor = 'grab';
  });

  carousel.addEventListener('mouseleave', () => {
    isDragging = false;
    carousel.style.cursor = 'grab';
  });

  carousel.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollX = scrollAmount;
  });

  carousel.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = x - startX;
    scrollAmount = scrollX - walk;
    if (scrollAmount < 0) scrollAmount = 0;
    if (scrollAmount > carousel.scrollWidth - carousel.clientWidth) {
      scrollAmount = carousel.scrollWidth - carousel.clientWidth;
    }
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
  });

  carousel.addEventListener('touchend', () => {
    isDragging = false;
  });
});
