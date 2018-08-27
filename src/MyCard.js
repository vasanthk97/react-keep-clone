import React from "react";
import { render } from "react-dom";
// import { Card, CardHeader, CardBody } from "react-simple-card";
import  TodoTextInput from './TodoTextInput';
import AddTodo from './AddTodo' 
import TodoList from './TodoList'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Input from '@material-ui/core/Input';


const todos = {
    items: [],
    listName : "",
    lsKey: "todos",
    populate () {
        this.items =  this.get();
        this.listName = this.getName();
    },
    get () {
        try {
            return JSON.parse(localStorage.getItem(this.lsKey)) || []

        } catch (e) {}
        return [];
    },
    getName (){
        return localStorage.getItem("listName");
    },
    save () {
        localStorage.setItem(this.lsKey, JSON.stringify(this.items));
    },
    toggle (id) {
        let todoItem = this.items[id];
        todoItem.isCompleted = !todoItem.isCompleted;
        this.save();
    },
    add (obj) {
        this.items.push(obj);
        this.save();
    },
    remove (id) {
        this.items.splice(id, 1);
        this.save();
    },
    update (id, task) {
        let todoItem = this.items[id];
        todoItem.task = task;
        this.save();
    },
    editListName (name){
        console.log(name);
        this.listName = name;
        localStorage.setItem("listName", name)
    }
};

class MyCard extends React.Component{
	 constructor (props) {
        todos.populate()
        super(props);
  this.cardStyle = {
  margin: '40px',
  border: '5px ',
  width : '40%',
  display:"flex", 
	flexDirection:"column"
};
this.divstyle = {
	display:"flex", 
	flexDirection:"row"
}
 this.state = {
            todos: todos.items,
            name : todos.listName,

        };
    }

	render () {
        return (
            <div style = {this.divstyle}>
  <Card  style = {this.cardStyle}>
  <Input
        placeholder="My Todo List"
        value = {this.state.name}
        inputProps={{
          'aria-label': 'Description',
        }} style ={{margin : '10px',marginLeft : '20px'}}
         onChange = {this.changeName}
      />
    <CardContent>

        <AddTodo createTask={this.createTask.bind(this)}/>
        <TodoList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                    editTask={this.editTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
    </CardContent>

  </Card>
  
  </div>
        );
    }
changeName = event => {
    this.setState({ name: event.target.value });
    todos.editListName(event.target.value   );
  };
    


 createTask (task) {
        console.log(task)
        task = task.trim();
        if (!task) { return; }
        todos.add({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos });
    }
    toggleTask (taskId) {
        todos.toggle(taskId);
        this.setState({ todos: this.state.todos });
    }
    editTask (taskId, task) {
        todos.update(taskId, task);
        this.setState({ todos: this.state.todos });
    }
    deleteTask (taskId) {
        todos.remove(taskId);
        this.setState({ todos: this.state.todos });
    }
}



export default MyCard;