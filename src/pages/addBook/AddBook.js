import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URI } from '../../config/app_uri';
import { validateAddBookData } from './Function';
import styles from './Style';

const AddBook = ({ navigate }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedYear, setPublishedYear] = useState('');
    const [submitLoader, setSubmitLoader] = useState(false);

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const onChangeAuthor = (e) => {
        setAuthor(e.target.value);
    }

    const onChangePublishedYear = (e) => {
        setPublishedYear(e.target.value);
    }

    const onAddBook = async (e) => {
        e.preventDefault();

        const reqData = {
            title: title,
            author: author,
            publishedYear: publishedYear
        };

        let validateData = validateAddBookData(reqData);
        setSubmitLoader(true);
        if (validateData) {
            try {
                const responseData = await axios.post(BASE_URI + 'books/add-book', reqData);
                console.log("responseData", responseData);
                if (responseData && responseData.data) {
                    if (responseData.data.statusCode === 201) {
                        toast.success(responseData.data.message, {
                            position: "top-center",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
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
                console.error('Error adding book:', error);
                toast.error('Failed to add book');
            } finally {
                setSubmitLoader(false);
            }
        }
    }

    const onNavigateToDashboard = () => {
        navigate("/");
    }

    return (
        <div className="all-books-container" style={styles.mainDivContainer}>
            <img src='/bookshelf-logo.png' alt='Bookshelf-Logo' style={styles.logoImg} />
            <h1 style={styles.pageTitle}>Welcome to your Bookshelf</h1>
            <h1 style={styles.pageSubTitle}>Browse your book - gain knowledge</h1>
            <ToastContainer />
            <div style={styles.cardContainer}>
                <div style={styles.cardSubContainer} >
                    <h3 style={styles.cardHeading}>Add a book</h3>
                    <div style={styles.inputDiv}>
                        <div style={styles.inputBoxDiv}>
                            <label style={styles.inputLabel}>Title:</label>
                            <input type="text" name="title" value={title} onChange={onChangeTitle} style={styles.inputBox} />
                        </div>
                        <div style={styles.inputBoxDiv}>
                            <label style={styles.inputLabel}>Author:</label>
                            <input type="text" name="Author" value={author} onChange={onChangeAuthor} style={styles.inputBox} />
                        </div>
                        <div style={styles.inputBoxDiv}>
                            <label style={styles.inputLabel}>Published Year:</label>
                            <input type="number" name="Published Year" value={publishedYear} onChange={onChangePublishedYear} style={styles.inputBox} />
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
                            }}
                        >Go to Dashboard</button>
                        <button
                            onClick={(e) => onAddBook(e)}
                            type="submit"
                            style={styles.addBtn}
                            onMouseOver={(e) => {
                                e.target.style.background = 'white';
                                e.target.style.color = '#FF4500';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.background = '#1F2B4D';
                                e.target.style.color = 'white';
                            }}
                        >Add Book</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBook;
