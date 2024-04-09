import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div>
      <div className='d-flex justify-content-between bg-dark text-light p-5'>
        <div className="w-25">
          <h3>ReduxCart 2024</h3>
          <p style={{textAlign:'justify'}}>ReduxCart website should be easy to use and navigate, and it should have a clear and concise product description. The product description should highlight the benefits of the product, and it should be persuasive enough to convince the customer to buy it</p>
        </div>
        <div className="w-25 text-center">
          <h3>Links</h3>
          <Link to={'/wish'} className="d-block mb-3 mt-3 text-secondary">Whishlist</Link>
          <Link to={'/cart'} className='text-secondary' >Cart</Link>
        </div>
        <div className="w-25">
          <h3>Refrences</h3>
          <a href="https://react-bootstrap.netlify.app/" className='d-block mt-3 mb-3 text-secondary'>React Bootstrap</a>
          <a href="https://react.dev/" className='d-block mb-3 text-secondary'>React</a>
          <a href="https://redux.js.org/" className='text-secondary'>Redux</a>
        </div>
        <div className="w-25">
          <h3>Contact Us</h3>
          <p>Submit your Email,so we can contact you..</p>
          <input type="text" className='form-control' placeholder='Enter Email Id' name="" id="" />
          <button className='btn btn-outline-light mt-3'>Submit</button>
        </div>
        

      </div>
      <p className='text-center'>ReduxCart 2024 &copy; All Rights Riserved</p>
    </div>
    
    </>
  )
}

export default Footer