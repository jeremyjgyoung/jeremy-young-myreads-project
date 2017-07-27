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

  shelfChange = (book) => {
    // Trying to setState, but book.shelf causes an error
    // this.setState({book.shelf: book.target.value})
    alert(book.target.value)
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            onshelfChange = {this.shelfChange}
          />
        )}/>
        <Route path="/search" component={SearchBooks}/>
      </div>
    )
  }
}

export default BooksApp
