import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import { ButtonContainer } from './Navbar'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, img, title, inCart, company, info, price } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-blue">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end of title */}
                            {/*product info */}
                            <div className="row">
                                {/* product img */}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className='img-fluid' alt='product' />
                                </div>
                                {/* product text */}
                                <div className="col-10 mx-auto col-md-6 my-5 text-capitalize">
                                    <h2>model:{title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by:<span>{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>Price:<span>$</span>
                                            {price}</strong>
                                    </h4>
                                    <h5 className="text-capitalize font-weight-bold mt3 mb-0">
                                        some info about product:
                                         <p className='text-muted lead'>{info}</p>
                                    </h5>
                                    {/* buttons */}
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>back to produtcs</ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart disabled={inCart ? true : false} onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}>
                                            {inCart ? 'inCart' : 'add to cart'}
                                        </ButtonContainer>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
