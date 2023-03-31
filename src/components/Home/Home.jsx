import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';

const Home = () => {
    return (
        <div>
            <HeroBanner/>
            <h1>Hello World</h1>
            <h2 className="text-3xl font-bold">
                Hello world!
            </h2>
            <button>Buy Now</button>
        </div>
    );
};

export default Home;