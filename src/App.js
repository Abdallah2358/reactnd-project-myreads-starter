import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import * as BooksAPI from './BooksAPI';
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
   books : {
    wantToRead : [],
    currentlyReading : [],
    read : [],
},
  }
  componentDidMount() {
    BooksAPI.getAll().then(
      (books)=>{
        const receivedBooks = {wantToRead : [] , currentlyReading : [] , read : []}
      
        books.forEach(book => { 
          if (book.shelf==='wantToRead') {
            receivedBooks.wantToRead = [...receivedBooks.wantToRead,book];
          }else if (book.shelf==='currentlyReading'){
            receivedBooks.currentlyReading = [...receivedBooks.currentlyReading,book];
          }else if (book.shelf==='read'){
            receivedBooks.read = [...receivedBooks.read,book];
          }
        });
        this.setState(
          ()=>({books :receivedBooks})
          
        );
        console.log(books);
      }
    );
  }

  search = () => this.setState({ showSearchPage: true });
  returnFromSearch = () => this.setState({ showSearchPage: false });
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks returnToList = {this.returnFromSearch} />
        ) : (
          <ListBooks Books = {this.state.books} addBook = {this.search}/>
        )}
      </div>
    )
  }
}

export default BooksApp
