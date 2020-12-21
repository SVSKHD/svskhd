import React from "react"
import {Jumbotron,Container} from "reactstrap"

const Footer = () =>{
    return(
        <div className="Footerdiv">
        <Jumbotron className="Footer" fluid>
          <Container fluid>
            <h1 className="display-3">Resume</h1>
          </Container>
        </Jumbotron>
      </div> 
    )
} 
export default Footer