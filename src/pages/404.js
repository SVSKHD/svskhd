import React from "react"
import "./styles.css"
import {Jumbotron,Container} from "reactstrap"


const NotFoundPage = () => (
<div>
<div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Sorry This page isn't available</h1>
        </Container>
      </Jumbotron>
    </div>

</div>
)

export default NotFoundPage
