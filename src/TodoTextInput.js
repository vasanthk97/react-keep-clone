import React, { Component } from 'react'
import PropTypes from 'prop-types';


class TodoTextInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      text: this.props.text || ''
    }
  }

 

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

 
  render() {
    return (
      <input type="text"
             placeholder={this.props.placeholder}
             autoFocus="true"
             value={this.state.text}
             onChange={this.handleChange.bind(this)}/>
    )
  }

}

TodoTextInput.propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool
}

export default TodoTextInput
