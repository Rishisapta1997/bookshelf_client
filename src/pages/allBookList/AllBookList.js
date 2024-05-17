import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { DotLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URI } from '../../config/app_uri';

const AllBookList = ({ navigate }) => {
    const [allBookArr, setAllBookArr] = useState([]);
    const [pageLoader, setPageLoader] = useState(true);

    useEffect(() => {
        fetchAllBooks();
    }, []);

    const fetchAllBooks = async () => {
        try {
            const response = await axios.get(BASE_URI + 'books/');
            const { data } = response;
            if (data.statusCode === 201) {
                setAllBookArr(data.response);
                // toast.success(data.message);
            } else {
                toast.warn(data.message);
            }
        } catch (error) {
            console.error('Error fetching books:', error);
            toast.error('Failed to fetch books');
        } finally {
            setPageLoader(false);
        }
    };

    const onEditBook = (item) => {
        // Navigate to the details page with item data
        navigate(`/get-book/${item._id}`, { selectedData: item });
    };

    const onDeleteBook = (item) => {

    }

    const onAddBook = () => {
        navigate("/add-book");
    }

    return (
        <div className="all-books-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px',
                    width: '100%', // Ensure it takes the full width of the screen
                    boxSizing: 'border-box'
                }}
            >
                <div>
                    <h1
                        style={{
                            fontSize: '35px',
                            color: '#212121',
                            fontFamily: 'Poppins, Arial, sans-serif',
                            marginBottom: '10px'
                        }}
                    >
                        Welcome to your Bookshelf
                    </h1>
                    <h1
                        style={{
                            fontSize: '15px',
                            color: '#686868',
                            fontFamily: 'Poppins, Arial, sans-serif',
                            marginBottom: '50px'
                        }}
                    >
                        Browse your book - gain knowledge
                    </h1>
                </div>
                <div
                    style={{
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <button
                        onClick={() => onAddBook()}
                        type="submit"
                        style={{
                            background: '#1F2B4D',
                            color: 'white',
                            border: 'none',
                            borderRadius: '20px',
                            width: '200px',
                            height: '100%',
                            fontFamily: 'Poppins, Arial, sans-serif',
                            cursor: 'pointer',
                            fontSize: '18px',
                            transition: 'background 0.3s, color 0.3s'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.background = 'white';
                            e.target.style.color = '#FF4500';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.background = '#1F2B4D';
                            e.target.style.color = 'white';
                        }}
                    >
                        + Add Book
                    </button>
                </div>
            </div>
            {pageLoader ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                    <DotLoader color="#212121" loading={pageLoader} size={60} />
                </div>
            ) : (
                <div>
                    <ToastContainer />
                    {allBookArr && allBookArr.length > 0 ? (
                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
                            {allBookArr.map((item, index) => (
                                <div style={{ border: '1px solid #d3d3d3', borderRadius: '15px', padding: '20px', boxSizing: 'border-box', width: '350px', boxShadow: '8px 8px 8px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor: "#F2F3F4" }} key={index} >
                                    <h3 style={{ fontSize: '25px', color: '#212121', fontFamily: 'Poppins, Arial, sans-serif' }}>{item.title}</h3>
                                    <div style={{ display: 'flex', marginBottom: '0' }}>
                                        <p style={{ fontSize: '17px', color: '#212121', marginRight: '10px', fontFamily: 'Poppins, Arial, sans-serif', fontWeight: 'bold' }}>Author:</p>
                                        <p style={{ fontSize: '17px', color: '#686868', marginBottom: '0', fontFamily: 'Poppins, Arial, sans-serif' }}>{item.author}</p>
                                    </div>
                                    <div style={{ display: 'flex', marginBottom: '10px' }}>
                                        <p style={{ fontSize: '17px', color: '#212121', marginRight: '10px', fontFamily: 'Poppins, Arial, sans-serif', fontWeight: 'bold' }}>Published Year:</p>
                                        <p style={{ fontSize: '17px', color: '#686868', fontFamily: 'Poppins, Arial, sans-serif' }}>{item.publishedYear}</p>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        {/* <div style={{ marginBottom: '10px', height: '20px', width: '100px', borderRadius: '20px', padding: '10px', background: '#FF4500', marginRight: '20px' }}> */}
                                        <button
                                            onClick={() => onDeleteBook(item)}
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
                                            Delete
                                        </button>
                                        {/* </div> */}
                                        {/* <div style={{ marginBottom: '10px', height: '20px', width: '100px', borderRadius: '20px', padding: '10px', background: '#1F2B4D' }}> */}
                                        <button
                                            onClick={() => onEditBook(item)}
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
                                            Edit
                                        </button>
                                        {/* </div> */}

                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <h2 style={{ fontSize: '30px', color: '#212121' }}>No Data Found</h2>
                    )}
                </div>


            )}
        </div>
    );
};

export default AllBookList;
