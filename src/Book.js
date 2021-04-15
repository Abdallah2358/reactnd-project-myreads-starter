import React from 'react';
import ListOptions from './ListOptions'
const Book = (props) => (
    <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: props.bookURL}}></div>
            <div className="book-shelf-changer">
                <ListOptions/>
            </div>
        </div>
        <div className="book-title">{props.bookTitle}</div>
        <div className="book-authors">{props.bookAuthor}</div>
    </div>
)
export default Book ;