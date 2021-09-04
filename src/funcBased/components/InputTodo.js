import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"

const TodoInput = (props) => {
  const [title, setTitle] = useState("")

  const onChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      props.addTodoItem(title)
      setTitle("")
    } else {
      alert("Please write a title")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input type="text"
        placeholder="Add todo ..."
        value={title}
        name="title"
        onChange={onChange} />
      <button className="input-submit"><FaPlusCircle /></button>
    </form>
  )
}

export default TodoInput
