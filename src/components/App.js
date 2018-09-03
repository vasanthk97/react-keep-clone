import React, { Component } from 'react';
import '../static/css/App.css';
import MyCard from './MyCard.js'
import Grid from '@material-ui/core/Grid';

class App extends Component {
	constructor(props){
		super(props)
		this.divStyle = {
			
			marginLeft : "40px",
			marginRight: "40px",
			height : "100%",


		};
	}
	
  render() {
    return (
 	<div style={this.divStyle}>
	<Grid container spacing={24}>
        
        <Grid item xs={4}>
          			<MyCard title = "Today"/>        </Grid>

        <Grid item xs={4}>
          			<MyCard title = "Tomorrow"/>        </Grid>

        <Grid item xs={4}>
          			<MyCard title = "Upcoming"/>        </Grid>

        

      </Grid>
      </div>
    );
  }
}

export default App;
