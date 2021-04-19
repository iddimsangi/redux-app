import React, { Component} from 'react'
import './addDetails.css';
import PersonDetails from '../personDetails/personDetails'
export default class addDetails extends Component {
    state = {
        persons:''
    }
     onChangeHandler = (event) =>{
        this.setState({
            ...this.state,
            persons:event.target.value
        })
    }
    render() {
        return (
            <div className="inp-det">
                <input className="inpt"
                type="text" 
                placeholder={this.state.persons} 
                onChange={this.onChangeHandler}
                />
                <button onClick={this.clicked}>add</button>
                
                <PersonDetails/>
            </div>
        )
    }
}
