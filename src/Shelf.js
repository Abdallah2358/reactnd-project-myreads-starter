import React from 'react';
import Book from './Book';
const Shelf = (props) => {
 //   console.log('in shelf' ,props.Books);
    if (props.Books) {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{props.shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {props.Books.map(
                            (book) => (
                                <li key={book.id}>

                                    <Book book={book} shelf={book.shelf} moveBook ={props.moveBook} />
                                </li>
                            )
                        )}
                    </ol>
                </div>
            </div>

        )
    }
    return (<div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelfName}</h2>
        <div className="bookshelf-books">
        </div>
    </div>)



};

export default Shelf;