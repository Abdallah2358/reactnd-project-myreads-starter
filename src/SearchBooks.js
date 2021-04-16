import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import terms from './terms';
import SearchList from './SearchList';
import { Link } from 'react-router-dom';

class SearchBooks extends Component {
  state = {
    query: '',
    Queries: [],
    books: [],
    notUpdated: true,
    terms: terms ,
    existingBooksID:{
      wantToRead: [],
      currentlyReading: [],
      read: [],
    }
  }
  componentDidMount(){
   // this.fillBooksIDs();
  }

 

  componentDidUpdate() {
    if (!this.state.notUpdated) {
      //  console.log( 'query sent ' ,this.state.Queries[0]);
      this.searchAPI();
    }
  }

  updateQuery = (query) => {
    //remember set state need ()=>({}) not ()=> {} take care 

    this.setState(() => ({
      query: query,
      notUpdated: false,
      Queries: terms.filter(
        (t) => {
          // console.log(t);
          return t.includes(query.trim())
        }
      )
    }))
  };




  render() {
    const { query, books ,existingBooksID } = this.state;
    const { existingBooks } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                {console.log('in render searchBooks' ,existingBooks)}
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
            {(this.state.query !== '') && (<SearchList books={books}  existingBooksID ={existingBooksID} existingBooks={existingBooks} moveBook={this.props.moveBook} />)}

          </ol>
        </div>
      </div>
    )
  }



  searchAPI() {
    BooksAPI.search(this.state.Queries[0]).then(
      (bookss) => {
        console.log("from api", bookss);
        if (bookss) {
          this.setState(
            () => ({ books: bookss, notUpdated: true })
          );
        } else {
          this.setState(
            () => ({ books: [], notUpdated: true })
          );
        }
      }
    );
  }

  fillBooksIDs() {
    this.setState(

      (currentState) => {
        const Books = { wantToRead: [], currentlyReading: [], read: [] };
        this.props.existingBooks.wantToRead.forEach(book => {
          if (book.id) {
            Books.wantToRead.id.push(book.id);
          }

        });;
        this.props.existingBooks.currentlyReading.forEach(book => {
          Books.currentlyReading.id.push(book.id);
        });;
        this.props.existingBooks.read.forEach(book => {
          Books.read.id.push(book.id);
        });;
        console.log('books', this.props.existingBooks);
        return ({ existingBooksID: Books });
      }
    );
  }
}

export default SearchBooks;