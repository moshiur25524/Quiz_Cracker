import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const quiz = useLoaderData();
    const {id, name, total, questions, logo } = quiz.data;
    return (
        <div>
            <h1 className='text-3xl text-pink-500 font-bold'>The Quiz of {name}</h1>
            <div>
                {questions.map((question,index) => <Question
                key={question.id}
                quest = {question}
                index = {index}
                />)}
            </div>
        </div>
    );
};

export default QuizDetails;