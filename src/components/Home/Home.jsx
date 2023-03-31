import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const Allquiz = useLoaderData()
    return (
        <div>
            <HeroBanner />
            <div className='home'>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                    {Allquiz.data.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    />)}
                </div>
            </div>

        </div>
    );
};

export default Home;