
function renderBooks(booksArray) {
    if (!booksArray || booksArray.length === 0) {
        bookContainer.innerHTML = '<p>Aradığınız kriterlere uygun kitap bulunamadı.</p>';
        return;
    }

    const html = booksArray.map(book => {
        // Kapak resmi yoksa yedek görsel kullan
        const cover = book.coverImage || 'images/default-book.jpg';

        return `
            <div class="book-card">
                <img src="${cover}" alt="${book.title}">
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
