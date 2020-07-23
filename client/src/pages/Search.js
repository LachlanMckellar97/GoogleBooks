import React, { useRef, useState, useEffect } from 'react';
import ResultsWrapper from '../components/ResultWrapper';
import API from '../utils/API';


function Search() {
  const [books, setBooks] = useState([]);
  // initialize books on load
  useEffect(() => {
    setBooks([]);
  }, []);

  const queryRef = useRef();
  const runSearch = () => {
    API.getGoogleBooks(queryRef.current.value).then(res => {
      var inc = 0;
      const results = res.data.items.map(item => {
        inc++;
        return ({
          key: inc,
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors,
          info: item.volumeInfo.description,
          image: item.volumeInfo.imageLinks.thumbnail,
          infolink :item.volumeInfo.infoLink
        });
      })
      setBooks(results);
    })
    .catch(err => console.log(err));
  }

  function addBook(data) {
    API.saveBook(data).then(() => {
      console.log("data : " + data);
      console.log("Saved!");
    }).catch(err => {console.log(err)});
  }

  return (
    <div>
      <div className="search-form">
        <h3>Book Search</h3>
        <div className="form-group">
          <label htmlFor="search-input">Book</label>
          <input type="email" className="form-control" id="search-input" aria-describedby="search-input" ref={queryRef}></input>
        </div>
        <button className="btn btn-primary" onClick={() => { runSearch() }}>Submit</button>
      </div>    
      {books.length ? (
              <ResultsWrapper books={books} heading={"Results"} button={"Save"} handleClick={addBook}/>
            ) : (
              <h3 className="mt-3">No Results to Display</h3>
            )}      
    </div>
  )
}

export default Search;