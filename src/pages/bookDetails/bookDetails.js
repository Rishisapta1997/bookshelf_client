import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URI } from '../../config/app_uri';

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchBook(id);
  }, [id]);

  const fetchBook = async (id) => {
    try {
      const responseData = await axios.get(`${BASE_URI}books/get-book/${id}`);
      console.log("responseData", responseData);
      setBook(responseData.data.response);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching book:', error);
      // Handle error here
    }
  };

  return (
    <div>
      <h1>Book Detail</h1>
      {loading ? (
        <p>Loading...</p>
      ) : book ? (
        <div>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Published Year: {book.publishedYear}</p>
          {/* Display other book details as needed */}
        </div>
      ) : (
        <p>No book found</p>
      )}
    </div>
  );
};

export default BookDetails;
