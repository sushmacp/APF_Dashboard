import React from 'react';
import {
  Card,
  CardBody,
  Container,
  Button,
} from '@arithaconsulting/apf_component_library';
import { useHistory } from "react-router-dom";




function Logout(){
    console.log("ghkg")
    const history = useHistory();
        const onFailure = () => {  
            localStorage.removeItem("mantisSwagger-token")
            console.log(localStorage.getItem("mantisSwagger-token"));
            window.location = "/Login";
            };

        return(
  <Container fluid>
    {/* <h2 className="page-header">Page 2</h2> */}
    <div className="container">
    <p>Are you sure</p>
    <Button
    color="primary"
    onClick={onFailure}
  >
    OK
  </Button>
    </div>
  </Container>
        )
    }


export default Logout;
