import React from 'react'
import './head.css';
function headCompo() {
    const sty ={
        fontSize:"30px",
        color:"#fff"
    }
    return (
        <div className="head-content">
            <h1 style={sty}>header section</h1>
        </div>
    )
}

export default headCompo
