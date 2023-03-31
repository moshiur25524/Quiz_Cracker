import React from 'react';
import elon from '../../assets/elon-musk-rt-gmh-230207_1675807984906_hpMain_4x5_992.jpg'
import steve from '../../assets/steve.jpg'

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-700 mb-4">About Quiz Cracker</h1>
                <p className="text-lg text-gray-700 mb-8">
                    Quiz Cracker is an online quiz platform that allows you to create, share, and take quizzes with your friends and colleagues. With Quiz Cracker, you can easily create multiple choice quizzes, set time limits, and track your scores.
                </p>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-8">
                    Our mission is to make learning and testing fun and engaging. We believe that quizzes can be a powerful tool for learning and we want to make it easy for everyone to create and take quizzes online.
                </p>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Meet the Team</h2>
                <div className="grid grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <img src={elon} alt="Team Member" className="rounded-full w-32 h-32 mb-4 mx-auto" />
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Elon Musk</h3>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod faucibus mi a consectetur. </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <img src={steve} alt="Team Member" className="rounded-full w-32 h-32 mb-4 mx-auto" />
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Steve</h3>
                        <p className="text-gray-700">Suspendisse potenti. Vestibulum bibendum laoreet ex, quis iaculis enim pellentesque a. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
