const RESULTS_LIMIT = 12;
const FIELDS = 'key,title,author_name,first_publish_year,cover_i,cover_edition_key,edition_key';

export async function fetchBooks(query = 'bestsellers') {
  const search = encodeURIComponent(query);
  const url = `https://openlibrary.org/search.json?q=${search}&limit=${RESULTS_LIMIT}&fields=${FIELDS}`;
  const result = await fetch(url);

  if (!result.ok) {
    throw new Error('Failed to fetch books');
  }

  const data = await result.json();

  return (data.docs || []).map((item) => ({
    key: item.key || item.cover_edition_key || item.edition_key?.[0] || item.title,
    title: item.title || 'Untitled',
    author: item.author_name?.[0] || 'Unknown author',
    year: item.first_publish_year || 'Year unknown',
    cover: item.cover_i
      ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
      : 'https://placehold.co/360x480/f8fafc/475569?text=No+Cover',
  }));
}
