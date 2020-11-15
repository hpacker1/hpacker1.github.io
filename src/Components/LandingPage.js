import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ShortResume from './ShortResume';

class LandingPage extends Component {
    render() {
        return (
            <div className = "background" style= {{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F145908%2Fpreview2%2F52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg&imgrefurl=https%3A%2F%2Fwww.vexels.com%2Feditables%2Fpreview%2F145908%2Fmale-avatar-maker&tbnid=gnzAlFgJH0wErM&vet=12ahUKEwiuwOvE0_TsAhVliOAKHY36CUkQMygbegUIARDzAQ..i&docid=z2wdIE_l5xR7vM&w=618&h=570&q=avatar%20picture&ved=2ahUKEwiuwOvE0_TsAhVliOAKHY36CUkQMygbegUIARDzAQ"
                            alt = "avatar"
                            className = "avatar-img"
                        />
                        <div className = "banner-text">
                            <h1>Software Engineer</h1>
                        <hr/>
                        <p>Hello! My name is Harrison and this is my website which I made to share my resume and some of my projects.</p>
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
            </div>
        )
    }

}
export default LandingPage;