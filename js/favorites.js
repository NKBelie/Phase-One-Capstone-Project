const STORAGE_KEY = 'book_explorer_favorites_v1';

export function loadFavorites() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch (e) {
        return [];
    }
}

export function saveFavorites(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list || []));
}

export function addFavorite(book) {
    const list = loadFavorites();
    if (!list.find(b => b.key === book.key)) {
        list.push(book);
        saveFavorites(list);
    }
    return list;
}

export function removeFavorite(key) {
    let list = loadFavorites();
    list = list.filter(b => b.key !== key);
    saveFavorites(list);
    return list;
}

export function isFavorite(key) {
    return loadFavorites().some(b => b.key === key);
}
