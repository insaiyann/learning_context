import React, { Component,useContext,useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
import { BookContext } from '../contexts/BookContext';

//this is how we can use multiple contexts in the class components
// class Navbar extends Component {
//    // static contextType = ThemeContext;
//     render() {
//         return (
//             <AuthContext.Consumer>{(authContext) => (
//                 <ThemeContext.Consumer>{(themeContext) => {
//                     const { isLightTheme, light, dark } = themeContext;
//                     const { isAuthenticated, toggleAuth } = authContext;
//                     const theme = isLightTheme ? light : dark;
//                     return (
//                           <nav style={{ background: theme.ui, color: theme.syntax }}>
//                             <h1>Context app</h1>
//                             <div onClick={toggleAuth}>
//                                 {isAuthenticated?'Logged in!':'Logged Out!'}
//                             </div>
//                             <ul>
//                                 <li>Home</li>
//                                 <li>About</li>
//                                 <li>Contact</li>
//                             </ul>
//                         </nav>
//                     );
//                 }}</ThemeContext.Consumer>
//             )}</AuthContext.Consumer>
//    );
// }
// } 
const Navbar =()=>{
    const {books}=useContext(BookContext);
    return (
            <nav>
            <h1>The Best BookList</h1>
            <p>Currently you have to read {books.length} books...</p>
        </nav>
    );
}
 
export default Navbar ;