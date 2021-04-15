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
    terms: terms
  }

  componentDidUpdate() {
    if (!this.state.notUpdated ) {
    //  console.log( 'query sent ' ,this.state.Queries[0]);
      BooksAPI.search(this.state.Queries[0]).then(
        (bookss) => {
         console.log("from api" ,bookss);
          if (bookss) {
            this.setState(
              () => ({ books: bookss, notUpdated: true })
            );
          }else{
            this.setState(
              () => ({ books: [], notUpdated: true })
            );
          }
       }
      )
    }
  }

  updateQuery = (query) => {
    //remember set state need ()=>({}) not ()=> {} take care 
  
      this.setState(() => ({
        query: query.trim(),
        notUpdated: false,
        Queries: terms.filter(
          (t) => {
            // console.log(t);
            return t.includes(query)
          }
        )
      }))
      
    
  
    
    
  };



  render() {
    const { query, books  } = this.state;
    const {  existingBooks} = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to = '/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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
          {(this.state.query !== '')&& (<SearchList books = {books} existingBooks={existingBooks}  moveBook={this.props.moveBook}/>)}
            
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks;