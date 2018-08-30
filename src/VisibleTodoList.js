import { connect } from 'react-redux'
import { toggleTodo, toggleEdit, edit,deleteTodo } from './actions'
import TodoList from './TodoList'

const getTodos = (todos) => {
    return todos
   
  
}
const mapStateToProps = state => ({
  
  todos: getTodos(state.todos)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  toggleEdit : id => dispatch (toggleEdit(id)),
  edit : (id, text) => dispatch (edit (id,text)),
  deleteTodo : id => dispatch(deleteTodo(id)),

})

export default connect(
  mapStateToProps,
   mapDispatchToProps
)(TodoList)
