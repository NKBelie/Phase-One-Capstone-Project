import { loadFavorites, removeFavorite } from './favorites.js';

const favoritesGrid = document.getElementById('favorites-grid');
const feedback = document.getElementById('favorites-feedback');

function showMessage(message) {
  feedback.textContent = message;
}

function favoriteCard(book) {
  return `
    <article class="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <img class="card-img rounded-md border border-slate-100" src="${book.cover}" alt="${book.title} cover">
      <div class="flex flex-1 flex-col gap-3 pt-4">
        <h3 class="line-clamp-2 min-h-[3.25rem] text-base font-bold leading-6 text-slate-950">${book.title}</h3>
        <div class="space-y-1 text-sm text-slate-600">
          <p class="line-clamp-2">${book.author || 'Unknown author'}</p>
          <p class="text-slate-500">${book.year || 'Year unknown'}</p>
        </div>
        <button data-key="${book.key}" class="mt-auto inline-flex h-10 items-center justify-center rounded-lg border border-red-200 bg-red-50 px-4 text-sm font-semibold text-red-700 transition hover:bg-red-100 focus:outline-none focus:ring-4 focus:ring-red-100">
          Remove
        </button>
      </div>
    </article>
  `;
}

function showEmptyState() {
  favoritesGrid.innerHTML = `
    <div class="empty-state col-span-full">
      <h3 class="text-lg font-bold text-slate-950">No favorites yet</h3>
      <p class="mt-2 text-sm text-slate-600">Search for books on the Home page and save the ones you want to revisit.</p>
      <a href="index.html" class="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-teal-700 px-4 text-sm font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-100">Browse books</a>
    </div>
  `;
}

function displayFavorites() {
  const favorites = loadFavorites();

  if (favorites.length === 0) {
    showMessage('0 saved books');
    showEmptyState();
    return;
  }

  showMessage(`${favorites.length} saved ${favorites.length === 1 ? 'book' : 'books'}`);
  favoritesGrid.innerHTML = favorites.map(favoriteCard).join('');
}

favoritesGrid.addEventListener('click', (event) => {
  const button = event.target.closest('button');

  if (!button) return;

  removeFavorite(button.dataset.key);
  displayFavorites();
});

displayFavorites();
