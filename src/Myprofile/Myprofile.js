import React, { Component } from 'react';
import Header from '../Components/Header';
import { Document, Page, pdfjs } from 'react-pdf';
import './Myprofile.css'
import { Link } from 'react-router-dom';
import resume from '../Images/giribabu.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class Myprofile extends Component {

    state = {
        details: false,
        viewdata: 'profile',
        nullpages: null,
        pageNumber: 1

    }
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    showDetails = () => {
        this.setState({ details: !this.state.details })
    }
    handleview = (value) => () => {
        this.setState({ viewdata: value })
    }
    goToPrevPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
    goToNextPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

        
    render() {
        const { pageNumber, numPages } = this.state;
        return (
            <div>
                <Header name="Myprofile" />
                <div class="pfmain">
                    <div class="container pfcon  ">
                        <div class="row pfcol">

                            <div class="col-md-2 " >
                                <img src={require("../Images/image2.jpg")} class="pfimg" />
                            </div>
                            <div class="col-md-5 pcol">

                                <h1 className="name1">Giribabu Kondaveeti</h1>
                                <h6>Front-End developer</h6>
                                <button class="btn btn-outline-success btn-sm" onClick={this.showDetails} >contact</button>
                                {this.state.details ? <div className="animated" >
                                    Ph.no : <span class="phno">9666604064</span><br />
                                    Gmail : <span class="gmail">giribabu43@outlook.com</span>
                                </div> : null}
                            </div>
                            <div class="col-md-5">
                                <div className="my-details">
                                    <i class="fa fa-clock-o"></i><span class="full">Available : full-Time </span> <br />
                                    <i class="fa fa-birthday-cake"></i> <span class="full">Age : 22</span> <br />
                                    <h6><i class="fa fa-map-marker" aria-hidden="true"></i><span class="full">Location : Bangalore,India</span> </h6>
                                </div>

                                <div class="wrapper">
                                    <ul className="list-icons">
                                        <div href="" class="social-icon fb">
                                            <a href="https://www.facebook.com/giribabu43" target="_blank" > <i className="fa fa-facebook"></i></a>

                                        </div>
                                        <div href="#" class="social-icon twitter">
                                            <a href="https://twitter.com/giribabu43" target="_blank">  <i className="fa fa-twitter"></i></a>
                                        </div>
                                        <div href="#" class="social-icon linkedin">
                                            <a href="https://www.linkedin.com/in/kondaveeti-giribabu-6a938a137/" target="_blank" >  <i className="fa fa-linkedin"></i></a>
                                        </div>
                                        <div class="social-icon insta">
                                            <a href="https://www.instagram.com/giribabu43/" target="_blank"><i className="fa fa-instagram"></i></a>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="container pfcont">
                        <div className="row">
                            <div className="col-md-12 pfnavs">
                                <ul class="nav nav-tabs">
                                    <li class="nav-item">
                                        <a className={`nav-link ${this.state.viewdata === 'profile' ? 'active' : null}`} onClick={this.handleview('profile')}>Profile</a>
                                    </li>
                                    <li class="nav-item">
                                        <a className={`nav-link ${this.state.viewdata === 'cv' ? 'active' : null}`} onClick={this.handleview('cv')}>CV/Resume</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        {this.state.viewdata === 'profile' ? <div class="row">


                            <div class="col-md-3">
                                <div class=" hobby">
                                    <h6>Hobbies</h6>
                                    <i class="fa fa-globe pfb"></i> Browsing<br />
                                    <i class="fa fa-cutlery pfc"></i>Playing Games<br />
                                    <i class="fa fa-music pfm"></i>Music

                         </div>

                            </div>
                            <div class="col-md-6 about">
                                <h6 class="pfab">ABOUT</h6>
                                <p class="pfpara">
                                    I am Giribabu Kondaveeti from AndhraPradesh and currently staying in Banglore.
                                        Coming to my education qualification , I have completed my graduation in the stream of Mechanical Engineering from Qis College.
                                        I am proffesionally traine UI developer. I can learn any  new technology quickly. I believe in group work
                                        I am adaptable to work in any environment. My strengths are positive attitude, coming to my hobbies are browsing,cooking,lesining music.
                                        That's all about me.
                         </p>
                                <hr />

                                <h6 class="pfskills">Skills</h6>
                                <button class="btnre form-control">Reactjs</button>
                                <button class="btnre form-control">UI Developer</button>
                                <button class="btnre form-control">Redux</button>
                                <button class="btnre form-control">HTML</button>
                                <button class="btnre form-control">CSS</button>
                                <button class="btnre form-control">BootStrap</button>
                                <button class="btnre form-control">Javascript</button>
                                <hr />
                                <h4 class="pflang">Languages</h4>
                                <i class="fa fa-language"></i><span class="lang1">Telugu</span>
                                <i class="fa fa-language"></i><span class="lang2">English</span>
                                <i class="fa fa-language"></i><span class="lang3">Hindi </span>
                                <hr />

                            </div>
                            <div class="col-md-3">

                            </div>

                        </div> : <div><Document
                            file={resume}
                            onLoadSuccess={this.onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>
                                <p className="text-center">Page {pageNumber} of {numPages}</p>
                                <div className="text-center">
                                    <button className="btn btn-primary m-r-10" disabled={pageNumber <= 1} onClick={this.goToPrevPage}><i class="fa fa-arrow-left"></i> &nbsp;Prev</button>
                                    <button className="btn btn-primary " disabled={pageNumber > numPages - 1} onClick={this.goToNextPage}>Next <i class="fa fa-arrow-right"></i> &nbsp; </button>
                                </div>
                            </div>}


                    </div>




                </div>

            </div>
        );
    }
}

export default Myprofile;