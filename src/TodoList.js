import React from 'react'

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