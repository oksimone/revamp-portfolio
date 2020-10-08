import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React from 'react';
import '../Projects/Projects.css';
import image from "../Projects/image.png"
import cocktellme from '../Projects/cocktellme.png'
import goodburger from '../Projects/goodburger.png'


function Projects (){
    return(
        <MDBContainer className = "container">
            <MDBRow>
                <MDBCol>
                  <h6 style = {{marginLeft: "25%"}}>Project 2 - Pandemic Playlist</h6>
                  <p style = {{marginLeft: "40%"}}>  <a href = "https://thawing-beyond-59803.herokuapp.com/"> Deployed</a> </p> 
                  <p style = {{marginLeft: "42%"}}> <a href = "https://github.com/oksimone/project2"> Github </a></p>
                  <img fluid src = {image} style = {{height:"220px", width: "420px"}}/>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol style = {{marginTop: 30}}>
                <h6 style = {{marginLeft: "30%"}}>Project 1 - CockTellMe</h6>
                  <p style = {{marginLeft: "40%"}}>  <a href = "https://oksimone.github.io/cocktellme/"> Deployed</a> </p> 
                  <p style = {{marginLeft: "42%"}}> <a href = "https://github.com/oksimone/cocktellme"> Github </a></p>
                  <img fluid src = {cocktellme} style = {{height:"220px", width: "420px"}}/>
                </MDBCol>
            </MDBRow>
             <MDBRow>
                <MDBCol style = {{marginTop: 30}}>
                <h6 style = {{marginLeft: "29%"}}>Assignment - Goodburger</h6>
                  <p style = {{marginLeft: "40%"}}>  <a href = "https://peaceful-ocean-64199.herokuapp.com/"> Deployed</a> </p> 
                  <p style = {{marginLeft: "42%"}}> <a href = "https://github.com/oksimone/burger"> Github </a></p>
                  <img fluid src = {goodburger} style = {{height:"220px", width: "420px"}}/>
                </MDBCol>
            </MDBRow>
           
             
        </MDBContainer>
    )
}

export default Projects