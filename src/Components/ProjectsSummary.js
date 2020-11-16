import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";


class ProjectsSummary extends Component {
  render() {
    return (
      <Grid className="landing-grid">
        <Cell col={12}>
          <div className="banner-text">
            <br />
            <h3>Here are some of my favorite projects</h3>
            <p>I'll be posting summaries of my favorite projects here. In addition
                you can find presentions and live demoes of some projects in the Projects tab
                at the top. I'm in the process of looking back through old files and 
                repositories so stay tuned!
            </p>
            <br/>
            <br/>
            <br/>
            <br/>
            
          </div>
        </Cell>
      </Grid>
    );
  }
}
export default ProjectsSummary;
