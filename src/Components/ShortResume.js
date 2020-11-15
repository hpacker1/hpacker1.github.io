import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import ibmlogo from "../images/ibmresearchlogo.jpg";
import mitlogo from "../images/mitlllogo.jpg";
import kvhlogo from "../images/kvhlogo.jpg";
import optumlogo from "../images/optumlogo.jpg";

class ShortResume extends Component {
  render() {
    return (
      <Grid className="landing-grid">
        <Cell col={12}>
          <div className="banner-text">
            <br />
            <h3>Here are some places I've worked.</h3>

            <img className="resume-images" src={ibmlogo} alt="ibm" />
            <p style={{ width: "50%", margin: "auto" }}>
              I'm currently working as a Full Stack Software Engineer at IBM
              Research on internal project management tools.
            </p>
            <Grid>
              <Cell col={6}>
                <img className="resume-images" src={mitlogo} alt="ibm" />
                <p style={{ width: "50%", margin: "auto" }}>
                  I'm currently working as a Full Stack Software Engineer at IBM
                  Research on internal project management tools.
                </p>
              </Cell>
              <Cell col={6}>
                <img className="resume-images" src={kvhlogo} alt="ibm" />
                <p>I interned at Optum for one summer</p>
              </Cell>
            </Grid>
            <Grid>
              <Cell col={6}>
                <img className="resume-images" src={optumlogo} alt="ibm" />
                <p style={{ width: "50%", margin: "auto" }}>
                  I'm currently working as a Full Stack Software Engineer at IBM
                  Research on internal project management tools.
                </p>
              </Cell>
              <Cell col={6}>
                <img className="resume-images" src={kvhlogo} alt="ibm" />
                <p>I interned at Optum for one summer</p>
              </Cell>
            </Grid>

            <hr />
            <h3>School</h3>
            <p>
              I graduated from the University of Massachusetts Amherst with a
              Bachelors of Science in Computer Science
            </p>
          </div>
        </Cell>
      </Grid>
    );
  }
}
export default ShortResume;
