import React from "react";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import {addTodo} from './actions'
import { connect } from 'react-redux'



const AddTodo = ({ dispatch }) => {
  var input =  React.createRef();
  
    return(
      <div >
          <Input id="input"  ref={input} placeholder="Task Title" style = {styles.taskTitle}/> 
         <i class="material-icons" onClick={() => add()} style = {{cursor : "pointer"}}>
        add_circle_outline
        </i> 
    </div>
      )
  


  function add() {
        input = document.getElementById("input")
        var todo = input.value

        if (!todo.trim()) {
          return
        }
        input.value = ''

        dispatch(addTodo(todo))
              }
 
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection:"column", 
    width : "80%"

  },
  taskTitle :{
    width : "80%" 
  }
};


export default connect()(AddTodo)
