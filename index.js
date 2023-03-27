function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
 let fetchOne = fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((data) => renderBooks(data));
  return fetchOne;
 
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
    
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

// fetch("https://anapioficeandfire.com/api/books")
//   .then((resp) => resp.json())
//   .then((json) => console.log(json[4].name));

// fetch("https://anapioficeandfire.com/api/books")
//   .then((resp) => resp.json())
//   .then((json) => console.log(json.toString().charAt(1031)));

//   fetch("https://anapioficeandfire.com/api/books")
//   .then((resp) => resp.json())
//   .then((json) => {
//     let totalPages = 0;
//     json.forEach((book) => {
//       totalPages += book.numberOfPages;
//     });
//     console.log(`Total number of pages in all books: ${totalPages}`);
//   });

