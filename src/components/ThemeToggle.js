import React, { Component,useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

//this is how we use context inside a class component, if we only need to use 1 context
// class ThemeToggle extends Component {
//     static contextType = ThemeContext;
//     render() { 
//         const { themeToggle } = this.context;
//         return ( 
//             <button onClick={themeToggle}>Toggle the Theme</button>
//          );
//     }
// }

const ThemeToggle = () => {
    const { themeToggle } = useContext(ThemeContext);
    return (
        <button onClick={themeToggle}>Toggle the theme</button>
    );
}
 
export default ThemeToggle;