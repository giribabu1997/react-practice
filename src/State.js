import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class State extends Component {
    constructor() {
        super();
        this.state = {
            name: 'giribabu',
            age: 22
        }  
    }
    changeName =()=>{
this.setState({name:'Kondaveeti',age:23})
    }
    render() {
        const {name,age}=this.state;
        return (
            <Fragment>
                <div className="text-center">
                <h1 className="text-center">
                    {name} {age}
                </h1>
                <button onClick={this.changeName} className="btn btn-primary">change value</button>
                </div>
            </Fragment>
        )
    }
} 