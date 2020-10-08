import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React from 'react';
import '../Projects/Projects.css';
import image from "../Projects/image.png"

function Projects (){
    return(
        <MDBContainer className = "container">
            <MDBRow>
                <MDBCol>
                  <h6>Project 2</h6>
                  <p>  <a href = "INSERT SITE"> Deployed</a> </p> 
                  <p> <a href = "INSERT SITE"> Github </a></p>
                  <img fluid src = {image} style = {{height:"220px", width: "420px"}}/>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol>
                  <h6>Project 2</h6>
                  <p>  <a href = "INSERT SITE"> Deployed</a> </p> 
                  <p> <a href = "INSERT SITE"> Github </a></p>
                  <img fluid src = {image} style = {{height:"220px", width: "420px"}}/>
                </MDBCol>
            </MDBRow>
             <MDBRow>
                <MDBCol>
                  <h6>Project 2</h6>
                  <p>  <a href = "INSERT SITE"> Deployed</a> </p> 
                  <p> <a href = "INSERT SITE"> Github </a></p>
                  <img fluid src = {image} style = {{height:"220px", width: "420px"}}/>
                </MDBCol>
            </MDBRow>
           
             
        </MDBContainer>
    )
}

export default Projects