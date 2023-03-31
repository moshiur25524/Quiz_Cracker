import React from 'react';
import quizImage from '../../assets/jovanas160600377.jpg'

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-4xl font-bold mb-4 text-center lg:text-left lg:mb-8">Example Title</h1>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="lg:w-1/2 lg:mr-8">
                    <img src={quizImage} alt="Example Image" className="w-full mb-4 lg:mb-0" />
                </div>
                <div className="lg:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">Subtitle</h2>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra orci sed nisl
                        venenatis, sit amet mollis odio rhoncus. Mauris vel justo eu augue efficitur volutpat.
                        Donec feugiat massa eu justo semper, at sodales lorem pulvinar. Nulla facilisi. Sed
                        vestibulum, nisi eu maximus ultrices, dolor magna elementum ex, in faucibus lorem felis
                        vel eros.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Button
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;