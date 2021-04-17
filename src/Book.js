import React, { Component } from 'react';
import ListOptions from './ListOptions'
class Book extends Component {
    state = { shelf : this.props.shelf }
    render() { 
        const {book , moveBook}=this.props;
        const {shelf}= this.state;
        return ( <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${(book.imageLinks) ? book.imageLinks.smallThumbnail : ''})`}}></div>
            <div className="book-shelf-changer">
                <ListOptions book ={book} shelf = {shelf} moveBook={moveBook}/>
            </div>
        </div>
        <div className="book-title">{(book.title) ? book.title : ''}</div>
        <div className="book-authors">{(book.authors) ? book.authors[0] : ''}</div>
    </div> );
    }
}
export default Book;
 