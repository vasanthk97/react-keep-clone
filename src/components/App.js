import React, { Component } from 'react';
import '../static/css/App.css';
import MyCard from './MyCard.js'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import {replaceAll} from '../actions/actions'
import axios from 'axios';
class App extends Component {
	constructor(props){
		super(props)
		this.divStyle = {
			
			marginLeft : "40px",
			marginRight: "40px",
			height : "100%",
      }
      
      
		}

    componentDidMount () {
      axios.get('https://todo-app-e9393.firebaseio.com/todos.json')
        .then(res => {
          console.log("herte")
          console.log(res.data)
          this.props.replaceAll(res.data)
          
          // this.setState({todos:res.data})

        })
    }
    

	
	
  render() {
    return (
 	<div style={this.divStyle}>
	<Grid container spacing={24}>
        
        <Grid item xs={4}>
          			<MyCard todos = {this.props.todos} title = "Today"/>        </Grid>

        <Grid item xs={4}>
          			<MyCard  todos = {this.props.todos} title = "Tomorrow"/>        </Grid>

        <Grid item xs={4}>
          			<MyCard todos = {this.props.todos} title = "Upcoming"/>        </Grid>

        

      </Grid>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos : state.todos

})

const mapDispatchToProps = dispatch => ({
  
  replaceAll: object => dispatch(replaceAll(object)),

})


export default connect(
  mapStateToProps,
   mapDispatchToProps,
)(App)