const bookForm = document.getElementById("bookForm");
const message = document.getElementById("message");
const yearInput = document.getElementById("year");

// max yıl ayarlama
yearInput.max = new Date().getFullYear();

bookForm.addEventListener("submit", function (event) {
    event.preventDefault(); // sayfa yenilenmesini durduruyo

    const formData = new FormData(bookForm); 

    const newBook = {
        title: formData.get("title").trim(),
        author: formData.get("author").trim(),
        year: Number(formData.get("year")),
        genre: formData.get("genre"),
        pageCount: Number(formData.get("pageCount")),
        status: formData.get("status"),
        description: formData.get("description").trim(),
        coverImage: formData.get("coverImage").trim()
    };

    addBook(newBook);

    message.textContent = "Kitap başarıyla eklendi.";
    bookForm.reset();

    setTimeout(function () {
        window.location.href = "index.html";
    }, 1000);
});