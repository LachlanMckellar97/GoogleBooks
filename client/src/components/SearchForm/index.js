import React, { useRef, useState } from 'react';
import './style.css';
import '../../utils/API'
import API from '../../utils/API';

function SearchForm() {
  const [books, setBooks] = useState([])

  const queryRef = useRef();
  const runSearch = () => {
    API.getGoogleBooks(queryRef.current.value).then(res => setBooks(res));
  }

  return (
    <div className="search-form">
      <h3>Book Search</h3>
        <div className="form-group">
          <label htmlFor="search-input">Book</label>
          <input type="email" className="form-control" id="search-input" aria-describedby="search-input" ref={queryRef}></input>
        </div>
        <button className="btn btn-primary" onClick={() => {runSearch()}}>Submit</button>
    </div>
  )
}

export default SearchForm;