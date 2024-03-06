import React, { useState } from 'react';
import HeroImg from './assets/img/hero-banner.webp';
import Heading from './Heading';
import SubHeading from './SubHeading';
import StartedButton from './StartedButton';

import TodoItem from './TodoItem'

function TodoApp() {
  const [showComponents, setShowComponents] = useState(true);

  const handleButtonClick = () => {
    setShowComponents(false);
  };

  return (
    <div>
      {showComponents ? (
        <>
          <img src={HeroImg} alt="Hero Banner" className='mb-[100px]' />
          <Heading title="Welcome to Your Productivity Hub" />
          <SubHeading />
          <StartedButton onClick={handleButtonClick} />
        </>
      ) : (
        <>

          <Heading title="Todo Task" />
          <TodoItem />

        </>
      )}
    </div>
  );
}

export default TodoApp;
