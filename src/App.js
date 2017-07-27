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
    BooksAPI.update(book, event.target.value).then(response => console.log(response))
    // Trying to setState, but book.shelf causes an error
    // this.setState({book.bookshelf: event.target.value})
    // Or Maybe set the new state using update?
    // BooksAPI.update(book, book.shelf)
    // alert(event.target.value)
    // BooksAPI.update(book, event.target.value)
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            onshelfChange={this.shelfChange}
          />
        )}/>
        <Route path="/search" component={SearchBooks}/>
      </div>
    )
  }
}

export default BooksApp
