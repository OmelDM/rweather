import React from 'react';
import './ErrorMessage.css';

export default function ErrorMessage({errorMessage}) {
    return(
        <div className = 'error'>
            <h1 className = 'error__title'>Error</h1>
            <p>
                {errorMessage}
            </p>
        </div>
    );
};