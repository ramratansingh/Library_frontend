import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserCatalog = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get('/api/books');
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Library Catalog</h2>
      <ul>
        {books.map(book => (
          <li key={book._id}>{book.name} by {book.author} - {book.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserCatalog;
