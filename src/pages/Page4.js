import React, { useEffect } from 'react';
import {
  Card,
  CardBody,
  Container,
  ReactBootstrapTable,
  Col,
  Row,
  Button,
} from '@arithaconsulting/apf_component_library';
import { bifrostPortal } from '@arithaconsulting/apf_api_binder';


const expandRow={
    expandColumnPosition: 'left',
    renderer: (row) => 
    <>
    <p>Project ID: { row.id}</p>
    <p>Project Name: { row.name}</p>
    <p>Status: { row.status.name}</p>
    <p>Project Label: { row.status.label}</p>
    <p>Project Description: { row.description}</p>

    </>,
    showExpandColumn: true
  }

function Page4() {
    const domainName = 'mantisSwagger';
    const operationIdget = 'getAllProjects';
    const operationIddelete = 'deleteProjectById';
    const optionsData='';
    const getToken = '';
    useEffect(()=>{
        getList();
    })
    

    const getList = () =>{
        bifrostPortal(domainName, operationIdget, optionsData, getToken, false);
    }

    function newcreate() {
      window.location = "/page2";
    }

    const handleDeletes = (e) =>{ 
      const delData = {params:{project_id:e.id}}
      bifrostPortal(domainName, operationIddelete, {params:{project_id:e.id}}, getToken, false);
      console.log("gu",bifrostPortal)
      
    }

    return (
  <Container fluid>
    <h2 className="page-header">Page 4</h2>
    <ReactBootstrapTable
  bordered
  columns={[
    {
      dataField: 'id',
      sort: true,
      text: 'Project ID'
    },
    {
      dataField: 'name',
      sort: true,
      text: 'Project Name'
    }
  ]}
  deleteCol
  domainName="mantisSwagger"
  editCol
  expandRow={expandRow}
  getToken={function noRefCheck(){}}
  handleDelete={handleDeletes}
  handleEdit={function noRefCheck(){}}
  headerCaption={<Row xs="1">
<Col className=""> 
  {/* <span style={{color: 'purple', textAlign: 'center'}}>Component as Header</span>} */}
</Col>
  <Col className="bg-white"> 
  <Button
    color="primary"
    onClick={newcreate}
  >
    Create 
  </Button></Col>
</Row>}
  isBasicAuth
  keyField="id"
  noDataIndicationMessage="No Data Available"
  numberOfPages={7}
  operationId="getAllProjects"
  resPath="projects"
  striped
/>
  </Container>
    )
};

export default Page4;
