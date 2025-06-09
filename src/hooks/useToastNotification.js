import React from 'react'
import { toast } from 'react-toastify';

const useToastNotification = () => {
    const showError = (message, time = 6000) => {
        if (typeof message === 'object') {
            message = message.text
        }
        toast.error(message, {
            position: "top-center",
            autoClose: time,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        // toast.current.show({ severity: 'error', detail: error.text, life: 6000 });
    }
    const showSuccess = (message, time = 6000) => {
        console.log('....',message)
        if (typeof message === 'object') {
            message = message.text
        }
        toast.success(message, {
            position: "top-center",
            autoClose: time,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    const showWarning = (message, time) => {
        if (typeof message === 'object') {
            message = message.text
        }
        toast.warning(message, {
            position: "top-center",
            autoClose: time,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return { showError, showSuccess, showWarning };
}

export default useToastNotification
