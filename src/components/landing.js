import React, { Component } from 'react';

import '../App.css'
import {Link} from 'react-router-dom'

class Landing extends Component {
    constructor(){
        super()
        this.state={
            users:[
                {name:'ahi',color:'red'}
            ]
        }
    }
    render(){
        return(
            <div>
                {this.state.users.map(u=>{return(<div className={u.color}>
                    {u.name}
                </div>)})}
            </div>
        )
    }
}

export default Landing