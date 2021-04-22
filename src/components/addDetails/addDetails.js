import React, { Component} from 'react'
import './addDetails.css';
import PersonDetails from '../personDetails/personDetails';
export default class addDetails extends Component {
    state = {
        prs_name:''
    }
     onChangeHandler = (event) =>{
        this.setState({
            prs_name:event.target.value
        })
    }
    render() {
        return (
          
              <div className="inp-det">
                <button id="sw-icon" type onclick="themechange()">
			    </button>
                <input className="inpt"
                type="text" 
                placeholder="Create a new todo"
                onChange={this.onChangeHandler}
                value={this.state.prs_name}
                /> 
                <div className="clfx"></div>   
                <PersonDetails/>      
           
            </div>
        
           
        )
    }
}
