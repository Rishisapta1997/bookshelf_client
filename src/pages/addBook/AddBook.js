import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URI } from '../../config/app_uri';
import './AddBook.css';

const AddBook = () => {
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

    const onAddBook = async (event) => {
        event.preventDefault();

        const reqData = {
            title: title,
            author: author,
            publishedYear: publishedYear
        };

        setSubmitLoader(true);
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

    return (
        <div className="add-book-container">
            <ToastContainer />
            <h2>Add a Book</h2>
            <form onSubmit={onAddBook}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={onChangeTitle}
                    />
                </div>
                <div>
                    <label>Author:</label>
                    <input
                        type="text"
                        name="author"
                        value={author}
                        onChange={onChangeAuthor}
                    />
                </div>
                <div>
                    <label>Published Year:</label>
                    <input
                        type="text"
                        name="publishedYear"
                        value={publishedYear}
                        onChange={onChangePublishedYear}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddBook;
