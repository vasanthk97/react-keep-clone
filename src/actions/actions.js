import actiontypes from './actionTypes';
import {store} from "../store"
import {replaceAllService, addTodoService} from './actionService'

export let nextTodoId = 0

export function addTodo(todoObject){
  nextTodoId++;
  console.log(nextTodoId)
  return addTodoService(todoObject,nextTodoId)
}



export const toggleTodo = id => ({
  type: actiontypes.TOGGLE_TODO,
  id
})
export function toggleTodoAction(id) {  
  return {
    type: actiontypes.TOGGLE_TODO,
    id : id
  }
}
// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

export const toggleEdit = id => ({
  type: actiontypes.TOGGLE_EDIT,
  id
})
export const deleteTodo = id => ({
  type: actiontypes.DELETE,
  id
})

export const edit = (id, text) => ({
  type: actiontypes.EDIT,
  id,
  text

})

export const editDescription = (id, description) => ({
  type: actiontypes.EDIT_DESCRIPTION,
  id,
  description

})

export const toggleModal = () => ({
  type : "TOGGLE_MODAL"
})

export function replaceAll(object){
  return replaceAllService(object)
}

export const getAll = () => ({
  type : "GET_ALL"
})
