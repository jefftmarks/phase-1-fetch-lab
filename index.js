function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(data => {
    
    let pageArray = [];
    data.forEach((element) => {
      pageArray.push(element.numberOfPages);
    })
    let sum = 0
    for (let i = 0; i < pageArray.length; i++) {
      sum += pageArray[i];
    }
    console.log(pageArray);
    console.log(sum);

    const main = document.querySelector('main');
    data.forEach(element => {
    const h2 = document.createElement('h2');
    h2.innerHTML = `"${element.name}" (page count: ${element.numberOfPages})`;
    main.appendChild(h2);
  });

    let sumText = document.createElement('h2');
    sumText.innerText = `Total Pages: ${sum}`;
    main.appendChild(sumText);
  })
}

// function renderBooks(books) {
//   const main = document.querySelector('main');
//   books.forEach(book => {
//     const h2 = document.createElement('h2');
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//   });
// }



document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
