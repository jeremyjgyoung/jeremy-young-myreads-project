import React from 'react'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    screen: 'list' //list, search
  }

  render() {
    return (
      <div className="app">
        {this.state.screen === 'list' && (
          <ListBooks
            onNavigateToSearch={() => this.setState({ screen: 'search' })}
          />
        )}
        {this.state.screen === 'search' && (
          <SearchBooks
            onNavigateToList={() => this.setState({ screen: 'list' })}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
