import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CartForm from './components/CartForm'
import Basket from './components/Basket'

function App() {
  setBasketRowData = (data) => this.setState({products: [...this.state.products, data]})

  return (
    <div>
      <h1>Termék hozzaadása a kosárhoz</h1>
      <CartForm onBasketRowData={this.setBasketRowData}/>
      <h2>Kosár tartalma:</h2>
      <Basket products={this.state.products}/>
    </div>
  )
}

export default App
