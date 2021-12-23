import React from 'react';

import {
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
} from '@arithaconsulting/apf_component_library';

const DashboardView = () => {
  return (
    <>
      <Row xs="1">
        <Col>
          <Row>
            <Col>
              <Card border>
                <CardHeader>
                  <span className="px-2">Card 1</span>
                </CardHeader>
                <CardBody>
                  <h4>Card Body</h4>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card border>
                <CardHeader>
                  <span className="px-2">Card 2</span>
                </CardHeader>
                <CardBody>
                  <h4>Card Body</h4>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card border>
                <CardHeader>
                  <span className="px-2">Card 3</span>
                </CardHeader>
                <CardBody>
                  <h4>Card Body</h4>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default DashboardView;
