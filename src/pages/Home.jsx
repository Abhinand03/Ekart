import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductThunk } from '../redux/slice/productSlie'
import { Spinner } from 'react-bootstrap'
import { addtowishlist } from '../redux/slice/wishListsSlice'
import { addTocart } from '../redux/slice/cartSlice'
import { onNavigateNext,onNavigateprev } from '../redux/slice/productSlie'

function Home() {


    const dispacth = useDispatch()
    const { product, loading, error, productsPerPage,currentPage } = useSelector((state) => state.productReducer)
    useEffect(() => {
        dispacth(fetchProductThunk())
    }, [])
    console.log(product);
    const totalpage=Math.ceil(product?.length/productsPerPage)
    const indexOfLastElement=currentPage * productsPerPage
    const indexOffirstElement=indexOfLastElement-productsPerPage
    const vacrd=product?.slice(indexOffirstElement,indexOfLastElement)

    const next=()=>{
        if(currentPage!=1){
            dispacth(onNavigateprev())
        }

    }
    const prev=()=>{
        if(currentPage != totalpage){
            dispacth(onNavigateNext())
        }

    }

    
    return (
        <>
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Shop in style</h1>
                        <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                    </div>
                </div>
            </header>
            <section className="py-5">

                <div className="container px-4 px-lg-5 mt-5 ">

                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {
                            loading&&error&&
                            <div >{error}</div>
                        }
                        {
                            loading ?

                                <div className='d-flex'>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="xl"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    <h2 className="">Loading...</h2>
                                    
                                    {/* <img src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1260.gif" alt="" /> */}
                                </div>

                                : vacrd.map(item => (
                                    <div className="col mb-5 shadow">
                                        <div className="card h-100">
                                            <Link to={`/detail/${item.id}`}>
                                                <img height={"180px"} className="card-img-top" src={item.thumbnail} alt="..." />

                                            </Link>
                                            <div className="card-body p-4">
                                                <div className="text-center">
                                                    <h5 className="fw-bolder">{item.title}</h5>
                                                    ${item.price}
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-evenly'>
                                                <button className='btn mb-4' onClick={()=>{dispacth(addtowishlist(item))}}><i class="fa-solid fa-heart-circle-plus fa-xl" style={{ color: '#ff0a0a' }}></i></button>
                                                <button className='btn mb-4' onClick={()=>{dispacth(addTocart(item))}}><i class="fa-solid fa-cart-plus fa-xl" style={{ color: 'green' }}></i></button>
                                            </div>

                                        </div>
                                    </div>


                                ))
                        }






                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='btn me-2' onClick={next}><i className="fa-solid fa-arrow-left"></i></button>
                        {currentPage}/{totalpage}
                        <button className='btn' onClick={prev}><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home