import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim().length || !author.trim().length)
            return;
        dispatch({
            type: 'ADD_BOOK',
            book: { title, author }
         });
        setTitle('');
        setAuthor('');  
    }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleTitleChange} type="text" value={title} placeholder="Enter Book name"/>
            <input onChange={handleAuthorChange} type="text" value={author} placeholder="Enter Author name" />
            <button type="submit">add new book</button>
        </form>
    )
}

export default BookForm;