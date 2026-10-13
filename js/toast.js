'use strict';

// Anzeigedauer eines Toasts in Millisekunden
const TOAST_DURATION = 3500;

// Zeigt eine kurze Benachrichtigung an (type: 'success' oder 'error')
function showToast(message, type) {
  const container = document.querySelector('#toast-container');

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.style.setProperty('--toast-duration', `${TOAST_DURATION}ms`);

  const icon = createIcon(type === 'success' ? 'check' : 'alert');
  icon.classList.add('toast__icon');

  const text = createTextElement('p', 'toast__text', message);

  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'toast__close';
  closeButton.setAttribute('aria-label', 'Schließen');
  closeButton.append(createIcon('close'));

  toast.append(icon, text, closeButton);
  container.append(toast);

  // Automatisch ausblenden, oder früher per Klick
  const timer = setTimeout(() => hideToast(toast), TOAST_DURATION);

  closeButton.addEventListener('click', () => {
    clearTimeout(timer);
    hideToast(toast);
  });
}

// Spielt die Ausblende-Animation ab und entfernt danach den Toast
function hideToast(toast) {
  toast.classList.add('toast--leaving');

  toast.addEventListener('animationend', (event) => {
    if (event.animationName === 'toast-out') {
      toast.remove();
    }
  });
}