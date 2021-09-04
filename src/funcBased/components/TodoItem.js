import React, { useState, useEffect } from "react"
import style from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa"

const TodoItem = props => {
  const [editing, setEditing] = useState(false)

  const handleEdit = e => {
    setEditing(true)
  }

  const handleUpdateDone = event => {
    if (event.key === "Enter") {
      setEditing(false)
    }
  }

  useEffect(() => {
    return () => {
      console.log("Cleaning up...")
    }
  }, [])

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const { id, title, completed } = props.todo

  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  return (
    <li className={style.item}>
      <div onDoubleClick={handleEdit} style={viewMode}>
        <input type="checkBox"
          className={style.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)} />
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
        <button onClick={() => props.deleteTodoProps(id)}><FaTrash /></button>
      </div>

      <input type="text"
        className={style.textInput}
        style={editMode}
        value={title}
        onChange={e => props.updateTodo(e.target.value, id)}
        onKeyDown={handleUpdateDone} />
    </li>
  )
}

export default TodoItem
