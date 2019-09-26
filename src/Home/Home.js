import React, { Component } from 'react';
import Header from '../Components/Header';
import './Home.css';
import ReactTypingEffect from 'react-typing-effect';
class Home extends Component {
    render() {
        return (
            <div className="pcr">
                <div className="pcr1">
                    <Header  name="Home"/>

                    <div className="container declare" >
                        <div className="row">
                            <div className="vertical">
                                <h2 className="love">I Love To Design</h2>
                                <h1 className="headline">

                                    <span className="cd-words-wrapper" >
                                        <ReactTypingEffect
                                            text={["Giribabu", "A Web Developer", "A Designer"]}
                                            eraseDelay={400}
                                            staticText={<span class="i">  I AM</span>}
                                            className='typing'//text=["Hello.", "World!"]
                                        />
                                    </span>
                                </h1>
                            </div>
                        </div>
                        <footer>

                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;