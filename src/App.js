import React, { Component } from 'react'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  shelfChange = (book, event) => {
    BooksAPI.update(book, event.target.value).then((book) => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    })
  }

  // searchBooks = (query) => {
  //   this.setState({ query: query.trim() })
  //   BooksAPI.search(query, 20).then(res => console.log(res))
  // }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            onShelfChange={this.shelfChange}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks
            books={this.state.books}
            // onSearchBooks={this.searchBooks}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
