import React from "react";
export default class Basket extends React.Component {
	render() {
		return (
			<ul>
				{this.props.products.length > 0 &&
					this.props.products.map((product, idx) => (
						<li key={idx}>
							{product.productName} - Ár: {product.productPrice} Ft, Mennyiség:{" "}
							{product.productQuantity}
						</li>
					))}
				{this.props.products.length < 1 && <p>Üres...</p>}
			</ul>
		);
	}
}
