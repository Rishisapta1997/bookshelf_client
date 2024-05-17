import { toast } from "react-toastify";

export function validateAddBookData(data) {
    let errorCount = 0;

    const toasterWarn = (message) => {
        toast.warn(message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    if (data.title == null || data.title == undefined || data.title.length == 0) {
        toasterWarn('Title is required!');
        errorCount++;
    } else if (data.author == null || data.author == undefined || data.author.length == 0) {
        toasterWarn('Author name is required!');
        errorCount++;
    } else if (data.publishedYear == null || data.publishedYear == undefined || data.publishedYear.length == 0) {
        toasterWarn('Published year id is required!');
        errorCount++;
    }

    if (errorCount == 0) {
        return true;
    } else {
        return false;
    }
}