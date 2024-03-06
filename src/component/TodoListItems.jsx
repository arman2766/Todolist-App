import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TodoListItems({ value, indexNum, todoList, setTodoList }) {

  const [isCompleted, setCompleted] = useState(false);

  const deleteTodo = () => {
    const deletedItem = todoList[indexNum];
    const finalTodoData = todoList.filter((value, index) => index !== indexNum);
    setTodoList(finalTodoData);

    // Show notification when item is deleted
    toast.error(`${deletedItem} deleted from the list!`);
  };

  const completeTodo = () => {
    setCompleted(!isCompleted);
  };

  return (
    <li
      className={`flex justify-between bg-white p-2 my-1 rounded-sm font-poppins ${isCompleted ? 'completed' : ''
        }`}
    >
      {/* <span className='cursor-pointer'>
        {indexNum}
      </span> */}
      <span onClick={completeTodo} className='cursor-pointer'>
        <input type='checkbox' checked={isCompleted} readOnly />
      </span>
      <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
        {value}
      </span>
      <span onClick={deleteTodo} className='cursor-pointer'>
        &times;
      </span>
    </li>


  );
}

export default TodoListItems;
