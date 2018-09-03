import React from "react";
import Button from '@material-ui/core/Button';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const TodoListItem = ({id,  completed, text ,toggleTodo, toggleEdit, edit, deleteTodo,card , cardBoard, showIncomplete}) => {
  const iconStyles = {
    cursor : "pointer"
    
  }

    console.log(completed)
    console.log(showIncomplete)     
    if(card === cardBoard ){
      return(<li     

    style={{
      textDecoration: completed ? 'line-through' : 'none',
      display : "flex",
      flexDirection : "row",
      verticalAlign : "center"

    }}
  > 
   <Card style = {{ width : "100%",verticalAlign : "center", margin:"8px", height: "auto",  borderRadius: "50px", backgroundColor :  completed ? 'grey' : 'white',}} >


            
        <div style = {{ minWidth : "200px", maxWidth : "100%", paddingTop : "12px" ,fontSize : "25px",  display : "flex",
      flexDirection : "row" }}>
            <Checkbox style = {{top : "-7px" ,marginLeft : "3px"}}
              checked={completed}
              onChange={toggleTodo}
            />
            <div >
            {text}
            </div>
        
        </div>  
      
    
   </Card>
  </li>

  )
    }
    else {
      return null;
    }
    
  }
  



TodoListItem.propTypes = {
    id : PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    toggleEdit: PropTypes.func.isRequired,
   


}

export default TodoListItem
