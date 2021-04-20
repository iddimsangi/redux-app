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
                <input className="inpt"
                type="text" 
                placeholder={this.state.prs_name} 
                onChange={this.onChangeHandler}
                />
                <button onClick={() => this.props.onAddDetails(this.state.prs_name)}>add</button>        
            </div>
        )
    }
}
