import React from 'react';
import Accordion from '../Accordion/Accordion';

const Blog = () => {

    const questions = [
        {
            title: 'What is the purpose of React Router ?',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sapiente natus magni doloremque consequatur tenetur quia, illum sequi tempora ea!'
        },
        {
            title: 'How does context API works ?',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sapiente natus magni doloremque consequatur tenetur quia, illum sequi tempora ea!'
        },
        {
            title: 'Describe Brifly UseRef.',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sapiente natus magni doloremque consequatur tenetur quia, illum sequi tempora ea!'
        },
    ]
    return (
        <div>
        <Accordion title={questions[0].title} content={questions[0].content} />
        <Accordion title={questions[1].title} content={questions[1].content} />
        <Accordion title={questions[2].title} content={questions[2].content} />
      </div>
    );
}

export default Blog;
