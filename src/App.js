import React, { Component } from 'react'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'

class BooksApp extends Component {
  //Initializing the books array
  state = {
    books: []
  }
  
  // This fills the array of books
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  // shelfChange method allows a dropdown to change the shelf property on a specific book
  shelfChange = (book, event) => {
    BooksAPI.update(book, event.target.value).then((book) => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    })
  }

  render() {
    return (
      // Rendering the view of three shelves of books from our ListView
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            onShelfChange={this.shelfChange}
          />
        )}/>
        {/* Rendering the view of search from SearchBooks */}
        <Route path='/search' render={() => (
          <SearchBooks
            onShelfChange={this.shelfChange}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
