import React, { Component } from 'react'

export class CartForm extends Component {
    state ={
        productName : "",
        productPrice : "",
        productQuantity : ""
    }

    resetForm = () =>{
        this.setState({
            productName : "",
            productPrice : "",
            productQuantity : ""
        })
    }

    handleFormSubmit = (e) =>{
        e.preventDefault()
        console.log("handleFormSubmit: ", e);
        console.log("e.target[0].value: ", e.target[0].value);
        console.log("e.target[1].value: ", e.target[1].value);
        console.log("e.target[2].value: ", e.target[2].value);

        this.props.onBasketRowData(this.state)

        this.resetForm()
    }

    handleProductNameChange = (e) =>{
        //console.log("handleProductNameChange: ", e);
        this.setState({productName: e.target.value})
    }

    handleProductPriceChange = (e) =>{
        //console.log("handleProductNameChange: ", e);
        this.setState({productPrice: +e.target.value})
    }

    handleProductQuantityChange = (e) =>{
        //console.log("handleProductNameChange: ", e);
        this.setState({productQuantity: +e.target.value})
    }

    componentDidUpdate = () =>{
        console.log("componentDidUpdate state: ", this.state);
        
    }

  render() {
    return (
      <div>
        <form action="POST" onSubmit={this.handleFormSubmit}>
            <label htmlFor="productName">Termék neve:</label>
            <input type="text" name='productName' placeholder='product...' onChange={this.handleProductNameChange} value={this.state.productName}/>
            <br />

            <label htmlFor="productPrice">Ár:</label>
            <input type="text" name='productPrice' placeholder='price....' onChange={this.handleProductPriceChange} value={this.state.productPrice}/>
            <br />

            <label htmlFor="productQuantity">Mennyiség:</label>
            <input type="text" name='productQuantity' placeholder='quantity....' onChange={this.handleProductQuantityChange} value={this.state.productQuantity}/>
            <br />

            <input type="submit" value="Hozzaadás a kosarhoz" />
        </form>
      </div>
    )
  }
}

export default CartForm
