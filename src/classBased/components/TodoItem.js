import React from "react"
import style from "./TodoItem.module.css"

class TodoItem extends React.Component {
  state = {
    editing: false
  }

  handleEdit = e => {
    this.setState({
      editing: true
    })
  }

  handleUpdatedDone = event => {
    if (event.key === "Enter") {
      this.setState({ editing: false })
    }
  }

  componentWillUnmount() {
    console.log("Cleaning up...")
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    const { id, title, completed } = this.props.todo

    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    return (
      <li className={style.item}>
        <div onDoubleClick={this.handleEdit} style={viewMode}>
          <input type="checkBox"
            className={style.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)} />
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
          <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
        </div>

        <input type="text"
          className={style.textInput}
          style={editMode}
          value={title}
          onChange={e => this.props.updateTodo(e.target.value, id)}
          onKeyDown={this.handleUpdatedDone} />
      </li>
    )
  }
}

export default TodoItem
