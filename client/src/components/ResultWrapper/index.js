import React from 'react';
import './style.css';
import SearchResult from '../SearchResult';

function ResultsWrapper(props) {
  
  return (
    <div className="results-wrapper">
      <h3>{props.heading}</h3>
      {props.books.map(item => {return(
        <SearchResult book={item} key={item.image} button={props.button} handleClick={props.handleClick} />
      )})}
    </div>
  )
}

export default ResultsWrapper;