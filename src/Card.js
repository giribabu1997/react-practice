import React, { Component } from 'react'
import Axios from 'axios';

export default class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then(json => {
                console.log(json);
                this.setState({ data: json.data })
            })
    }

    render() {
        console.log('render');
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        {this.state.data && this.state.data.map((value) => {
                            return (
                                <React.Fragment>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5> {value.name}</h5>
                                            <p>{value.username} </p>
                                        </div>
                                    </div>
                                </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
