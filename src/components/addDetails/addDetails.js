import React, { Component} from 'react'
import './addDetails.css';
// import { connect } from 'react-redux'
// import PersonDetails from '../personDetails/personDetails';
 class addDetails extends Component {
    state = {
        todoList:''
    }
     onChangeHandler = (event) =>{
        this.setState({
            todoList:event.target.value
        })
    }
    render() {
        return (
          
              <div className="inp-det">
                <button id="sw-icon"  onclick={() => this.props.onAddPersnData(this.state.todoList)}>
			    </button>
                <input className="inpt"
                type="text" 
                placeholder="Create a new todo"
                onChange={this.onChangeHandler}
                value={this.state.todoList}
                /> 
                <div className="clfx"></div>  
                {/* <PersonDetails />   */}
            </div>
        
           
        )
    }
}

export default addDetails