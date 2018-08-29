import React from "react";
import Button from '@material-ui/core/Button';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';

// export default class TodoListItem extends React.Component {
//     constructor (props) {
//         super(props);

//         this.state = {
//             isEditing: false
//         };
//     }

//     renderActionSection () {
//         const taskStyle = {
//             cursor: "pointer"
//         };
//         if (this.state.isEditing) {
//             return (
//                 <td style= {taskStyle}>
//                     <i class="material-icons" onClick={this.editTask.bind(this)} >
//                     done
//                     </i>
//                     <i class="material-icons" onClick={this.setEditState.bind(this, false)} >
//                     cancel
//                     </i>
//                 </td>
//             );
//         }
//         return (
//             <td style= {taskStyle}>
//             <i class="material-icons" onClick={this.setEditState.bind(this, true)} >
//             edit
//             </i>
//                 <i class="material-icons" onClick={this.deleteTask.bind(this)} >
//                 delete_outline
//                 </i>
//             </td>
//         );
//     }

//     renderTask () {
//         const { task, isCompleted } = this.props;
        

//         if (this.state.isEditing) {
//             return (
//                 <td>
//                     <form onSubmit={this.editTask.bind(this)}>
//                         <input ref="task" defaultValue={task} autoFocus />
//                     </form>
//                 </td>
//             );
//         }
//         var taskTextstyle = {textDecoration: 'none'};
//         if (isCompleted === true) {
//             taskTextstyle = {textDecoration: 'line-through'}
//         }
//         return (

//             <td >
//               <input type="checkbox"  onChange = {this.toggleTask.bind(this)} checked={isCompleted} />
//             <span  style={taskTextstyle}>{task}</span>
//             </td>
//         ); 
//     }

//     render () {
//         const { isCompleted } = this.props;
//         return (
//             <tr >
//                 {this.renderTask()}
//                 {this.renderActionSection()}
//             </tr>
//         )
//     }

//     setEditState (isEditing) {
//         this.setState({
//             isEditing
//         });
//     }

//     toggleTask () {
//         this.props.toggleTask(this.props.id);
//     }
   

//     editTask (e) {
//         this.props.editTask(this.props.id, this.refs.task.value);
//         this.setState({
//             isEditing: false
//         });
//         e.preventDefault();
//     }

//     deleteTask () {
//         this.props.deleteTask(this.props.id);
//     }
// }
const TodoListItem = ({  completed, text ,toggleTodo, editing, toggleEdit}) => {
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


       <i class="material-icons" onClick={toggleEdit} >
        edit
        </i>
        <i class="material-icons"  >
        delete_outline
        </i>
  </li>
  )
  }
  else{
       return(
       <li>
          <Input id="input"  value = {text}    /> 
       <i class="material-icons" onClick={toggleEdit} >
        edit
        </i>
        <i class="material-icons"  >
        delete_outline
        </i>

       </li>
       )
  }
  
  // function toggle(completed){
  //   console.log(completed)
  //   completed = !completed

  // }
}

TodoListItem.propTypes = {
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    editing : PropTypes.bool.isRequired,
    toggleEdit: PropTypes.func.isRequired,


}

export default TodoListItem
