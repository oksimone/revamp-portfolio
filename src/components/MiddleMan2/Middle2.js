import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import React from 'react'
import '../MiddleMan2/Middle2'

function Middle2 (){
    return(
<div className = "parallax">
<MDBContainer className = "container">
    <MDBRow>
        <MDBCol>
        <p style = {{alignSelf:"center", border:"1px solid black", fontSize:'35px', fontWeight:"bold", color:"white", marginTop:"180px"}}>
        Socials
      </p>
        </MDBCol>
    </MDBRow>
</MDBContainer>
</div>

    )
}

export default Middle2