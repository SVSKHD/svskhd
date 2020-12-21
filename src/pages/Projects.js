import React from "react"
import { Link } from "gatsby"
import {Container,Card,CardBody} from "reactstrap"
import NavBar from "../components/Nav"
import Footer from "../components/footer"


const Projects = () => (
<div>
    <br/>
    <br/>
    <Container>
    <Card>
    <CardBody>
    <NavBar/>
    <h1>Second Page</h1>
    </CardBody>
    </Card>
    <br/>
    <Footer/>
    </Container>
    
</div>
)

export default Projects
