import React from "react"
import { Link } from "gatsby"
// css
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container,Row,Col,Card,CardBody,ButtonGroup,Button,CardTitle,Spinner} from "reactstrap"
import {FaReact,FaFacebookF,FaRedditAlien,FaPinterestP,FaInstagram,FaTwitter,FaVuejs,FaPython,FaNode, FaNodeJs} from "react-icons/fa"
// components
import NavBar from "../components/Nav" 
import SV from "../images/SV.png"



const IndexPage = () => (
  <div>
    <br/>
    <Container>
    
    
    
    <Card>
    <br/>
    <CardBody>
    <NavBar/>
    <br/>
    <br/>
    <Row>
      <Col  xs="12" md="5" sm="5" lg="4" >
      <Card className="ResumeCard " body outline color="dark" >
      
      <img className="top-image-center" src={SV}/>
     
      <br/>
      <hr/>
      <ButtonGroup>
       
        <Button size="sm" href="https://www.facebook.com/SVSKHD" target="_blank" outline color="dark">
            <FaFacebookF size={25}/>
        </Button>
      
        <Button size="sm" href="https://www.reddit.com/user/SVSKHD" target="_blank" outline color="dark">
          <FaRedditAlien size={25}/>
        </Button>
        <Button size="sm" href="https://in.pinterest.com/SVSKHD/_created/" target="_blank" outline color="dark">
          <FaPinterestP size={25}/>
        </Button>
        <Button size="sm" href="https://www.instagram.com/8svskhd/" target="_blank" outline color="dark">
          <FaInstagram size={25}/>
        </Button>
        <Button size="sm" href="https://twitter.com/hitesh_svsk" target="_blank" outline color="dark">
          <FaTwitter size={25}/>
        </Button>

      </ButtonGroup>
           
      </Card>
      </Col>
      

      {/* technologies */}
      
      <Col className="ISH" xs="12" md="7" sm="7" lg="8">
      <Card body outline color = "dark">
      <Row>

      <Col>
      <div className="ISH">
      <Card body inverse color="info">
        <CardTitle tag="h5">FrontEnd Technoolgies</CardTitle>
        <ButtonGroup>
        <Button size="sm" outline color="light"><FaReact size={25}/> 2years</Button>
        <Button size="sm" outline color="light"><FaVuejs size={25}/> beginner </Button>
        </ButtonGroup>
      </Card>
      </div>
      </Col>

      <Col>
      <div className="ISH">
      <Card body inverse color="warning">
        <CardTitle className="backend" tag="h5">BackEnd Technoolgies</CardTitle>
        <ButtonGroup>
        <Button size="sm" outline color="dark"><FaNodeJs size={25}/> 2years</Button>
        <Button size="sm" outline color="dark"><FaPython size={25}/> 1 year </Button>
        </ButtonGroup>
      </Card>
      </div>
      </Col>

      </Row>
      <div>
      <br/>
      <h3>Projects</h3>
      <Spinner type="grow" color="dark"/>
      </div>
      </Card>
      </Col>
   

    </Row>   



    </CardBody>
    </Card>
    </Container>
  </div>
)

export default IndexPage
