import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodoListItems from './TodoListItems';
import AddIcon from '../component/assets/img/button.png';

//TO GET DATA FROM LOCALSTORAGE 
const getLocalItems = () => {
  let list = localStorage.getItem('lists');

  if (list) {
    return JSON.parse(localStorage.getItem('lists'))
  }
  else {
    return [];
  }
}

function TodoItem() {
  const [todoList, setTodoList] = useState(getLocalItems());
  const [todoName, setTodoName] = useState('');

  const addTodoList = (event) => {
    event.preventDefault();
    const newTodoName = event.target.todoName.value.trim();;

    if (!todoList.includes(newTodoName)) {
      const finalTodoList = [...todoList, newTodoName];
      setTodoList(finalTodoList);
      setTodoName('');

      // Show notification when item is added
      toast.success(<div><strong>{newTodoName}</strong> - added to the list!</div>);
    } else {
      toast.error(`${newTodoName} - Item already exists`);
    }
  };

  const list = todoList.map((value, index) => (
    <TodoListItems
      value={value}
      key={index}
      indexNum={index}
      todoList={todoList}
      setTodoList={setTodoList}
    />
  ));

  //add useEffect for localstorage 
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(todoList))
  }, [todoList])

  return (
    <div className='pt-4'>
      <form onSubmit={addTodoList} autoComplete='off' className='flex items-center'>
        <input
          type='text'
          name='todoName'
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          className='w-4/5 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500'
          required
        />
        <button type='submit' className='w-1/5 h-full rounded-sm ml-2 flex items-center justify-center'>
          <img src={AddIcon} alt='Add Icon' className='h-10 w-10 bg-slate-50 rounded-lg py-[5px] px-[5px] hover:bg-slate-50 hover:rounded-lg hover:py-[6px] hover:px-[6px] hover:transition duration-300 ease-in-out hover:border-color: rgb(0 0 0);' />
        </button>
      </form>

      <ul>{list}</ul>

      {/* ToastContainer for notifications */}
      <ToastContainer />
    </div>
  );
}

export default TodoItem;
