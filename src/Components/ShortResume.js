import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import ibmlogo from "../images/ibmresearchlogo.jpg";
import mitlogo from "../images/mitlllogo.jpg";
import kvhlogo from "../images/kvhlogo.jpg";
import optumlogo from "../images/optumlogo.jpg";
import beaverworkslogo from "../images/beaverworkslogo.png";

class ShortResume extends Component {
  render() {
    return (
      <Grid className="landing-grid">
        <Cell col={12}>
          <div className="banner-text">
            <br />
            <h3>Here are some places I've worked.</h3>
            <br />
            <br />
            <img className="resume-images" src={ibmlogo} alt="ibm" />
            <div className="subTitle">IBM Research</div>
            <div className="date">Aug '20 - Present</div>
            <p style={{ width: "40%", margin: "auto" }}>
              At IBM Research, I develop tools that help researchers manage
              their projects and collaborate.
            </p>
            <br />
            <br />
            <br />
            <Grid>
              <Cell col={6}>
                <img className="resume-images-light" src={mitlogo} alt="mit" />
                <div className="subTitle">MIT Lincoln Laboratory</div>
                <div className="date">Mar '19 - Aug '20</div>
                <p>
                  I helped create GIS applications for organizing and displaying
                  large amounts of geographic data from a browser.
                </p>
              </Cell>
              <Cell col={6}>
                <img className="resume-images" src={kvhlogo} alt="kvh" />
                <div className="subTitle">KVH</div>
                <div className="date">Summer '18</div>
                <p>
                  As an intern at KVH, I worked on the odomotry for an early
                  autonomous aquatic vehicle project using the NVIDIA Drive PX2.
                  I also worked on the video player and UI for a streaming
                  service targeted for ship crews.
                </p>
              </Cell>
            </Grid>
            <br />
            <br />
            <br />
            <Grid>
              <Cell col={6}>
                <img
                  className="resume-images-light"
                  src={optumlogo}
                  alt="optum"
                />
                <div className="subTitle">Optum</div>
                <div className="date">Summer '17</div>
                <p>
                  I'm currently working as a Full Stack Software Engineer at IBM
                  Research on internal project management tools.
                </p>
              </Cell>
              <Cell col={6}>
                <img
                  className="resume-images-light"
                  src={beaverworkslogo}
                  alt="beaverworks"
                />
                <div className="subTitle">MIT Beaver Works</div>
                <div className="date">Mar '19 - Aug '20</div>
                <p>
                  Through collaboration with MIT, I helped teach kids about
                  beginner programming principles and robotics.
                </p>
              </Cell>
            </Grid>
            <br />
            <br />
            <br />
            <br />
            <hr />
            <br />
            <br />
            <h2>School</h2>
            <p>
              I graduated from the University of Massachusetts Amherst with a
              Bachelors of Science in Computer Science in 2018
            </p>
            <br />
            <br />
            <p>
              My favorite courses in School were always about Robotics and
              Algorithms
            </p>
            <br />
            <br />
          </div>
        </Cell>
      </Grid>
    );
  }
}
export default ShortResume;
