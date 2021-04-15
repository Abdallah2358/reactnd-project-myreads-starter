import React, { Component } from 'react';
import Book from './Book'
class ListBooks extends Component {
    
    render() {
        return (
            <div className="list-books">
       

                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.Books.currentlyReading.map(
                                        (book)=>(
                                            <li key = {book.id}>
                                                 <Book bookAuthor = {book.authors[0]} bookTitle = {book.title}  bookURL = {`url(${book.imageLinks.thumbnail})`} />
                                            </li>
                                        )
                                    )}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                {this.props.Books.wantToRead.map(
                                        (book)=>(
                                            <li key = {book.id}>
                                                 <Book bookAuthor = {book.authors[0]} bookTitle = {book.title}  bookURL = {`url(${book.imageLinks.thumbnail})`} />
                                            </li>
                                        )
                                    )}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                {this.props.Books.read.map(
                                        (book)=>(
                                            <li key = {book.id}>
                                                 <Book bookAuthor = {book.authors[0]} bookTitle = {book.title}  bookURL = {`url(${book.imageLinks.thumbnail})`} />
                                            </li>
                                        )
                                    )}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <button onClick={this.props.addBook}>Add a book</button>
                </div>

            </div>

        )
    }
}

export default ListBooks;
