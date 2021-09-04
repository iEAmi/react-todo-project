import React from "react"

class TodoInput extends React.Component {
  state = {
    title: ""
  }

  onChange = (e) => {
    this.setState(preState => {
      return {
        [e.target.name]: e.target.value
      }
    })
  }

  onSubmit = e => {
    e.preventDefault()
    if (this.state.title.trim()) {
      this.props.addTodoItem(this.state.title)
      this.setState({
        title: ""
      })
    } else {
      alert("Please write a title")
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form-container">
        <input type="text"
          placeholder="Add todo ..."
          value={this.state.title}
          name="title"
          onChange={this.onChange} />
        <button className="input-submit">Submit</button>
      </form>
    )
  }
}

export default TodoInput
