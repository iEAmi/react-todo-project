import React from "react"
import TodoItem from "./TodoItem"

const TodoList = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          updateTodo={props.updateTodo} />
      ))}
    </ul>
  )
}

export default TodoList
