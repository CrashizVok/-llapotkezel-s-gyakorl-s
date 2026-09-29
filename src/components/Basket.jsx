import React, { Component } from 'react'

export class Basket extends Component {
  render() {
    return (
      <div>
        <ul>
            {
                this.props.products.length > 0 && this.props.products.map(
                    (product, idx) => 
                        <il key={idx}>
                            {product.productName} - Ár: {product.productPrice} Ft, Mennyiség: {product.productQuantity}
                        </il>
                    
                )
            }
            {this.props.products.length < 1 && <p>Üres...</p>}
        </ul>
      </div>
    )
  }
}

export default Basket
