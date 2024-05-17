import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import { BASE_URI } from '../../config/app_uri';
import styles from './Style';

let bookObj = {
  title: "",
  author: "",
  publishedYear: ""
}

const BookDetails = ({ navigate }) => {
  const [book, setBook] = useState(bookObj);
  const { id } = useParams();
  const [pageLoader, setPageLoader] = useState(true);

  useEffect(() => {
    fetchBook(id);
  }, [id]);

  const fetchBook = async (id) => {
    try {
      const responseData = await axios.get(`${BASE_URI}books/get-book/${id}`);
      console.log("responseData", responseData);
      if (responseData.data.statusCode === 200) {
        setBook(responseData.data.response);
      } else {
        toast.warn(responseData.data.message);
      }
      setPageLoader(false);
    } catch (error) {
      console.error('Error fetching book:', error);
      // Handle error here
    }
  };

  const onUpdateBook = async (e) => {
    console.log("reqDatatat---", id)
    e.preventDefault();

    let reqData = {
      title: book.title,
      author: book.author,
      publishedYear: book.publishedYear
    };
    // setPageLoader(true);
    try {
      const responseData = await axios.put(`${BASE_URI}books/update-book/${id}`, reqData);
      console.log("responseData", responseData);
      if (responseData && responseData.data) {
        if (responseData.data.statusCode === 200) {
          toast.success(responseData.data.message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          navigate("/");
        } else {
          toast.warn(responseData.data.message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
    } catch (error) {
      console.error('Error Updating book:', error);
      toast.error('Failed to Update book');
    } finally {
      // setPageLoader(false);
    }
  }

  const onChangeTitle = (e) => {
    const newBook = { ...book, title: e.target.value };
    setBook(newBook);
  };

  const onChangeAuthor = (e) => {
    const newBook = { ...book, author: e.target.value };
    setBook(newBook);
  }

  const onChangePublishedYear = (e) => {
    const newBook = { ...book, publishedYear: e.target.value };
    setBook(newBook);
  }

  const onNavigateToDashboard = () => {
    navigate("/");
  }

  return (
    <div className="all-books-container" style={styles.mainContainer}>
      <img src='/bookshelf-logo.png' alt='Bookshelf-Logo' style={styles.logoImg} />
      <h1 style={styles.pageTitle}>Welcome to your Bookshelf</h1>
      <h1 style={styles.pageSubTitle}>Browse your book - gain knowledge</h1>
      {pageLoader ? (
        <div style={styles.loaderDiv}>
          <DotLoader color="#212121" loading={pageLoader} size={60} />
        </div>
      ) : (
        <div>
          <ToastContainer />
          <div style={styles.cardContainer}>
            <div style={styles.cardSubContainer} >
              <h3 style={styles.cardHeading}>Update Book - {book.title}</h3>
              <div style={styles.inputDiv}>
                <div style={styles.inputBoxDiv}>
                  <label style={styles.inputLabel}>Title:</label>
                  <input
                    type="text"
                    name="title"
                    value={book.title}
                    onChange={onChangeTitle}
                    style={styles.inputBox}
                  />
                </div>
                <div style={styles.inputBoxDiv}>
                  <label style={styles.inputLabel}>Author:</label>
                  <input
                    type="text"
                    name="Author"
                    value={book.author}
                    onChange={onChangeAuthor}
                    style={styles.inputBox}
                  />
                </div>
                <div style={styles.inputBoxDiv}>
                  <label style={styles.inputLabel}>Published Year:</label>
                  <input
                    type="number"
                    name="Published Year"
                    value={book.publishedYear}
                    onChange={onChangePublishedYear}
                    style={styles.inputBox}
                  />
                </div>
              </div>
              <div style={styles.buttonDiv}>
                <button
                  onClick={() => onNavigateToDashboard()}
                  type="submit"
                  style={styles.navigateBtn}
                  onMouseOver={(e) => {
                    e.target.style.background = 'white';
                    e.target.style.color = '#FF4500';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = '#FF4500';
                    e.target.style.color = 'white';
                  }}>Go to Dashboard</button>
                <button
                  onClick={(e) => onUpdateBook(e)}
                  type="submit"
                  style={styles.updateBtn}
                  onMouseOver={(e) => {
                    e.target.style.background = 'white';
                    e.target.style.color = '#FF4500';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = '#1F2B4D';
                    e.target.style.color = 'white';
                  }}>Update Book</button>
              </div>

            </div>
          </div>
        </div>


      )}
    </div>
  );
};

export default BookDetails;
