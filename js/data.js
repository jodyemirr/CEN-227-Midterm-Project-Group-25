const INITIAL_BOOKS = [
  {
    id: "b1a2c3-sample-1",
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian",
    pageCount: 328,
    status: "Okundu",
    description: "Büyük Birader'in her şeyi izlediği otoriter bir gelecek tasviri.",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlUp28qO6dWpgmo8FcE6iDUJKyiCigtozP28jwsFg5Vw&s=10"
  },
  {
    id: "b1a2c3-sample-2",
    title: "Simyacı",
    author: "Paulo Coelho",
    year: 1988,
    genre: "Felsefe",
    pageCount: 184,
    status: "Okunuyor",
    description: "Kendi Kişisel Menkıbesini arayan Endülüslü çoban Santiago'nun öyküsü.",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa66XTon3a6Wpr0yKWi3PaPOMjrzyraqOmF8imUiCx-Q&s=10"
  }
];



function getBooks(){
    const data = localStorage.getItem('books');
    if (!data){
        saveBooks(INITIAL_BOOKS);
        return INITIAL_BOOKS;
    }
    return JSON.parse(data);
}

function saveBooks(books){
    const books= getbooks();
    localStorage.setItem('books', JSON.stringify(books));
}

function getBookById(id){
    const books = getBooks();
    return books.find(book => book.id === id);
}
function addBook(book){
    const books = getBooks();
    const newBook = {
        ...newBookData,
        id:crypto.randomUUID(),
    };

    books.push(newBook);
    saveBooks(books);
    return newBook;
}

function deleteBook(id){
    const books = getBooks();
    const updatedBooks = books.filter(book => book.id !== id);
    saveBooks(updatedBooks);
}

