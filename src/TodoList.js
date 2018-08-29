import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from 'prop-types'

const TodoList = ({ todos=[] ,toggleTodo , toggleEdit}) => (
  <ul style={{listStyleType: "none",padding:"0px"}}>
    {todos.map(todo =>
      <TodoListItem
        key={todo.id}
        {...todo}
        toggleTodo = {() => toggleTodo(todo.id)}
        toggleEdit = {() => toggleEdit(todo.id)}
        
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
    toggleEdit: PropTypes.func.isRequired


}

export default TodoList
