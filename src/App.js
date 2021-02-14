import React from 'react';
import Navbar from './components/navbar';
import BookList from './components/Booklist';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import BookContextProvider from './contexts/BookContext';
function App() {
  return (
    <div className="App">
      <BookContextProvider>
          <Navbar />
          <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
