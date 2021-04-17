import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

import SearchList from './SearchList';
import { Link } from 'react-router-dom';

class SearchBooks extends Component {
  state = {
    query: '',
    Queries: [],
    books: [],
    notUpdated: true,
    existingBooksID: {
      wantToRead: [],
      currentlyReading: [],
      read: [],
    }
  }

  componentDidUpdate() {
    if (!this.state.notUpdated) {
      this.searchAPI();
    }
  }



  render() {
    const { query, books, existingBooksID } = this.state;
    const { existingBooks } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              /* updating  the value of the current state.query to the value  entered aka
              the value received from event change 
              */
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              (this.state.query !== '')
              &&
              (<SearchList
                books={books}
                existingBooksID={existingBooksID}
                existingBooks={existingBooks}
                moveBook={this.props.moveBook}
              />)
            }
          </ol>
        </div>
      </div>
    )
  }

  updateQuery = (query) => {
    //updates the state query 
    //remember set state need ()=>({}) not ()=> {} take care 
    this.setState(() => ({
      query: query,
      notUpdated: false,
    }))
  };
  searchAPI() {
    //api call and ui update in search
    BooksAPI.search(this.state.query.trim()).then(
      (Books) => {
        if (!Books.error) {
          //if no error update ui with received books
          this.setState(
            () => ({ books: Books, notUpdated: true })
          );
        } else {
          this.setState(
            //if the text does not match or error receive  clear ui
            () => ({ books: [], notUpdated: true })
          );
        }
      }
    );
  }
}
export default SearchBooks;