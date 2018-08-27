import React from "react";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export default class AddTodo extends React.Component {
    constructor(){
        super()
        this.state = {
            taskTitle : "",
        }
    }
    render () {
        return (
                <div style = {{display : "flex" , flexDirection : "row"}}>
                     <Input id="name-helper"   placeholder="Task Title" style = {styles.taskTitle}
                     value = {this.state.taskTitle} onChange = {this.updateTask}/> 
                    <i class="material-icons" onClick = {this.onSubmit.bind(this)} style = {{cursor : "pointer"}}>
                    add_circle_outline
                    </i>
                </div>
        );
    }
    updateTask = event => {
        this.setState({ taskTitle : event.target.value})

  }; 
    onSubmit (e) {
                console.log("here again")
        this.props.createTask(this.state.taskTitle);
        this.setState({ taskTitle : ""})
        e.preventDefault();
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


