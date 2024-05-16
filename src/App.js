import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AddBook, AllBookList, BookDetails } from './pages';

function App() {
  const navigate = (path, data) => {
    data = data
    window.location.href = path;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllBookList navigate={navigate} />} />
        <Route path="/add-book" element={<AddBook navigate={navigate} />} />
        <Route path="/get-book/:id" element={<BookDetails navigate={navigate} />} />
        {/* Other routes can be defined here */}
      </Routes>
    </Router>
  );
}

export default App;
