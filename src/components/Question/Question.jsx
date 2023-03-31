import React from 'react';
import './Question.css'

const Question = ({ quest, index }) => {

    const { options, id, question, correctAnswer } = quest;
    return (
        <div class="bg-white rounded-lg shadow-md p-6 question">
            <div className='flex justify-between'>
                <div class="text-2xl font-bold text-purple-700 mb-4">Quiz {index + 1}: {question}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>
            <form>
                <div class="flex items-center mb-4 border-purple-400">
                    <input type="radio" id="option1" name="quiz-option" class="mr-2" />
                    <label for="option1">{options[0]}</label>
                </div>
                <div class="flex items-center mb-4 border-purple-400">
                    <input type="radio" id="option2" name="quiz-option" class="mr-2" />
                    <label for="option2">{options[1]}</label>
                </div>
                <div class="flex items-center mb-4 border-purple-400">
                    <input type="radio" id="option3" name="quiz-option" class="mr-2" />
                    <label for="option3">{options[2]}</label>
                </div>
                <div class="flex items-center mb-4 border-purple-400">
                    <input type="radio" id="option4" name="quiz-option" class="mr-2" />
                    <label for="option4">{options[3]}</label>
                </div>
            </form>
        </div>

    );
};

export default Question;