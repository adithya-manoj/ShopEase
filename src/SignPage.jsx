import React from 'react'
import signup from './Images/signup.jpg'
import './Styles/SignPage.css'

const SignPage = () => {
  return (
   <>
      <div className='bg-white text-dark d-flex p-5 m-1 vh-100'>

        <div><h2>Sign Up</h2></div>

        <div className='inputs p-4'>
          
          <div className='input_item'>
            <h5>Name</h5>
            <input type="text" name="name" id="name" />
          </div>
          <div className='input_item'>
            <h5>Email</h5>
            <input type="e-mail" name="email" id="email" />
          </div>
          <div className='input_item'>
            <h5>Enter Password</h5>
            <input type="password" name="password" id="password" />
          </div>
          <div className='input_item'>
            <h5>Confirm Password</h5>
            <input type="password" name="cpassword" id="cpassword" />
          </div>
          <div className='input_item'>
            <h5>Mobile</h5>
            <input type="text" name="phone" id="phone" />
          </div>

          <div className='my-2'>
          <button type='submit' className='submitbutton'>Submit</button>
          </div>

        </div>


        </div>     
   
    </>
  )
}

export default SignPage