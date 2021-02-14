import React, { Component,useContext,useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';
import BookForm from './BookForm';
import BookDetails from './BookDetails';

//this is how we use context with the class components

// class BookList extends Component {
//  static contextType = ThemeContext;
//     render() { 
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light :dark;
//         return ( 
//             <div className="book-list" style={{background:theme.bg,color:theme.syntax}}>
//                 <ul>
//                     <li style={{background:theme.ui}}>the immortals of meluha</li>
//                     <li style={{background:theme.ui}}>the secret of the nagas</li>
//                     <li style={{background:theme.ui}}>the oath of the vayuputras</li>
//                 </ul>
//             </div>
//          );
//     }
// }

//this is how we use context with the useContext hook in the functional components.
const BookList = () => {
    const { books } = useContext(BookContext);
    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map((book) => {
                    return (
                        <BookDetails book={book}/>
                    )
                })}
            </ul>
            <BookForm />
        </div>
    ) : (
            <>
            <div className="empty">No books to read,Hello free time</div>   
                <BookForm />  
            </>    
    );
   }
 
export default BookList;