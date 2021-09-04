import React from "react"
import TodoList from "./TodoList"
import Header from "./Header"
import TodoInput from "./InputTodo"
import { v4 as uuidv4 } from "uuid"

class TodoContainer extends React.Component {

  state = {
    todos: []
  }

  handleChange = (id) => {
    this.setState(preState => ({
      todos: preState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      }),
    }))
  }

  deleteItem = (id) => {
    this.setState(preState => {
      return {
        todos: preState.todos.filter(todo => todo.id !== id)
      }
    }
    )
  }

  addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState(preState => {
      return {
        todos: [...preState.todos, newTodo]
      }
    })
  }

  updateTodo = (newTitle, id) => {
    this.setState(preState => {
      return {
        todos: preState.todos.map(todo => {
          if (todo.id === id) {
            return { ...todo, title: newTitle }
          }
          return todo
        })
      }
    })
  }

  componentWillMount() {
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos)
      localStorage.setItem("todos", temp)
    }
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <TodoInput addTodoItem={this.addTodoItem} />
          <TodoList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.deleteItem}
            updateTodo={this.updateTodo} />
        </div>
      </div>
    )
  }
}

export default TodoContainer
