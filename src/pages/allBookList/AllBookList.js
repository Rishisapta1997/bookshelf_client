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
                toast.success(data.message);
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

    const onGetBookDetails = (item) => {
        // Navigate to the details page with item data
        navigate(`/get-book/${item._id}`, { selectedData: item });
    };

    return (
        <div className="all-books-container">
            <h1>All Books</h1>
            {pageLoader ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                    <DotLoader color="#212121" loading={pageLoader} size={60} />
                </div>
            ) : (
                <ul>
                    <ToastContainer />
                    {allBookArr.map((item, index) => (
                        <li key={index}>
                            <div to={`/get-book/${item._id}`} >
                                <h3>{item.title}</h3>
                                <p><strong>Author:</strong> {item.author}</p>
                                <p><strong>Published Year:</strong> {item.publishedYear}</p>
                                <button onClick={() => onGetBookDetails(item)} type="submit">See Details</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AllBookList;
