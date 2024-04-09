import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { searchproduct } from '../redux/slice/productSlie';


function Hrader() {
  const {wishlist}= useSelector(state=>state.wishlistReducer)
  const cart=useSelector(state=>state.cartreducer)
  const dispacth=useDispatch()


  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
            <Link to={'/'} className='text-decoration-none text-dark'>
            <i className="fa-solid fa-cart-shopping" style={{color:'#000000'}}></i>
            ReduxCart

            </Link>
       
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link className='btn  me-3'>
             <input type="text" className='form-control' onChange={(e)=>{dispacth(searchproduct(e.target.value.toLowerCase()))}} placeholder='Enter product Name' />
            </Nav.Link>
            <Nav.Link className='btn border border-dark me-3'>

              <Link to={'/cart'}>
                <i className="fa-solid fa-cart-plus me-2"></i>Cart
                <Badge bg="info" className='ms-2'>{cart.length}</Badge>
                </Link>
            </Nav.Link>
            <Nav.Link className='btn border border-dark '>
              <Link to={'/wish'}>
                <i className="fa-solid fa-heart me-2"></i>Wishlist<Badge bg="danger" className='ms-2'>{wishlist.length}</Badge>
              </Link>
            
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Hrader