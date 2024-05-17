import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URI } from '../../config/app_uri';
import { ToastContainer, toast } from 'react-toastify';
import { DotLoader } from 'react-spinners';

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

  const onUpdateBook = () => {
    navigate("/");
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
    <div className="all-books-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <h1 style={{ fontSize: '35px', color: '#212121', fontFamily: 'Poppins, Arial, sans-serif', marginBottom: '10px' }}>Welcome to your Bookshelf</h1>
      <h1 style={{ fontSize: '15px', color: '#686868', fontFamily: 'Poppins, Arial, sans-serif', marginBottom: '50px' }}>Browse your book - gain knowledge</h1>
      {pageLoader ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <DotLoader color="#212121" loading={pageLoader} size={60} />
        </div>
      ) : (
        <div>
          <ToastContainer />
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ border: '1px solid #d3d3d3', borderRadius: '15px', padding: '20px', boxSizing: 'border-box', width: '500px', boxShadow: '8px 8px 8px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor: "#F2F3F4" }} >
              <h3 style={{ fontSize: '25px', color: '#212121', fontFamily: 'Poppins, Arial, sans-serif' }}>Update Book - {book.title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '15px', alignItems: 'flex-start', justifyContent: 'flex-start', display: 'flex', flexDirection: 'column' }}>
                  <label style={{ fontSize: '17px', color: '#212121', marginRight: '10px', fontFamily: 'Poppins, Arial, sans-serif', fontWeight: 'bold', marginBottom: '10px', marginLeft: '10px' }}>Title:</label>
                  <input
                    type="text"
                    name="title"
                    value={book.title}
                    onChange={onChangeTitle}
                    style={{
                      padding: '10px',
                      borderRadius: '25px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      border: '1px solid #d3d3d3',
                      fontFamily: 'Poppins, Arial, sans-serif',
                      fontSize: '17px',
                      width: '100%', // Adjust the width as necessary
                      boxSizing: 'border-box', // Ensure padding and border are included in the element's total width and height
                      outline: 'none',
                      width: '400px'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '15px', alignItems: 'flex-start', justifyContent: 'flex-start', display: 'flex', flexDirection: 'column' }}>
                  <label style={{ fontSize: '17px', color: '#212121', marginRight: '10px', fontFamily: 'Poppins, Arial, sans-serif', fontWeight: 'bold', marginBottom: '10px', marginLeft: '10px' }}>Author:</label>
                  <input
                    type="text"
                    name="Author"
                    value={book.author}
                    onChange={onChangeAuthor}
                    style={{
                      padding: '10px',
                      borderRadius: '25px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      border: '1px solid #d3d3d3',
                      fontFamily: 'Poppins, Arial, sans-serif',
                      fontSize: '17px',
                      width: '100%', // Adjust the width as necessary
                      boxSizing: 'border-box', // Ensure padding and border are included in the element's total width and height
                      outline: 'none',
                      width: '400px'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '15px', alignItems: 'flex-start', justifyContent: 'flex-start', display: 'flex', flexDirection: 'column' }}>
                  <label style={{ fontSize: '17px', color: '#212121', marginRight: '10px', fontFamily: 'Poppins, Arial, sans-serif', fontWeight: 'bold', marginBottom: '10px', marginLeft: '10px' }}>Published Year:</label>
                  <input
                    type="number"
                    name="Published Year"
                    value={book.publishedYear}
                    onChange={onChangePublishedYear}
                    style={{
                      padding: '10px',
                      borderRadius: '25px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      border: '1px solid #d3d3d3',
                      fontFamily: 'Poppins, Arial, sans-serif',
                      fontSize: '17px',
                      width: '100%', // Adjust the width as necessary
                      boxSizing: 'border-box', // Ensure padding and border are included in the element's total width and height
                      outline: 'none',
                      width: '400px'
                    }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', marginTop: '15px', marginBottom: '15px' }}>
                {/* <div style={{ marginBottom: '10px', height: '20px', width: '100px', borderRadius: '20px', padding: '10px', background: '#FF4500', marginRight: '20px' }}> */}
                <button
                  onClick={() => onNavigateToDashboard()}
                  type="submit"
                  style={{ background: '#FF4500', color: 'white', border: 'none', borderRadius: '20px', width: '150px', height: '35px', fontFamily: 'Poppins, Arial, sans-serif', cursor: 'pointer', fontSize: '15px', marginRight: '10px' }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'white';
                    e.target.style.color = '#FF4500';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = '#FF4500';
                    e.target.style.color = 'white';
                  }}
                >
                  Go to Dashboard
                </button>
                {/* </div> */}
                {/* <div style={{ marginBottom: '10px', height: '20px', width: '100px', borderRadius: '20px', padding: '10px', background: '#1F2B4D' }}> */}
                <button
                  onClick={() => onUpdateBook()}
                  type="submit"
                  style={{ background: '#1F2B4D', color: 'white', border: 'none', borderRadius: '20px', width: '150px', height: '35px', fontFamily: 'Poppins, Arial, sans-serif', cursor: 'pointer', fontSize: '15px', marginLeft: '10px' }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'white';
                    e.target.style.color = '#FF4500';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = '#1F2B4D';
                    e.target.style.color = 'white';
                  }}
                >
                  Update Book
                </button>
                {/* </div> */}

              </div>

            </div>
          </div>
        </div>


      )}
    </div>
  );
};

export default BookDetails;
