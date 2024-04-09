import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addTocart } from '../redux/slice/cartSlice'
import { addtowishlist } from '../redux/slice/wishListsSlice'


function Details() {
    const [data,setdata]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        setdata(JSON.parse(localStorage.getItem("responce")).find(item=>item.id==id))
    },[])
    const dispacth=useDispatch()
   
  return (
    <>
     <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={data?.thumbnail} alt="..." /></div>
                    <div className="col-md-6">
                        <div className="small mb-1">{data?.brand}</div>
                        <h1 className="display-5 fw-bolder">{data?.title}</h1>
                        <div className="fs-5 mb-5">
                            
                            <span>${data?.price}</span>
                        </div>
                        <p className="lead">{data?.description}</p>
                        <div className="d-flex">
                            <button className="btn btn-outline-dark flex-shrink-0" onClick={()=>{dispacth(addTocart(data))}} type="button">
                                {/* <i className="bi-cart-fill me-1"></i> */}
                                <i className="fa-solid fa-cart-plus fa-xl" style={{color:'green'}}></i>
                            </button>
                            <button  className="btn btn-outline-dark flex-shrink-0 ms-2" onClick={()=>{dispacth(addtowishlist(data.id))}}>
                            <i class="fa-solid fa-heart-circle-plus fa-xl" style={{color:'#ff0a0a'}}></i>
                           

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    </>
    
  )
}

export default Details