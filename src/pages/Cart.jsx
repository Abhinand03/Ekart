import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeFromCart,incQuantity,decQuantity } from '../redux/slice/cartSlice'
import { emptycart } from '../redux/slice/cartSlice'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const cart=useSelector(state=>state.cartreducer)
  console.log(cart);
   let total=0
  cart.map(item=>(
    total=item.price*item.quantity+total


  ))
  console.log(total);
  const dispacth=useDispatch()
  const navigate=useNavigate()

  const handlecheckout=()=>{
    dispacth(emptycart())
    alert("Checkout Completed")
    navigate('/')

  }

  const hanledecrese=(product)=>{
    if(product.quantity==1){
      dispacth(removeFromCart(product?.id))
    }
    else{
      dispacth(decQuantity(product?.id))
    }
  }
   
  
   
 


 
  
  return (
    <>
      <div className='container p-5'>
        <Row>
        <Col sm={12} md={8}>
            <h3>Cart Summery</h3>
            {
              cart.length>0?
              <table className='table table-borderd shadow'>
              <thead>

                <tr>
                  <th>ID</th>
                  <th>Product name</th>
                  <th>Product imge</th>
                  <th>Product Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>

          {
            
            cart?.map(item=>(
            
              
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>
                    <img height={'180px'} src={item.thumbnail} alt="" />
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <button className='btn' onClick={()=>{dispacth(incQuantity(item.id))}}>+</button>
                    <input type="text" name="" id="" value={item.quantity}  className='form-control'/>
                    <button className="btn" onClick={()=>hanledecrese(item)}>-</button>
                    </td>
                  <td>
                    <button className='btn' onClick={()=>{dispacth(removeFromCart(item.id))}}>
                
                    <i className='fa-solid fa-trash' style={{ color: 'red' }}></i>
                    </button>
                  </td>

                </tr>
                ))
          }
              </tbody>


            </table>
            :
            <h2 className='text-center mt-4 text-info'>No Cart Item </h2>
            }
           
            



          </Col>

           
          
          <Col sm={12} md={4}>
            <div className='border shadow p-5 mt-5'>
              <h3>Total Producr: <span className='text-info'>{cart.length}</span></h3>
              <h5>Total Price: <span className='text-warning'>${total}</span></h5>
            </div>
            <div className='d-grid mt-4'>

              <button onClick={handlecheckout}  className="btn btn-block btn-success p-2">CheckOut</button>
            </div>
          </Col>
        </Row>

      </div>
    </>
  )
}

export default Cart