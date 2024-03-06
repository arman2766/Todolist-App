import React from 'react'


function StartedButton({ onClick }) {
  return (
    <button onClick={onClick} className='w-[100%]bg-transparent hover:bg-[#3b88e7] text-[#3b88e7] font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full mt-[100px]'>Let's Started</button>
  )
}

export default StartedButton