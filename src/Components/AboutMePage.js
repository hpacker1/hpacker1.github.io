import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from './Skills';

class AboutMePage extends Component {
  render() {
    return (
      <div>
        <h1>About Me Page</h1>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Harrison Packer</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "15%" }} />
            <p>
              wlefihasduyfbadsudhbfduaksdvdbkgasdvcdkugsbdfuyahbsddviuahslivubdanlsiduvb
              wlefihasduyfbadsudhbfduaksdvdbkgasdvcdkugsbdfuyahbsddviuahslivubdanlsiduvb
              wlefihasduyfbadsudhbfduaksdvdbkgasdvcdkugsbdfuyahbsddviuahslivubdanlsiduvb
              wlefihasduyfbadsudhbfduaksdvdbkgasdvcdkugsbdfuyahbsddviuahslivubdanlsiduvb
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "15%" }} />
            <h5>Address</h5>
            <p>1 Hacker Way, Menlo Park </p>
            <h5>Phone</h5>
            <p>433 433 4333 </p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>www.someone@example.com</p>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2012}
              endYear={2018}
              schoolName={"UMass Amherst"}
              schoolDescription={"This is a school"}
            />
            <Education
              startYear={2012}
              endYear={2018}
              schoolName={"UMass Amherst"}
              schoolDescription={"This is a school"}
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Experience</h2>
            <Experience
              startYear={2012}
              endYear={2018}
              jobName={"UMass Amherst"}
              jobDescription={"This is a school"}
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>
            <Skills skill={"TypeScript"} progress={75}/>
            <Skills skill={"React"} progress={75}/>
            <Skills skill={"HTML/CSS"} progress={50}/>
            <Skills skill={"Python"} progress={80}/>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default AboutMePage;
