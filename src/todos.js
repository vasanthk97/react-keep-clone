

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log(action)
      console.log(state)

      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          editing : false

        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
      case 'TOGGLE_EDIT':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, editing: !todo.completed}
          : todo
      )
      case 'EDIT':
      return state.map(todo =>
          (todo.id === action.id)
          ? {...todo, text: action.text}
          : todo
        )
    default:
      return state
  }
}

export default todos
