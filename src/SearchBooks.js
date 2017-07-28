import React, { Component } from 'react';
import './App.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    // BooksAPI.search(query, 20).then(res => console.log(res.map((book)))
  }

  // componentDidMount() {
  //   BooksAPI.getAll().then((books) => {
  //     this.setState({ books })
  //   })
  // }
  //
  // export const search = (query, maxResults) =>
  //   fetch(`${api}/search`, {
  //     method: 'POST',
  //     headers: {
  //       ...headers,
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ query, maxResults })
  //   }).then(res => res.json())
  //     .then(data => data.books)

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <li></li>
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
