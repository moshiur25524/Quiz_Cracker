import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const quiz = useLoaderData();
    const {id, name, total, questions, logo } = quiz.data;
    return (
        <div>
            <h1 className='text-3xl text-pink-500 font-bold'>The Quiz of {name}</h1>
        </div>
    );
};

export default QuizDetails;