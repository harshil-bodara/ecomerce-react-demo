import { useBasket } from 'hooks';
import PropType from 'prop-types';
import React from 'react';
import ProductItem from './ProductItem';

const ProductGrid = ({ products }) => {
  const { addToBasket, isItemOnBasket } = useBasket();

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductItem
          key={product?.id}
          isItemOnBasket={isItemOnBasket}
          addToBasket={addToBasket}
          product={product}
        />
      ))}
    </div>
  );
};

ProductGrid.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  products: PropType.array.isRequired
};

export default ProductGrid;
