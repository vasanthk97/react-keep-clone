import { connect } from 'react-redux'
import { toggleTodo, toggleEdit } from './countActions'
import TodoList from './TodoList'
// import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
    return todos
    // case VisibilityFilters.SHOW_COMPLETED:
    //   return todos.filter(t => t.completed)
    // case VisibilityFilters.SHOW_ACTIVE:
    //   return todos.filter(t => !t.completed)
    // default:
    //   throw new Error('Unknown filter: ' + filter)
  
}
const mapStateToProps = state => ({
  
  todos: getVisibleTodos(state.todos)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  toggleEdit : id => dispatch (toggleEdit(id)),

})

export default connect(
  mapStateToProps,
   mapDispatchToProps
)(TodoList)
