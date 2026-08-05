(function () {
  const modal = document.getElementById('name-modal');
  const form = document.getElementById('name-form');
  const nameInput = document.getElementById('name-input');
  const greeting = document.getElementById('greeting');
  const overlay = document.querySelector('.overlay');
  const surpriseBtn = document.getElementById('surprise-btn');
  const videoSection = document.getElementById('video-section');
  const video = document.getElementById('surprise-video');

  document.body.classList.add('modal-open');
  nameInput.focus();

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = nameInput.value.trim();
    if (!name) return;

    const capitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    greeting.textContent = 'Hola ' + capitalized + '...';

    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.title = 'Hola ' + capitalized;
    overlay.classList.add('visible');
  });

  surpriseBtn.addEventListener('click', function () {
    videoSection.classList.remove('hidden');
    videoSection.setAttribute('aria-hidden', 'false');

    videoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setTimeout(function () {
      video.play().catch(function () {});
    }, 600);
  });
})();
