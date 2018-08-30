import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from 'prop-types'

const TodoList = ({ todos=[] ,toggleTodo , toggleEdit,edit,deleteTodo}) => (
  <ul style={{listStyleType: "none",padding:"0px"}}>
    {todos.map(todo =>
      <TodoListItem
        key={todo.id}
        {...todo}
        toggleTodo = {() => toggleTodo(todo.id)}
        toggleEdit = {() => toggleEdit(todo.id)}
        edit = {edit}
        deleteTodo = {() => deleteTodo(todo.id)}
        
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
    toggleEdit: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
    deleteTodo : PropTypes.func.isRequired,


}

export default TodoList
