import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from "./funcBased/components/TodoContainer"
import { BrowserRouter as Router } from "react-router-dom"

import "./funcBased/App.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
