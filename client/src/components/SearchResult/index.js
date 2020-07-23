import React from 'react';
import './style.css';

function SearchResult(props) {
  return (
    <div className="search-result">
 
      <a href={props.book.infolink}>
        <button type="button" className="float-right btn btn-primary">View</button>
      </a>
      
      <button type="button" className="float-right btn btn-info mr-2" onClick={props.button==="Delete" ? () => props.handleClick(props.book._id) : () => {
        console.log(props.book)
        props.handleClick(props.book)}
          }>{props.button}</button>
      <h4>{props.book.title}</h4>
      <h5>{props.book.author.join(", ")}</h5>
      <div className="mt-4 mb-2">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={props.book.image} className="card-img" alt={props.book.title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">{props.book.info}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResult;