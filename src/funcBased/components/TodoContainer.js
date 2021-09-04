import React, { useState, useEffect } from "react"
import TodoList from "./TodoList"
import Header from "./Header"
import TodoInput from "./InputTodo"
import { v4 as uuidv4 } from "uuid"
import { Route, Switch } from "react-router-dom"
import About from "../pages/About"
import NoMatch from "../pages/NoMatch"
import Navbar from "./Navbar"

const TodoContainer = (props) => {
  const [todos, setTodos] = useState(getInitialTodos())
  const handleChange = (id) => {
    setTodos(preState =>
      preState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    )
  }

  const deleteItem = id => setTodos(preState => preState.filter(todo => todo.id !== id))

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }

    setTodos(preState => [...preState, newTodo])
  }

  const updateTodo = (newTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, title: newTitle }
        }
        return todo
      }))
  }

  useEffect(() => {
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <Header />
              <TodoInput addTodoItem={addTodoItem} />
              <TodoList
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodoProps={deleteItem}
                updateTodo={updateTodo} />
            </div>
          </div>
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </React.Fragment>
  )
}

function getInitialTodos() {
  // getting stored items
  const temp = localStorage.getItem("todos")
  const savedTodos = JSON.parse(temp)
  return savedTodos || []
}

export default TodoContainer
