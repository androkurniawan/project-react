import React from 'react';
import {MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon} from 'mdb-react-ui-kit';

function RegisterCustomer() {
  return (
    <MDBContainer className='p-4'>

      <MDBRow>

        <MDBCol md='7' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 style={{color: "#ffc300"}} className="my-5 display-5 fw-bold ls-tight px-3">
            Let's register your account, <br />
            <span className="display-5 text-secondary">you will have an extraordinary experience.</span>
          </h1>

        </MDBCol>

        {/* <MDBCol md='1'>  </MDBCol> */}

        <MDBCol md='4'>

          <MDBCard className='my-4'>
            <MDBCardBody className='p-4'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-2' label='Email' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-2' label='Phone' id='form1' type='text'/>
              <MDBInput wrapperClass='mb-2' label='Password' id='form1' type='password'/>
              <MDBInput wrapperClass='mb-2' label='Confirm Password' id='form1' type='password'/>

              <MDBBtn className='w-100 mb-2' size='md'>sign up</MDBBtn>

              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default RegisterCustomer;