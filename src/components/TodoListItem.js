import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input,{InputLabel} from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ReactModal from 'react-modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 40;
  const left = 45;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    height : theme.spacing.unit * 30,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class TodoListItem extends React.Component {
  constructor(props){
    super(props)
    this.iconStyles = {
          cursor : "pointer"
    }
    this.styles =  {
    position: 'absolute',
    width:  "50px",
    height : "30px",
    backgroundColor: "red",
    boxShadow: "5px",
    padding: "4px",
  }
  
     this.state = {
      showModal: false,
      text: this.props.text,
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  
  
 
    }
  
   handleOpenModal () {
    console.log("modal Opened")
    this.setState({ showModal: true });
    console.log(this.state.showModal)
  }
  
  handleCloseModal () {
    console.log("closed")
    this.setState({ showModal: false });
    console.log(this.state.showModal)
  }
  
  updateText = (event) => {
    this.setState({ text: event.target.value })
    console.log(this.props.id)
    this.props.edit(this.props.id,this.state.text)
  }
  updateDesc = (event) => {
    this.setState({ description: event.target.value })
    this.props.editDescription(this.props.id,this.state.description)

  }


  render() {
    const { classes } = this.props;
    const { open } = this.state;
    const customStyles = {
      content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
    }
    if(this.props.card === this.props.cardBoard){

    return (
      <li     

    style={{
      textDecoration: this.props.completed ? 'line-through' : 'none',
      display : "flex",
      flexDirection : "row",
      verticalAlign : "center"

    }}
  > 
   <Card style = {{ width : "100%",verticalAlign : "center", margin:"8px", height: "auto",  borderRadius: "50px", backgroundColor :  this.props.completed ? 'grey' : 'white',}} >


            
        <div onClick = {this.handleOpenModal} style = {{ minWidth : "200px", maxWidth : "100%", paddingTop : "12px" ,fontSize : "25px",  display : "flex",
      flexDirection : "row" }}>
            <Checkbox style = {{top : "-7px" ,marginLeft : "3px"}}
              checked={this.props.completed}
              onChange={this.props.toggleTodo}
            />
            <div >
            {this.state.text}
            </div>
        </div>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           style={customStyles}

        >

          <div >
            <span style = {{marginLeft : "98%"}}>
            <i class="material-icons" onClick = {this.handleCloseModal} >
            cancel
            </i>
            </span>
            <div style = {{display : "flex" , flexDirection : "column",marginTop:"10px"}}>
                Title
                <TextField   style = {{backgroundColor : "grey", width : "100%", marginTop : "10px"}} disableUnderline = {true} multiline = {true}  value = {this.state.text} onChange = {this.updateText} autoFocus = {true}  /> 
            </div>
            <div>
              <div style = {{display : "flex" , flexDirection : "column",marginTop:"10px"}}>
              Description
              <TextField   style = {{border : "2px", width : "100%", marginTop : "10px"}}  multiline = {true}  value = {this.state.description} onChange = {this.updateDesc} autoFocus = {true}  /> 
              </div>

            </div>
          </div>
        </ReactModal>


        
     
    
   </Card>
  </li>
      );

}
else {
  return null;
}

      
  }
}

TodoListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const TodoListItemWrapped = withStyles(styles)(TodoListItem);

export default TodoListItemWrapped;

