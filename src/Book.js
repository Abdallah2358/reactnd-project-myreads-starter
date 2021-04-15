import React from 'react';
import ListOptions from './ListOptions'
const Book = (props) => (
    <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${(props.book.imageLinks) ? props.book.imageLinks.smallThumbnail : ''})`}}></div>
            <div className="book-shelf-changer">
                <ListOptions book ={props.book} shelf = {props.shelf} moveBook={props.moveBook}/>
            </div>
        </div>
        <div className="book-title">{(props.book.title) ? props.book.title : ''}</div>
        <div className="book-authors">{(props.book.authors) ? props.book.authors[0] : ''}</div>
    </div>
)
export default Book ;