import React from 'react';
import './sign.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import { Link } from 'react-router-dom';




function SignUp() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();


  function handleSignUp() {
    // Save the user input values in local storage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    history.push('/');
  
  }
  
  
 

  

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'gold'}}>
          "Unlock a world    beauty with just one signature, join us today and let your journey begin."<br />
            <span style={{color: 'black'}}>Sign up today </span>
          </h1>

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
           
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

            <MDBRow>
    

  <MDBCol col='6'>
    <MDBInput
      wrapperClass='mb-4'
      label='First name'
      id='form1'
      type='text'
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
    />
  </MDBCol>

  <MDBCol col='6'>
    <MDBInput
      wrapperClass='mb-4'
      label='Last name'
      id='form2'
      type='text'
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
    />
  </MDBCol>
</MDBRow>

<MDBInput
  wrapperClass='mb-4'
  label='Email'
  id='form3'
  type='email'
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
<MDBInput
  wrapperClass='mb-4'
  label='Password'
  id='form4'
  type='password'
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>


              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck'color='black' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <Link to="/">
            <MDBBtn className='w-100 mb-4' color='gold' size='md' onClick={handleSignUp}>
                Sign Up
            </MDBBtn>
            </Link>



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

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default SignUp;