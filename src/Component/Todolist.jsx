import React, { useState, useEffect } from 'react';
import {
  BiCheckDouble,
  BiEdit,
  BiTrash,
  BiCheckCircle,
  BiReset,
  BiRefresh
} from 'react-icons/bi';
import './Todolist.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputvalue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Live Clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const addTodo = () => {
    if (inputvalue.trim() !== '') {
      if (editIndex !== -1) {
        const updateTodos = [...todos];
        updateTodos[editIndex] = {
          task: inputvalue,
          completed: updateTodos[editIndex].completed
        };
        setTodos(updateTodos);
        setEditIndex(-1);
      } else {
        setTodos([...todos, { task: inputvalue, completed: false }]);
      }
      setInputValue('');
    }
  };

  const startEdit = (index) => {
    setInputValue(todos[index].task);
    setEditIndex(index);
  };

  const cancelEdit = () => {
    setInputValue('');
    setEditIndex(-1);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleCompleted = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h1>ADD YOUR TASK TO THE TODO LIST!!!!</h1>

      <div className="current-time">
        Current Time: {currentTime.toLocaleTimeString()}
      </div>

      <div className="input-section">
        <input
          type="text"
          value={inputvalue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new Task"
          className="input-field"
        />

        {editIndex !== -1 ? (
          <>
            <button onClick={addTodo} className="update-btn">
              <BiCheckDouble />
            </button>
            <button onClick={cancelEdit} className="cancel-btn">
              <BiRefresh />
            </button>
          </>
        ) : (
          <button onClick={addTodo} className="add-btn-btn">
            Add
          </button>
        )}
      </div>

      
      <div className="content-scroll">
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className={todo.completed ? 'completed' : ''}>
              {todo.task}
              <div className="btn-group">
                <button onClick={() => startEdit(index)} className="btn-edit">
                  <BiEdit />
                </button>
                <button onClick={() => removeTodo(index)} className="btn-remove">
                  <BiTrash />
                </button>
                <button
                  className="btn-done"
                  onClick={() => toggleCompleted(index)}
                >
                  {todo.completed ? <BiReset /> : <BiCheckCircle />}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;