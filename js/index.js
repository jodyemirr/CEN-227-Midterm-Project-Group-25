const bookContainer = document.getElementById('bookContainer');
const searchInput = document.getElementById('searchInput');
const genreSelect = document.getElementById('genreSelect');

function renderBooks(booksArray) {
    if (!booksArray || booksArray.length === 0) {
        bookContainer.innerHTML = '<p>Aradığınız kriterlere uygun kitap bulunamadı.</p>';
        return;
    }

    const html = booksArray.map(book => {
        const cover = book.coverImage || '[suspicious link removed]';

        return `
            <div>
                <div>
                    <h3>${book.title}</h3>
                    <p><strong>Yazar:</strong> ${book.author}</p>
                    <p><strong>Tür:</strong> ${book.genre}</p>
                    <a href="detail.html?id=${book.id}">Detayları Gör</a>
                </div>
            </div>
        `;
    }).join('');

    bookContainer.innerHTML = html;
}

function applyFilters() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const selectedGenre = genreSelect ? genreSelect.value : 'all';
    const allBooks = getBooks();

    const filteredBooks = allBooks.filter(book => {
        const matchesSearch =
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm);

        const matchesGenre = selectedGenre === 'all' || book.genre === selectedGenre;

        return matchesSearch && matchesGenre;
    });

    renderBooks(filteredBooks);
}

document.addEventListener('DOMContentLoaded', () => {
    applyFilters();

    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }

    if (genreSelect) {
        genreSelect.addEventListener('change', applyFilters);
    }
});