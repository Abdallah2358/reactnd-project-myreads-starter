import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router';
class BooksApp extends React.Component {

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    
    books: {
      wantToRead: [],
      currentlyReading: [],
      read: [],
    },
  };


  componentDidMount() {
    BooksAPI.getAll().then(
      (books) => {
        const receivedBooks = { wantToRead: [], currentlyReading: [], read: [] }
        books.forEach(book => {
          receivedBooks[book.shelf] = [...receivedBooks[book.shelf], book];
        });
        this.setState(
          () => ({ books: receivedBooks })
        );
      }
    );
  }
  ;
  moveBook = (movedBook, currentShelf, desiredShelf) => {
    movedBook.shelf = desiredShelf;
    if (movedBook.shelf !== 'none') {
      BooksAPI.update(movedBook, desiredShelf).then(

        (data) => console.log(data)
  
      ).then(
  
        () => {
  
          this.setState((currentState) => {
  
            //create books objects to modifiy since modifing the current state is 
            //bad and bugy 
            const Books = { wantToRead: [], currentlyReading: [], read: [] };
            currentState.books.wantToRead.forEach(book => {
              Books.wantToRead.push(book);
            });;
            currentState.books.currentlyReading.forEach(book => {
              Books.currentlyReading.push(book);
            });;
            currentState.books.read.forEach(book => {
              Books.read.push(book);
            });;
            if (currentShelf && currentShelf !== 'none') {
              Books[currentShelf] = Books[currentShelf].filter(
                (book) => {
                  return book.id !== movedBook.id
                }
              );
            }
  
            Books[desiredShelf] = [...Books[desiredShelf], movedBook]
            console.log('done moving');
            return { books: Books };
          }
          )
  
        }
      )
   
    }
   
  };


  render() {

    return (
      <div className="app">
        
        <Route exact path='/'
          render={
            () => (
              <ListBooks Books={this.state.books} addBook={this.goToSearch} moveBook={this.moveBook} />
            )
          }
        />
        <Route exact path='/search'
          render={
            () => (
              
              <SearchBooks moveBook={this.moveBook} existingBooks={this.state.books} returnToList={this.returnFromSearch} />
            )
          }
        />
      </div>
    )
  }
}

export default BooksApp
