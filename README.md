# Book Explorer

Book Explorer is a Phase 1 capstone project built as a responsive, interactive web application for discovering books. Users can search for books using real data from the Open Library API, view book details in a clean card layout, and save favorite books in the browser for later.

The project brings together the main front-end skills covered in the capstone: semantic HTML, responsive layouts, Tailwind CSS utility classes, custom CSS, JavaScript DOM interaction, asynchronous API requests, ES6 modules, browser storage, and a GitHub-style project workflow.

## Project Purpose

The goal of Book Explorer is to demonstrate how a small front-end application can feel complete without needing a backend. It uses public API data for the main content, JavaScript to control user interactions, and `localStorage` to keep saved books available after a page refresh.

The app is designed around three user actions:

- Search for books by title, author, or topic.
- Review results with cover images, author names, and publish years.
- Add or remove books from a personal favorites list.

## Key Features

- Responsive Home, Favorites, and About pages.
- Mobile-first layout using Tailwind CSS utility classes.
- Book search powered by the Open Library API.
- Dynamic result cards rendered with JavaScript.
- Loading, empty, success, and error feedback states.
- Add and remove favorite books.
- Favorites saved in the browser with `localStorage`.
- Dark and light theme toggle saved with `localStorage`.
- Organized JavaScript files using ES6 modules.
- Capstone planning and GitHub workflow documentation.

## Pages

### Home Page

`index.html` is the main search experience. It contains the navigation, search form, feedback message area, and responsive book results grid. When the page loads, it searches for a default topic so users immediately see book cards.

### Favorites Page

`favorites.html` shows the books saved by the user. It reads the favorites list from `localStorage`, displays saved books in the same card style, and lets users remove books from the list.

### About Page

`about.html` explains the purpose of the project and highlights the main learning outcomes: responsive design, API integration, persistent favorites, and organized JavaScript modules.

## Key Elements Used

### HTML

HTML provides the structure for the multi-page website. Each page includes a shared navigation area, a main content section, and a footer. The project also uses meaningful elements such as `nav`, `main`, `section`, `article`, and `footer` to keep the page structure clear.

### Tailwind CSS

Tailwind CSS is used through the CDN to style most of the interface directly in the HTML. It handles spacing, layout, colors, typography, grids, responsive breakpoints, borders, and hover states.

Examples of Tailwind concepts used in the project:

- Responsive classes such as `sm:`, `lg:`, and `xl:`.
- Grid layouts for book cards.
- Flexbox layouts for navigation and page sections.
- Utility classes for colors, spacing, shadows, and typography.
- Focus and hover styles for better interaction feedback.

### Custom CSS

The `css/styles.css` file adds styles that are easier to manage outside Tailwind utility classes. This includes the loading spinner, book cover image sizing, empty state styling, theme toggle button, line clamping, and dark mode overrides.

### JavaScript

JavaScript controls the interactive behavior of the app. It listens for form submissions, fetches book data, updates the DOM, handles favorite buttons, displays feedback messages, and applies the selected theme.

The project uses ES6 modules so each JavaScript file has a focused responsibility:

- `js/script.js` controls the Home page search experience.
- `js/fetchBooks.js` fetches and formats Open Library results.
- `js/favorites.js` stores, loads, adds, removes, and checks favorite books.
- `js/favoritesPage.js` renders and updates the Favorites page.
- `js/theme.js` manages the dark/light theme toggle.

### Open Library API

Book data comes from the Open Library Search API:

```text
https://openlibrary.org/search.json
```

The app requests a limited set of fields, including book key, title, author name, first publish year, and cover IDs. The response is then converted into a simpler format that the UI can render.

Book cover images come from:

```text
https://covers.openlibrary.org
```

If a book does not have a cover image, the app displays a placeholder image instead.

### Async/Await and Fetch

The project uses `fetch` with `async/await` in `js/fetchBooks.js`. This allows the app to request data from Open Library without refreshing the page. If the request fails, the Home page shows an error message and an empty state.

### DOM Manipulation

The app uses JavaScript to update the page after user actions. Search results and favorite books are rendered into grid containers by building book card markup from data. Feedback text is also updated dynamically so users know whether results are loading, empty, saved, or removed.

### localStorage

The project uses `localStorage` for two browser-based features:

- Favorite books are stored under `book_explorer_favorites_v1`.
- The selected theme is stored under `book_explorer_theme`.

This means saved books and theme choice remain available after the page is refreshed, as long as the user stays in the same browser.

### Responsive Design

The layout is mobile-first and adapts across screen sizes. Book cards stack on smaller screens and expand into multiple columns on larger screens. Navigation, hero sections, forms, and feedback areas also adjust so the app remains usable on mobile, tablet, and desktop.

### Theme Toggle

The app includes a dark/light theme button in the navigation. The selected theme changes the document styling and swaps the theme icon between moon and sun images. The choice is saved in `localStorage`.

## Project Structure

```text
.
|-- about.html
|-- favorites.html
|-- index.html
|-- README.md
|-- css
|   `-- styles.css
|-- img
|   |-- moon.svg
|   `-- sun.svg
`-- js
    |-- favorites.js
    |-- favoritesPage.js
    |-- fetchBooks.js
    |-- script.js
    `-- theme.js
```

## Capstone Checklist

### Learning Outcomes

- [x] Build fully responsive websites using HTML, CSS, and Tailwind.
- [x] Apply JavaScript to handle user interactions and dynamic UI updates.
- [x] Use async JavaScript to fetch and display data from APIs.
- [x] Organize code with ES6 modules for maintainability.
- [x] Simulate GitHub collaboration using task, branch, issue, and PR planning.

### Lab 1: Responsive Multi-Page Layouts with Tailwind

- [x] Homepage includes navbar, hero section, search area, results section, and footer.
- [x] Book results render in a responsive grid.
- [x] Grid adapts across mobile, tablet, and desktop breakpoints.
- [x] Favorites and About pages share the same responsive layout style.

### Lab 2: DOM Interactivity and JavaScript Modules

- [x] Favorites page displays saved books.
- [x] `favorites.js` exports reusable functions for loading, saving, adding, removing, and checking favorites.
- [x] Click events save and remove books dynamically.
- [x] Favorites persist with `localStorage`.

### Lab 3: Async JavaScript and API Integration

- [x] `fetchBooks.js` uses `fetch` with `async/await`.
- [x] Homepage grid is populated with API data.
- [x] Search form supports user-entered book searches.
- [x] Loading spinner, error feedback, and empty states are displayed when appropriate.

### Lab 4: GitHub Collaboration Simulation

- [x] Project tasks are documented.
- [x] Feature branch names are documented.
- [x] Example issue tracking is documented.
- [x] Example pull request flow is documented.

### Final Mini Capstone Requirements

- [x] Browse books fetched from an API.
- [x] Search for books.
- [x] Add and remove favorites.
- [x] Persist favorites in `localStorage`.
- [x] Navigate across Home, Favorites, and About pages.
- [x] Use a responsive, professional interface.

## GitHub Collaboration Simulation

This project includes a simulated GitHub workflow to show how the work could be planned and reviewed in a real team environment.

### Project Board Columns

| Column | Purpose |
| --- | --- |
| Backlog | Ideas and tasks not started yet. |
| Ready | Tasks selected for the current milestone. |
| In Progress | Work currently being developed on a branch. |
| Review | Pull requests waiting for review. |
| Done | Completed and merged work. |

### Example Tasks

| Task | Type | Status |
| --- | --- | --- |
| Build responsive homepage layout | UI | Done |
| Add book results grid | UI | Done |
| Create favorites module | Favorites | Done |
| Persist favorites with localStorage | Favorites | Done |
| Fetch books from Open Library | API | Done |
| Add search form and feedback states | API | Done |
| Polish mobile and desktop interface | UI | Done |

### Suggested Branches

```text
feature/homepage-layout
feature/favorites
feature/api-search
feature/interface-polish
fix/empty-state-feedback
```

### Example Issues

#### Issue 1: Add Responsive Book Cards

Create book cards that work on mobile, tablet, and desktop. Each card should show a cover, title, author, year, and save button.

Labels: `ui`, `responsive`

#### Issue 2: Save Favorites After Refresh

Use `localStorage` so saved books stay available after the page reloads.

Labels: `favorites`, `javascript`

#### Issue 3: Show Feedback While API Results Load

Display a spinner while waiting for Open Library, and show a helpful message when no results are found.

Labels: `api`, `user-experience`

### Example Pull Request Flow

1. Create a feature branch.
2. Make a focused change.
3. Test the affected page in the browser.
4. Open a pull request with a short summary and test notes.
5. Review, update if needed, then merge.

### Example Pull Request Template

```markdown
## Summary

- Added or changed:

## Testing

- [ ] Checked homepage
- [ ] Checked favorites page
- [ ] Checked mobile layout
- [ ] Checked localStorage behavior

## Related Issue

Closes #
```

## How To Open The Project

This is a static front-end project, so it can be opened with any local preview tool or static hosting service.

Recommended options:

- VS Code Live Server.
- GitHub Pages.
- Any static website hosting service.

Open `index.html` first to start from the Home page.

## What I Learned

This capstone shows how separate front-end concepts work together in one project. HTML creates the structure, Tailwind and CSS create the visual experience, JavaScript makes the app interactive, the Open Library API provides real data, and `localStorage` gives the app simple persistence without a database.
