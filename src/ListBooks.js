import React, { Component } from 'react';
import Shelf from './Shelf';
class ListBooks extends Component {

    render() {
   //     console.log('in listbooks',this.props.Books.wantToRead);
        return (
            <div className="list-books">


                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    <div>
                        <Shelf Books={this.props.Books.wantToRead}  shelfName = 'Wanted to read' moveBook = {this.props.moveBook}/>
                        <Shelf Books={this.props.Books.currentlyReading}  shelfName = 'Currently Reading' moveBook = {this.props.moveBook}/>
                        <Shelf Books={this.props.Books.read} shelfName = 'Read' moveBook = {this.props.moveBook}/>
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
