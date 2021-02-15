import React, { createContext,useReducer,useEffect } from 'react';
import BookReducer from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(BookReducer, [], () => {       //the 3rd parameter used must be a function which returns a value that will be taken as the default value
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    },[books]);
    return (
        <BookContext.Provider value={{ books,dispatch}}>
        {props.children}
        </BookContext.Provider>
    )
}
export default BookContextProvider;