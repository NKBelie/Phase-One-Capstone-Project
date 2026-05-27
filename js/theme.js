const THEME_KEY = 'book_explorer_theme';
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function getSavedTheme() {
  return localStorage.getItem(THEME_KEY) || 'light';
}

function applyTheme(theme) {
  const isDark = theme === 'dark';

  document.documentElement.classList.toggle('dark-mode', isDark);

  if (themeIcon) {
    themeIcon.src = isDark ? 'img/sun.svg' : 'img/moon.svg';
  }

  if (themeToggle) {
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    themeToggle.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }
}

function toggleTheme() {
  const nextTheme = getSavedTheme() === 'dark' ? 'light' : 'dark';

  localStorage.setItem(THEME_KEY, nextTheme);
  applyTheme(nextTheme);
}

applyTheme(getSavedTheme());

if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}
