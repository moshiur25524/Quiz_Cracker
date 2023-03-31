import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-gray-700 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Oops! Page not found</h2>
            <p className="text-lg text-gray-700 text-center mb-8">
                The page you are looking for might have been removed or is temporarily unavailable.
            </p>
            <Link
                to='/'
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            >
                Go back home
            </Link>
        </div>
    );
}

export default NotFound;
