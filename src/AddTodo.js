import React from "react";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import {addTodo} from './countActions'
import { connect } from 'react-redux'

// export default class AddTodo extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             taskTitle : "",
//         }
//     }
//     render () {
//         return (
//                 <div style = {{display : "flex" , flexDirection : "row"}}>
//                     <i class="material-icons" onClick = {this.onSubmit.bind(this)} style = {{cursor : "pointer"}}>
//                     add_circle_outline
//                     </i>    
//                      <Input id="name-helper"   placeholder="Task Title" style = {styles.taskTitle}
//                      value = {this.state.taskTitle} onChange = {this.updateTask}/> 
                    
//                 </div>
//         );
//     }
//     updateTask = e => {
//         e.preventDefault()
//         if (!input.value.trim()) {
//           return
//         }
//         dispatch(addTodo(input.value))
//         input.value = ''    
//   }; 
//     onSubmit (e) {
//                 console.log("here again")
//         this.props.createTask(this.state.taskTitle);
//         this.setState({ taskTitle : ""})
//         e.preventDefault();
//     }onClick = {this.onSubmit.bind(this)}
// }



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
  
  
// 
// 
  // function expand(){
  //   console.log(itemExpanded)
  //   itemExpanded = !itemExpanded


  // }

  function add() {
        input = document.getElementById("input")
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
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
