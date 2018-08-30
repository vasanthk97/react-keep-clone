import React from "react";
import Button from '@material-ui/core/Button';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';


const TodoListItem = ({id,  completed, text ,toggleTodo, editing, toggleEdit, edit, deleteTodo}) => {
  const iconStyles = {
    cursor : "pointer"
  }
  if (!editing){
    return(<li     

    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  > 
<Checkbox
              checked={completed}
              onChange={toggleTodo}
            />
    {text}


       <i class="material-icons" onClick={toggleEdit} style={iconStyles}>
        edit
        </i>
        <i class="material-icons" onClick={deleteTodo} style={iconStyles}>
        delete_outline
        </i>
  </li>
  )
  }
  else{
       return(
       <li>
          <Input id="input"  value = {text}  onChange = {(event) => {edit(id,event.target.value)}}  /> 
       <i class="material-icons" onClick={toggleEdit} style={iconStyles}>
        done
        </i>
        <i class="material-icons" onClick={deleteTodo} style={iconStyles}>
        delete_outline 
        </i>

       </li>
       )
  }
  function handleChange(event){
    edit(id,event.target.value)
  }
  

}

TodoListItem.propTypes = {
    id : PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    editing : PropTypes.bool.isRequired,
    toggleEdit: PropTypes.func.isRequired,
    edit : PropTypes.func.isRequired,    
    deleteTodo : PropTypes.func.isRequired,    


}

export default TodoListItem
