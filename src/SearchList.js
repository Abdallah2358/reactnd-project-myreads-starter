import React, { Component } from 'react';
import Book from './Book';
class SearchList extends Component {
    state = { existingBooks: this.props.existingBooks }
    render() {
        const { books, moveBook } = this.props;
        if (books) {
            console.log("THE ERROR", books);
            return (books.map(
                (book) => {

                    return (
                        <li key={book.id}>
                            <Book book={book} moveBook={moveBook} shelf={this.chooseBookShelf(book)} />
                        </li>
                    )
                }
            ));
        }

    }

    chooseBookShelf(book) {
        const { existingBooks } = this.state;
        for (const boook of existingBooks.wantToRead) {
            if (book.id === boook.id)
                return 'wantToRead';
        }
        for (const boook of existingBooks.currentlyReading) {
            if (book.id === boook.id)
                return 'currentlyReading';
        }
        for (const boook of existingBooks.read) {
            if (book.id === boook.id)
                return 'read';
        }
        return 'none';
    }
    choseBookself(book) {
        //same as above just practicing .foreach
        const { existingBooks } = this.state;
        let shelf = '';
        existingBooks.wantToRead.forEach(boook => {
            if (book.id === boook.id)
                return shelf = 'wantToRead';
        });
        existingBooks.currentlyReading.forEach(boook => {
            if (book.id === boook.id)
                return shelf = 'currentlyReading';
        });
        existingBooks.read.forEach(
            boook => {
            if (book.id === boook.id)
                return shelf = 'read';
        });
        if (shelf !== '') {
            return shelf;
        } else {
            return 'none';
        }
    }
}

export default SearchList;