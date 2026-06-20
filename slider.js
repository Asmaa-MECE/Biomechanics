function initSlider(sliderId) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;

  let dragging = false, startX = 0, startScroll = 0;

  slider.addEventListener('mousedown', e => {
    dragging = true;
    startX = e.clientX;
    startScroll = slider.scrollLeft;
    slider.classList.add('dragging');
  });

  window.addEventListener('mousemove', e => {
    if (!dragging) return;
    slider.scrollLeft = startScroll - (e.clientX - startX);
  });

  window.addEventListener('mouseup', () => {
    dragging = false;
    slider.classList.remove('dragging');
  });

  slider.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    startScroll = slider.scrollLeft;
  }, { passive: true });

  slider.addEventListener('touchmove', e => {
    slider.scrollLeft = startScroll - (e.touches[0].clientX - startX);
  }, { passive: true });
}