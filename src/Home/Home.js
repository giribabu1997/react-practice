import React, { Component } from 'react';
import './Home.css';
class Home extends Component {
    render() {
        return (
            <div className="box">
                <div className="containerFluid" style={{ backgroundColor: 'white' }}>
                    <div className="row">
                        <div className="col-md-3">
                            <h6 className="text-muted">Your Profile</h6><br />
                            <img className="profile" src={require('./IMG_0005.JPG')} />
                            <h5 className="test-head">Giribabu  Kondaveeti</h5>
                            <p className="test-pic">Enthusiant</p>
                            <div className="row">
                                <div className="col-sm">
                                    <h5>86</h5>
                                    <p className="text-muted post">posts</p>
                                </div>
                                <div className="col-sm">
                                    <h5>1,1k</h5>
                                    <p className="text-muted">messages</p>
                                </div>
                                <div className="col-sm">
                                    <h5>4,5k</h5>
                                    <p className="text-muted">members</p>
                                </div>
                                <div style={{ paddingLeft: '50px', borderRadius: '20%' }}>
                                    <button type="button" className="btn btn-primary">Upload New Avatar</button>
                                    <div style={{ paddingTop: '20px' }}>
                                        <button type="button" className="btn btn-light"
                                            style={{ border: '1px solid rgb(202, 202, 202)' }}>delete</button>
                                            <link href="url(https://giribabu-43.firebaseapp.com/)"></link>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <h4>Your Slogan</h4>
                            <p>(just start typing to edit)</p>
                            <p>every thing we hear is an option, not a fact Everything we see is a perspective not the
                        truth</p>
                            <p className="roger"><img src={require('./dquote.png')} style={{height: '40px'}}/></p>
                        </div>
                        <div className="col-md-5">
                            <h6>Edit Your Personal Settings</h6>
                            <hr />
                            <div className="roger" style={{paddingTop: '20px'}}>
                                <h6 className="text-muted here1">Full name </h6>
                                <input className="form-control" placeholder="Giribabu Kondaveeti"/>
                            </div>
                            <div className="roger">
                                <h6 className="text-muted here2">Title</h6>
                                <input className="form-control" placeholder="enter your title here"/>
                            </div>
                            <div className="roger">
                                <h6 className="text-muted here3">Email</h6>
                                <input className="form-control" placeholder="enter your email here" />
                            </div>
                            <hr />
                            <h5 style={{ textAlign: 'center' }}>Birthday</h5>
                            <div className="row">
                                <div className="col-md-4">
                                    <input type="number" className="form-control" placeholder="01" /> </div>
                                <div className="col-md-4">
                                    <input type="month" className="form-control" placeholder="December" defaultValue="December"/> </div>
                                <div className="col-md-4">
                                    <input type="year" className="form-control" placeholder="1984" /></div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Country</h6>
                                    <input className="form-control" type="text" placeholder="Not Chosen" />
                                </div>
                                <div className="col-md-6">
                                    <h6>State/Province/Region</h6>
                                    <input className="form-control" type="text" placeholder="Type here" />
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Postal Code </h6>
                                    <input className="form-control" type="text" placeholder="Type here" />
                                </div>
                                <div className="col-md-6">
                                    <h6>Phone Number</h6>
                                    <input className="form-control" type="text" placeholder="Type here" />
                                </div>
                            </div>
                            <hr />
                            <p>I agree to recieve notification emails from Hivve</p>
                            <button type="button" className="btn btn-primary">Update Information</button>
                        </div>
                        <div className="col-md-4">
                            <h6>Your External Links</h6>
                            <hr />
                            <div className="web">
                                <h6 className="here">Facebook URL:</h6>
                                <input className="form-control mr-sm-2" type="search" placeholder="Paste your link here" />
                                <h6 className="here">Twitter URL:</h6>
                                <input className="form-control mr-sm-2" type="search" placeholder="Paste your link here" />
                                <h6 className="here">Blogger URL:</h6>
                                <input className="form-control mr-sm-2" type="search" placeholder="Paste your link here" />
                                <h6 className="here">Google+ URL:</h6>
                                <input className="form-control mr-sm-2" type="search" placeholder="Paste your link here" />
                                <h6 className="here">LinkedIn URL:</h6>
                                <input className="form-control mr-sm-2" type="search" placeholder="Paste your link here" />
                                <h6 className="here">Website URL:</h6>
                                <input className="form-control mr-sm-2" type="search" placeholder="Paste your link here" />
                            </div>
                            <button type="button" className="btn btn-primary">Save  Update</button>
                        </div>
                    </div>
                </div>


            </div >
        )
    }
}
export { Home };