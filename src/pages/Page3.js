import React, { useEffect,useState } from 'react';
import {
  Container,
  Input,
  Form,
  FormGroup,
  FormText,
  Label,
  Button,
  Checkbox,
  FormFeedback
} from '@arithaconsulting/apf_component_library';
import { bifrostPortal } from '@arithaconsulting/apf_api_binder';



function Page3() {
    const domainName = 'mantisSwagger';
    const operationId = 'createProject';
    let [projectName,setprojectName] = useState("");
    let [projectDescription,setprojectDescription] = useState("");

    const optionsData={
       data: {

        // id: 100,
        
        name: projectName,
        
        status: {
        
        id: 10,
        
        name: "development",
        
        label: "development"
        
        },
        
        description: projectDescription,
        
        enabled: true,
        
        file_path: "/tmp/",
        
        view_state: {
        
        id: 10,
        
        name: "public",
        
        label: "public"
        
        }
        
        
      }
    }
    const getToken = '';
    const [inputObj,setinputObj]= useState("");
   
    
    const handleChange=(field,value)=>{
let tempinputObj = {...inputObj}
tempinputObj[field] = value;
    }
    

    const handleSubmit=(e)=>{
      e.preventDefault();
      bifrostPortal(domainName, operationId, optionsData, getToken, false);
      
    }

    return (
  <Container fluid>
    {/* <h2 className="page-header">Page 4</h2> */}
    <div className="row">
      <div className="col-md-6">
    <Form
    className="border p-3 shadow-sm"
    onSubmit={function noRefCheck(){}}
  >
    <FormGroup>
      <FormText>
        Project Creation
      </FormText>
    </FormGroup>
    <FormGroup>
      <Label
        className="fs-6"
        name="Name"
      />
      <Input
        block
        name="projectName"
        placeholder="name"
        onChange={(e)=>{setprojectName(e.target.value)}}
      />
    </FormGroup>
    <FormGroup>
      <Label
        className="fs-6"
        name="Description"
      />
      <Input
            block
            name="description"
            className="fs-6"
        placeholder="description"
        onChange={(e)=>{setprojectDescription(e.target.value)}}
      />
     
    </FormGroup>
    {/* <Checkbox
    label="Enable"
    onChange={function noRefCheck(){}}
    value=""
  />    */}
    <FormGroup>
      <Button
        block
        color="success"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Submit
      </Button>
    </FormGroup>
  </Form>
  </div>
  </div>
  </Container>
    )
};

export default Page3;
