import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

function Login() {
  return (
    <MDBContainer className="p-5 my-5 h-custom">

      <MDBRow className="justify-content-center">

        <MDBCol col='4' md='3'>

          <div className="d-flex flex-row align-items-center justify-content-center">

            <p style={{color: "#ffc300"}} className="lead fw-bold mb-0 me-3">Sign in with</p>

            <MDBBtn color="none" floating size='md' tag='a' className='me-2'>
              <MDBIcon fab icon='facebook-f' size="md" />
            </MDBBtn>

            <MDBBtn color="none" floating size='md' tag='a'  className='me-2'>
              <MDBIcon fab icon='twitter' size="md" />
            </MDBBtn>

            <MDBBtn color="none" floating size='md' tag='a'  className='me-2'>
              <MDBIcon fab icon='google' size='md'/>
            </MDBBtn>

          </div>

          <div className="divider d-flex align-items-center my-3 justify-content-center">
            <p className="text-center fw-normal mx-5 mb-0">or</p>
          </div>
          
          <MDBInput wrapperClass='mb-3' label='Email address' id='formControlLg' type='email' size="md"/>
          <MDBInput wrapperClass='mb-3' label='Password' id='formControlLg' type='password' size="md"/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-5'>
            <MDBBtn className="mb-0 px-5" size='md'>Login</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/register-customer" className="link-danger">Register</a></p>
          </div>

        </MDBCol>

      </MDBRow>


    </MDBContainer>
  );
}

export default Login;