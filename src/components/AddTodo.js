import React from "react";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import {addTodo} from '../actions/actions'
import { connect } from 'react-redux'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const AddTodo = ({ dispatch,card }) => {
  var input =  React.createRef();
  var inputId = "input" + card.toString();
    return(

        <div style = {{display : "flex" , flexDirection : "row"}}>
          <Input id={inputId}   disableUnderline = {true} placeholder="Task Title" style = {styles.taskTitle }/> 
         <div style ={{textAlign : "right"}} onClick={() => add()}> 
<svg width="15"  style = {{cursor : "pointer", left : "5px"}} height="15" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M8.438 3.563l4.593 4.593a.928.928 0 0 0 1.312-1.313L8.16.66a.933.933 0 0 0-1.32 0L.656 6.844a.928.928 0 0 0 1.312 1.313l4.595-4.594v10.504c0 .515.417.933.933.933h.008a.933.933 0 0 0 .934-.933V3.563z"></path></svg>
        </div>
        </div>
        )
  


  function add() {
        console.log("here")
        input = document.getElementById(inputId)
        var todo = input.value
        console.log(todo)
        if (!todo.trim()) {
          return
        }
        input.value = ''

        dispatch(addTodo(todo,card))
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
    width : "90%" ,
    borderRadius: "20px",
    border: '1px solid #ced4da',
    fontSize: 16,
    paddingLeft : "20px",
    marginRight : "10px"
  }
};


export default connect()(AddTodo)
