import React from 'react'

function Heading({ title }) {

  let headingData = [
    'Welcome to Todo App', 'Todo List']
  return (
    <>
      <h1 className='text-[#121212] font-medium text-left text-2xl font-poppins'>
        {title}
      </h1>
    </>
  )
}

export default Heading