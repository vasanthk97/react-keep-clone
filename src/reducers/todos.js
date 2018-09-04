import actiontypes from '../actions/actionTypes';

const todos = (state = [], action) => {
  switch (action.type) {
    case actiontypes.ADD_TODO:
      console.log(action)
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          editing : false,
          card : action.card,
          description : "",
        }
      ]
    case actiontypes.TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
      case actiontypes.TOGGLE_EDIT:
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, editing: !todo.editing}
          : todo
      )
      case actiontypes.EDIT:
      console.log(action)
      return state.map(todo =>
          (todo.id === action.id)
          ? {...todo, text: action.text}
          : todo
        )
      case actiontypes.DELETE:
      console.log(action)
      return state.filter(todo =>
        todo.id !== action.id
      );
      case actiontypes.EDIT_DESCRIPTION:
      console.log(action)
      return state.map(todo =>
          (todo.id === action.id)
          ? {...todo, description: action.description}
          : todo
        )
      
      default:
      return state
  }
}

export default todos
