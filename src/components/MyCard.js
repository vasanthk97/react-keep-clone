import React from "react";
import { render } from "react-dom";
// import { Card, CardHeader, CardBody } from "react-simple-card";
import  TodoTextInput from './TodoTextInput';
import AddTodo from './AddTodo' 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Input from '@material-ui/core/Input';
import VisibleTodoList from '../containers/VisibleTodoList'
import TodoList from './TodoList'

class MyCard extends React.Component{
	 constructor (props) {
        super(props);
  //       console.log(this.props);
  //       todos.populate()
        this.cardStyle = {

        marginTop: '40px',
        // paddingLeft : '20px',
        border: '5px ',
        display:"flex", 
        flexDirection:"column",
        // left : "10px",
        fontSize : "30px",
        height : "500px"
        };
    }

	render () {
        return (
            <div >

              <Card  style = {this.cardStyle}>
              <CardContent>
                    <div > {this.props.title} </div>
                    <div style = {{overflow  : "hidden" , maxHeight : "330px", overflowY : "auto"}}>
                    <TodoList card = {this.props.title}/>
                    </div> 

                </CardContent>
                <div style = {{position : "fixed" , bottom : "25%",width : "27%", paddingLeft: "20px"}}>
                    <AddTodo card = {this.props.title}/>
                </div>    

                
              </Card>
  
            </div>
        );
    }
}





export default MyCard;