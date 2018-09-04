import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from 'prop-types'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { connect } from 'react-redux'
import { toggleTodo, toggleEdit, edit,deleteTodo ,editDescription,toggleModal} from '../actions/actions'

const TodoList = ({ todos=[],modal = false ,toggleTodo , toggleEdit,deleteTodo,edit,editDescription ,card, toggleModal}) => {
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
        editDescription = {editDescription}
        edit = {edit}
        cardBoard = {card}
        card = {todo.card}
        description = {todo.description}
        showIncomplete = {true}
        id = {todo.id}

      />
      
        </div>
      )}

     
  </ul>)
  }
const mapStateToProps = state => ({
  
  todos: state.todos,
  modal : state.modal
})
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  toggleEdit : id => dispatch (toggleEdit(id)),
  deleteTodo : id => dispatch(deleteTodo(id)),
  edit : (id, text) => dispatch (edit (id,text)),
  editDescription : (id,description) => dispatch(editDescription(id,description)),
  toggleModal : () => dispatch(toggleModal())
})

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    card : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
    toggleEdit: PropTypes.func.isRequired,
    card : PropTypes.string.isRequired,

}

export default connect(
  mapStateToProps,
   mapDispatchToProps,
)(TodoList)