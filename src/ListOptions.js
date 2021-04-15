import React from 'react';

const ListOptions = (props) => (

    <select 
    defaultValue={props.shelf}  
    onChange=
    {
        (e)=>
        {
            props.moveBook(props.book , props.shelf, e.target.value)
        }
    } 
    >
        <option value="move" disabled>Move to...</option>
        <option value="wantToRead">Want to Read</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="read">Read</option>
        <option value="none">None</option>
    </select>
)

export default ListOptions ; 