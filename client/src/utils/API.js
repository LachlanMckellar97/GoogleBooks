import axios from "axios";

export default {
  getGoogleBooks: function (searchterm) {
    const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchterm}&key=${REACT_APP_API_KEY}`);
  },

  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};