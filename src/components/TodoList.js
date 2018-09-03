import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from 'prop-types'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { connect } from 'react-redux'
import { toggleTodo, toggleEdit, edit,deleteTodo } from '../actions/actions'

const TodoList = ({ todos=[] ,toggleTodo , toggleEdit,deleteTodo , card}) => {
    {console.log(card)}

    return(
    <ul style={{listStyleType: "none",padding:"0px" }}>
       {todos.map(todo =>
      <div>
      <TodoListItem
        key={todo.id}
        {...todo}
        toggleTodo = {() => toggleTodo(todo.id)}
        toggleEdit = {() => toggleEdit(todo.id)}
        deleteTodo = {() => deleteTodo(todo.id)}
        cardBoard = {card}
        card = {todo.card}
        showIncomplete = {true}
      />
      
        </div>
      )}

     
  </ul>)
  }
const mapStateToProps = state => ({
  
  todos: state.todos
})
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  toggleEdit : id => dispatch (toggleEdit(id)),
  deleteTodo : id => dispatch(deleteTodo(id)),
})

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    card : PropTypes.string.isRequired,
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
    toggleEdit: PropTypes.func.isRequired,
    card : PropTypes.string.isRequired,

}

export default connect(
  mapStateToProps,
   mapDispatchToProps,
)(TodoList)