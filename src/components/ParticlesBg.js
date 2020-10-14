// const { Component } = require("react")
import React, { Component } from "react";
import Particles from "react-particles-js";
import Header from './Header/Header'


class ParticlesBg extends Component {
  state = { width: "0px", height: "0px" };
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    this.setState({
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`
    });
  };
  render() {
    const { width, height } = this.state;
    console.log(width, height);
    return (
   
      
      <Particles
        {...this.state}
        params={{
          particles: {
            number: {
              value: 90,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "star",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: { nb_sides: 5 },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 0.7,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#fffff",
              opacity: 0.4,
              width: 1,
              condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600
              }
            },
            move: {
              enable: true,
              speed: 4,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false
              },
              onclick: {
                enable: false
              },
              resize: true
            }
          },
          retina_detect: true
        }}
        
      />

    );
  }
}

export default ParticlesBg;
