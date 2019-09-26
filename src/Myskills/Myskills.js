import React, { Component } from 'react';
import Header from '../Components/Header';
import './Myskills.css';


class Myskills extends Component {
    render() {
        return (
            <div className="qualification">

                <Header name="Myskills" />
                <div className="container">

                    <h3 className="head">My Skills In Web Development </h3>
                    <h6 className="head1">
                        the best skills in UI design to build pleasent web site
                </h6>
                    <div className="row">
                        <div className="col-md-4 ">
                            <div className="box">

                                <img src={require("../Images/react.png")} className="imgg" />
                                <h5 className="skr">React</h5>
                                <p className="para1"> I am fairly new to React .
                                It has grown on me though and I will
                                   continue to use it going forward. I have built a ReactJS based
                                  resume-website template which I used as
                            a starting point for this personal site.</p>
                            </div>

                        </div>
                        <div className="col-md-4 ">
                            <div className="box">
                                <img src={require("../Images/html.png")} class="imgg" />
                                <h5 className="skr">HTML</h5>
                                <p className="para1">HTML
                                As i know that every web developer
                                starts his carrier by studying about HTML
                                HTML describes the structure of a web page
                                 semantically and originally included
                             cues for the appearance of the document.</p></div>

                        </div>
                        <div className="col-md-4 ">
                            <div className="box">
                                <img src={require("../Images/css.png")} class="imgg" />
                                <h5 className="skr">CSS</h5>
                                <p className="para1">CSS is designed to enable the separation of
                                   presentation and content, including layout,
                                    colors, and fonts
                            and reduce complexity and repetition in the structural content.</p>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 ">
                            <div className="box">
                                <img src={require("../Images/javascript.png")} class="imgg" />
                                <h5 className="skr">JavaScript</h5>
                                <p className="para1">JavaScript :
                                JavaScript enables interactive web pages and
                                is an essential part of web applications.
                                The vast majority of websites use it and
                            major web browsers have a dedicated JavaScript engine to execute it.</p>
                            </div>

                        </div>
                        <div className="col-md-4 ">
                            <div className="box">
                                <img src={require("../Images/bootstrap.png")} class="imgg" />
                                <h5 className="skr">Bootstrap</h5>
                                <p className="para1">Bootstrap 4 :
                                        I use Bootstrap more often than
                                      not when designing the layout for my
                                      sites. It is the framework I am most
                                     familiar with and can therefore design
                                 more quickly than with others.</p>
                            </div>

                        </div>
                        <div className="col-md-4 ">
                            <div className="box">
                                <img src={require("../Images/github.jpg")} class="imgg" />
                                <h5 className="skr">GIT</h5>
                                <p className="para1">Git
                                    I use Git for all of my projects
                                    so far. I have used Git for version
                                     control in small teams and have toyed
                                around with contributing to Open Source Projects.</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Myskills;