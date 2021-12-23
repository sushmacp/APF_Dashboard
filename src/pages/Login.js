import React from 'react';
import { SmartLogin } from '@arithaconsulting/apf_component_library';
import { Link, Redirect } from 'react-router-dom';


function handleSubmit() {
  window.location = "/";
  console.log('sucess');
}

const onFailure = () => {
  console.log('failure');
};

export const Login = () => (
  <div className="container">
    <div className="row justify-content-center">
        <div className="col-md-offset-6 col-md-4 align-center mt-5">
    <SmartLogin
      domainName="mantisSwagger"
      keyLabel="username"
      onSuccess={handleSubmit}
      onFailure={onFailure}
      tokenPath="data.token"
    />
    </div>
  </div>
  </div>
);

export default Login;
