import React, { Component } from 'react';
import './App.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
  /* The prop passed is the
  onShelfChange method to this class to change shelves  */
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  /* Initializing query as an empty string and
  searchResults as an empty array */
  state = {
    query: '',
    searchResults: []
  }

  updateResults = (searchResults) => {
    const booksInLibrary = this.props.books.map(b => b.id)
    searchResults.forEach(book => {
      booksInLibrary.includes(book.id) && (
        book.shelf = this.props.books.filter(b => b.id === book.id)[0].shelf
      )
    })
    this.setState({searchResults: searchResults})
  }

  searchBooks = (query) => {
    this.setState({ query: query.trim() })
    BooksAPI.search(query.trim(), 20).then(this.updateResults)
  }

  render() {
    return (
      // This renders the search bar and calls searchBooks when the user types into the field
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.searchBooks(event.target.value)}
            />
          </div>
        </div>
        {/* This renders the book UI, which includes book images, titles, and authors */}
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResults.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                      <select value={book.shelf} onChange={(event) => this.props.onShelfChange(book, event)}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
