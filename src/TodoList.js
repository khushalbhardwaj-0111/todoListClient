import React from 'react'
import "./TodoList.css"

function TodoList({ list }) {
	return (
		<div>
		{
			list.map(todoItem => {
				return (
					<h2>{ todoItem }</h2>
				)
			})
		}
		</div>
	)
}

export default TodoList