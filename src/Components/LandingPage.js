import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ShortResume from './ShortResume';
import ProjectsSummary from './ProjectsSummary';
import photo from '../images/resumePhoto2.png';

class LandingPage extends Component {
    render() {
        return (
            <div className = "background" style= {{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src = {photo}
                            className = "avatar-img"
                        />
                        <div className = "banner-text">
                            <h1>Software Engineer</h1>
                        <hr/>
                        
                        <br/>
                        <p>Hello! My name is Harrison and this is my website which I made to share my resume and some of my projects.</p>
                        <br/>
                        <div className="social-links">
                            <a href="http://google.com" target="_blank" rel = "noopener noreferrer">
                                <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>
                            <a href="http://google.com" target="_blank" rel = "noopener noreferrer">
                                <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>
                            <a href="http://google.com" target="_blank" rel = "noopener noreferrer">
                                <i className="fa fa-free-code-camp"  aria-hidden="true" />
                            </a>
                            <a href="http://google.com" target="_blank" rel = "noopener noreferrer">
                                <i className="fa fa-youtube-square"  aria-hidden="true" />
                            </a>
                            </div>
                        
                        </div>
                    </Cell>
                </Grid>
        <ShortResume/>
        <ProjectsSummary/>
            </div>
        )
    }

}
export default LandingPage;