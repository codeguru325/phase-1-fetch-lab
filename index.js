function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch ('https://anapioficeandfire.com/api/books')
  .then(function(resp){
     return resp.json()
  })
  .then(function(json){
const data = json
//calling the renderBooks function
renderBooks(data)
  })


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
  //You are calling the fetchBook function, that calls the function renderBooks, after fetching the JSON data
  //After renderbooks function is called, data is passed into it as argument for the books parameter
  //You then Iterate through each book accessing its name
  //You then create a h2 element 
  //Using the innerHTML method you add the books name to the h2 element
  //You then append the h2 element to the "main" element
  fetchBooks();
});
