import React, { useState } from 'react';
import './App.css';
import TodoList from "./TodoList"

function App() {

	const [todoItemTitle, setTodoItemTitle] = useState([]);

	const [todoList, setTodoList ] = useState([]);

	const addTodoItem = (e) => {
		e.preventDefault();

		todoItemTitle !== "" ? setTodoList(oldTodos => [...oldTodos, todoItemTitle])
		: console.warn("title is empty")
		
		console.log(todoList)

		setTodoItemTitle('');
	}

	return (
		<div className="App">
		  <form className="addTodo">
			  	<input value={ todoItemTitle } onChange={ (e) => setTodoItemTitle(e.target.value) } id="todoTitle" type="text" />
			  	<button onClick= { addTodoItem }>Add</button>
		  </form>
		  <TodoList list= { todoList } />
		</div>
	);
}

export default App;
