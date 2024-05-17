import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { DotLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URI } from '../../config/app_uri';
import styles from './Style';

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

    const onDeleteBook = async (item, index) => {
        try {
            // setPageLoader(true);
            const responseData = await axios.delete(`${BASE_URI}books/delete-book/${item._id}`);
            console.log("responseData", responseData);
            if (responseData && responseData.data) {
                if (responseData.data.statusCode === 200) {
                    const updatedBooks = [...allBookArr];
                    updatedBooks.splice(index, 1);
                    setAllBookArr(updatedBooks);
                    toast.success(responseData.data.message, {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    // navigate("/");
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

    const onAddBook = () => {
        navigate("/add-book");
    }

    return (
        <div className="all-books-container" style={styles.mainContainer}>
            <div style={styles.subMainContainer}>
                <div>
                    <div style={styles.mainHeadingDiv}>
                        <img src='/bookshelf-logo.png' alt='Bookshelf-Logo' style={styles.logoImg} />
                        <div style={{ marginLeft: '20px' }}>
                            <h1 style={styles.pageTitle}>Welcome to your Bookshelf</h1>
                            <h1 style={styles.pageSubTitle}>Browse your book - gain knowledge</h1>
                        </div>
                    </div>
                </div>
                <div style={styles.addBtnDiv}>
                    <button
                        onClick={() => onAddBook()}
                        type="submit"
                        style={styles.editBtn}
                        onMouseOver={(e) => {
                            e.target.style.background = 'white';
                            e.target.style.color = '#FF4500';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.background = '#1F2B4D';
                            e.target.style.color = 'white';
                        }}>+ Add Book</button>
                </div>
            </div>
            {pageLoader ? (
                <div style={styles.loaderDiv}>
                    <DotLoader color="#212121" loading={pageLoader} size={60} />
                </div>
            ) : (
                <div>
                    <ToastContainer />
                    {allBookArr && allBookArr.length > 0 ? (
                        <div style={styles.cardContainer}>
                            {allBookArr.map((item, index) => (
                                <div style={styles.cardSubContainer} key={index} >
                                    <h3 style={styles.cardHeading}>{item.title}</h3>
                                    <div style={styles.authorDiv}>
                                        <p style={styles.labelTxt}>Author:</p>
                                        <p style={styles.authorTxt}>{item.author}</p>
                                    </div>
                                    <div style={styles.pyDiv}>
                                        <p style={styles.labelTxt}>Published Year:</p>
                                        <p style={styles.pyTxt}>{item.publishedYear}</p>
                                    </div>
                                    <div style={styles.buttonDiv}>
                                        <button
                                            onClick={() => onDeleteBook(item, index)}
                                            type="submit"
                                            style={styles.deleteBtn}
                                            onMouseOver={(e) => {
                                                e.target.style.background = 'white';
                                                e.target.style.color = '#FF4500';
                                            }}
                                            onMouseOut={(e) => {
                                                e.target.style.background = '#FF4500';
                                                e.target.style.color = 'white';
                                            }}>Delete</button>
                                        <button
                                            onClick={() => onEditBook(item)}
                                            type="submit"
                                            style={styles.editBtn}
                                            onMouseOver={(e) => {
                                                e.target.style.background = 'white';
                                                e.target.style.color = '#FF4500';
                                            }}
                                            onMouseOut={(e) => {
                                                e.target.style.background = '#1F2B4D';
                                                e.target.style.color = 'white';
                                            }}>Edit</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div style={styles.noDataDiv}>
                            <img src="/no-data-found.png" alt="No-Data-Found" style={styles.noDataImg} />
                            <h2 style={styles.noDataTxt}>No Data Found</h2>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AllBookList;
