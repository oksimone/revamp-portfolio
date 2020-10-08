import React from "react";
import { MDBContainer, MDBRow, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol} from 'mdbreact';

const Socials = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol>
    <MDBCol>
      <MDBCard style={{ width: "34rem" }}>
    
        <MDBCardBody>
          <MDBCardTitle>Get Connected with Kristian</MDBCardTitle>
          <MDBCardText>
            Click on of the links below to get connected with my social media accounts. OR, click the email button to send me an email.
          </MDBCardText>
          <MDBBtn href="#">Email me</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
    };

    export default Socials;
