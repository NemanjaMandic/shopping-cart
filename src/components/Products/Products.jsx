import React from 'react';
import util from '../../util';
const Products = (props) => {
    const { products, addToCart } = props;
    const productItems = products.map(product =>
        (
            <div className="col-md-4">
            <div className="thumbnail text-center">
              <a href="#" onClick={e => addToCart(e, product)}>
                  <img src={`/products/${product.sku}_2.jpg`} alt={product.title} />
                  <p>
                  {product.title}
              </p>
              </a>
              <div>
                  <b>{util.formatCurrency(product.price)}</b>
                  <button className="btn btn-primary" onClick={(e) => addToCart(e, product)}>Add To Cart</button>
              </div>
            </div>
        </div>
        )
    )
 return (
     <div className="row">
         {productItems}
     </div>
 );
}

export default Products;