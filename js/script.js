import { fetchBooks } from './fetchBooks.js';
import { addFavorite, removeFavorite, isFavorite } from './favorites.js';

const bookGrid = document.getElementById('book-grid');
const feedback = document.getElementById('feedback');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const quickSearchButtons = document.querySelectorAll('.quick-search');

let currentBooks = [];
let currentSearch = 'bestsellers';
const searchCache = {};

function showMessage(message) {
  feedback.textContent = message;
}

function getButtonStyle(bookKey) {
  if (isFavorite(bookKey)) {
    return 'border border-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100';
  }

  return 'bg-teal-700 text-white hover:bg-teal-800';
}

function getButtonText(bookKey) {
  return isFavorite(bookKey) ? 'Remove Favorite' : 'Add Favorite';
}

function bookCard(book) {
  return `
    <article class="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <img class="card-img rounded-md border border-slate-100" src="${book.cover}" alt="${book.title} cover" loading="lazy">
      <div class="flex flex-1 flex-col gap-3 pt-4">
        <h3 class="line-clamp-2 min-h-[3.25rem] text-base font-bold leading-6 text-slate-950">${book.title}</h3>
        <div class="space-y-1 text-sm text-slate-600">
          <p class="line-clamp-2">${book.author}</p>
          <p class="text-slate-500">${book.year}</p>
        </div>
        <button data-key="${book.key}" class="mt-auto inline-flex h-10 items-center justify-center rounded-lg px-4 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-teal-100 ${getButtonStyle(book.key)}">
          ${getButtonText(book.key)}
        </button>
      </div>
    </article>
  `;
}

function showEmptyState(message) {
  bookGrid.innerHTML = `
    <div class="empty-state col-span-full">
      <h3 class="text-lg font-bold text-slate-950">No books to show</h3>
      <p class="mt-2 text-sm text-slate-600">${message}</p>
    </div>
  `;
}

function displayBooks(books) {
  if (books.length === 0) {
    showMessage(`No results found for "${currentSearch}".`);
    showEmptyState('Try another title, author, or subject.');
    return;
  }

  showMessage(`Showing ${books.length} results for "${currentSearch}".`);
  bookGrid.innerHTML = books.map(bookCard).join('');
}

async function searchBooks(searchTerm) {
  const cleanSearchTerm = searchTerm.toLowerCase();

  currentSearch = cleanSearchTerm;

  if (searchCache[cleanSearchTerm]) {
    currentBooks = searchCache[cleanSearchTerm];
    displayBooks(currentBooks);
    return;
  }

  showMessage('Loading books...');
  bookGrid.innerHTML = '<div class="col-span-full flex justify-center py-12"><div class="spinner"></div></div>';

  try {
    currentBooks = await fetchBooks(cleanSearchTerm);
    searchCache[cleanSearchTerm] = currentBooks;
    displayBooks(currentBooks);
  } catch (error) {
    showMessage('Something went wrong. Please try again.');
    showEmptyState('Check your internet connection and search again.');
  }
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const searchTerm = searchInput.value.trim();

  if (searchTerm === '') {
    showMessage('Please type a book title, author, or topic.');
    return;
  }

  searchBooks(searchTerm);
});

quickSearchButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const searchTerm = button.dataset.search;
    searchInput.value = searchTerm;
    searchBooks(searchTerm);
  });
});

bookGrid.addEventListener('click', (event) => {
  const button = event.target.closest('button');

  if (!button) return;

  const book = currentBooks.find((item) => item.key === button.dataset.key);

  if (!book) return;

  if (isFavorite(book.key)) {
    removeFavorite(book.key);
    alert(`Removed "${book.title}" from favorites.`);
  } else {
    addFavorite(book);
    alert(`Added "${book.title}" to favorites.`);
  }

  displayBooks(currentBooks);
});

searchBooks(currentSearch);
