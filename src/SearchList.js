import React, { Component } from 'react';
import Book from './Book';
class SearchList extends Component {
    state = { existingBooks: this.props.existingBooks }
    render() {
        const { books, moveBook } = this.props;

        if (books) {
            console.log("THE ERROR" , books);
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
        let shelf = ''
        existingBooks.wantToRead.forEach(boook => {
            if (book.id === boook.id) {
                shelf = 'wantToRead'
                console.log('shelf sent', shelf);
                return shelf;
            }
        });
        existingBooks.currentlyReading.forEach(boook => {
            if (book.id === boook.id) {
                shelf = 'currentlyReading'
                console.log('shelf sent', shelf);
                return shelf;
            }
        });
        existingBooks.read.forEach(boook => {
            if (book.id === boook.id) {
                shelf = 'read'
                console.log('shelf sent', shelf);
                return shelf;
            }
        });
        if (shelf === '') {
            shelf = 'none'
            console.log('shelf sent', shelf);
            return shelf;
        }

    }

}

export default SearchList;