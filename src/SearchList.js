import React from 'react';
import Book from './Book';
const SearchList = (props) => (
    props.books.map(
        (book) => {
            if (props.existingBooks.wantToRead.includes(book)) {
                book.shelf = 'wantToRead';
            } else if (props.existingBooks.currentlyReading.includes(book)) {
                book.shelf = 'currentlyReading';
            } else if (props.existingBooks.read.includes(book)) {
                book.shelf = 'read';
            }else{
                book.shelf = 'none';
            }
            return (
                <li key={book.id}>
                    <Book book={book} moveBook={props.moveBook}  shelf={book.shelf}/>
                </li>
            )
        }
    ))

export default SearchList;