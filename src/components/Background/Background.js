import React from "react";
import Particles from "react-particles-js";
import "./Background.css";
export default class Background extends React.Component {
  render() {
    return (
      <Particles
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 800
              }
            }
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          margin: "0",
          position: "fixed"
        }}
        className="background"
      ></Particles>
    );
  }
}
