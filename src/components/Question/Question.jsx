import React from 'react';

const Question = ({ quest , index }) => {

    const { options, id, question, correctAnswer } = quest;
    return (
        <div class="bg-white rounded-lg shadow-md p-6">
            <p class="mb-4">Quiz {index + 1}: {question}</p>
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