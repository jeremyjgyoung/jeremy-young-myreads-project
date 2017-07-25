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

  shelfChange = (event) => {
    this.setState({value: event.target.value})
    alert(this.state.value)
  }

  // handleChange = (event) => {
  //   this.setState({value: event.target.value})
  //   alert('The new shelf is: ' + this.state.value)
  // }

  render() {
    return (
        <div className="app">
          <Route exact path='/' render={() => (
              <ListBooks
                books={this.state.books}
                onshelfChange = {this.shelfChange}
                // onHandleChange={this.handleChange}
              />
            )}/>
          <Route path="/search" component={SearchBooks}/>
        </div>
    )
  }
}

export default BooksApp
