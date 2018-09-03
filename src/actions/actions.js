import actiontypes from './actionTypes';

let nextTodoId = 0
export const addTodo = (text, card) => ({
  type: actiontypes.ADD_TODO,
  id: nextTodoId++,
  text,
  card,
})

// export const setVisibilityFilter = filter => ({
//   type: 'SET_VISIBILITY_FILTER',
//   filter
// })

export const toggleTodo = id => ({
  type: actiontypes.TOGGLE_TODO,
  id
})

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



