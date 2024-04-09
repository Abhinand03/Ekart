import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removewishlist } from '../redux/slice/wishListsSlice'
import { addTocart } from '../redux/slice/cartSlice'
function Wishlist() {
  const {wishlist}=useSelector((state)=>state.wishlistReducer)
  console.log(wishlist);
  const dispacth = useDispatch()
  const handleCart=(product)=>{
    dispacth(removewishlist(product.id))
    dispacth(addTocart(product))
  }
 


  return (
    <>
      <div className="container p-5">
        <Row>
          {
            wishlist?.length>0?
            wishlist.map(item=>(
              <Col sm={12} md={6} lg={4} xl={2}>
            <Card>
              <Link to={`/detail/${item.id}`}>
              <Card.Img height={"150px"} src={item.thumbnail} />

              </Link>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>${item.price}</Card.Text>
                <div className='d-felx justify-content-between'>
                  <button className='btn border me-3' onClick={()=>handleCart(item)}><i class="fa-solid fa-cart-plus fa-xl " style={{ color: 'green' }}></i></button>
                  <button className='btn border'  onClick={()=>{dispacth(removewishlist(item?.id))}}><i class="fa-solid fa-heart-circle-xmark" style={{ color: '#cf0707' }}></i></button>

                </div>

              </Card.Body>

            </Card>

          </Col>

            ))
            
            
            :
          <h1>Wshish list not Added</h1>

          }
         
        </Row>

      </div>

    </>
  )
}

export default Wishlist