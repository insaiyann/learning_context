import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
const BookDetails = ({ book }) => {
    const { dispatch } = useContext(BookContext);
    //console.log(book.id);
    return (
        <li key={book.id} onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
        <div className="title">{ book.title}</div>
        <div className="author">{ book.author}</div>
    </li> );
}
 
export default BookDetails;