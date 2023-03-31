import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    return (
        <div>
            <div className=" bg-white rounded-lg shadow-md overflow-hidden">
                <img className="w-full h-48 object-cover" src={logo} alt={name} />
                <div className="px-4 py-2">
                    <h3 className="text-lg font-medium text-gray-800">{name}</h3>
                    <Link to={`/api/quiz/${id}`} className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all">
                        Start Practice
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Quiz;