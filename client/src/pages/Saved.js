import React, { useState, useEffect } from 'react';
import ResultsWrapper from '../components/ResultWrapper';
import API from '../utils/API';


function Saved() {
  const [books, setBooks] = useState([]);
  // initialize books on load
  useEffect(() => {
    loadBooks();
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => {
        setBooks(res.data)}
      )
      .catch(err => console.log(err));
  };

  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  return (
    <div>  
      {books.length ? (
              <ResultsWrapper books={books} heading={"Saved Books"} button={"Delete"} handleClick={deleteBook}/>
            ) : (
              <h3 className="mt-3">No saved books yet!</h3>
            )}      
    </div>
  )
}

export default Saved;