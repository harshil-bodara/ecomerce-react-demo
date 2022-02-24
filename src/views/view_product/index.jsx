import { ArrowLeftOutlined, LoadingOutlined } from '@ant-design/icons';
import { ColorChooser, ImageLoader, MessageDisplay } from 'components/common';
import { ProductShowcaseGrid } from 'components/product';
import { RECOMMENDED_PRODUCTS, SHOP } from 'constants/routes';
import { displayMoney } from 'helpers/utils';
import {
  useBasket,
  useDocumentTitle,
  useProduct,
  useRecommendedProducts,
  useScrollTop
} from 'hooks';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import Select from 'react-select';

const ViewProduct = () => {
  const { id } = useParams();
  const location = useLocation();
  const { product, isLoading, error } = useProduct(id);
  const { addToBasket, isItemOnBasket } = useBasket(id);
  useScrollTop();
  useDocumentTitle(`View ${product?.name || 'Item'}`);

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [getproduct, setGetProduct] = useState({});

  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useRecommendedProducts(6);
  const colorOverlay = useRef(null);

  useEffect(() => {
    let findproduct = location?.state?.products?.find(data => parseInt(data.id) === parseInt(id));
    setGetProduct(findproduct)
  }, [location?.state?.products]);

  const onSelectedSizeChange = (newValue) => {
    setSelectedSize(newValue.value);
  };

  const onSelectedColorChange = (color) => {
    setSelectedColor(color);
    if (colorOverlay.current) {
      colorOverlay.current.value = color;
    }
  };

  const handleAddToBasket = () => {
    addToBasket({ ...getproduct, selectedColor, selectedSize: selectedSize || product.sizes[0] });
  };

  return (
    <main className="content">
      <div className="product-view">
        <Link to={SHOP}>
          <h3 className="button-link d-inline-flex">
            <ArrowLeftOutlined />
            &nbsp; Back to shop
          </h3>
        </Link>
        <div className="product-modal">
          {getproduct?.imageCollection?.length !== 0 && (
            <div className="product-modal-image-collection">
              {getproduct?.imageCollection?.map((image) => (
                <div
                  className="product-modal-image-collection-wrapper"
                  key={image?.id}
                  role="presentation"
                >
                  <ImageLoader
                    className="product-modal-image-collection-img"
                    src={image?.url}
                  />
                </div>
              ))}
            </div>
          )}
          <div className="product-modal-image-wrapper">
            <ImageLoader
              alt={getproduct?.name}
              className="product-modal-image"
              src={getproduct?.image}
            />
          </div>
          <div className="product-modal-details">
            <br />
            <span className="text-subtle">{getproduct?.brand}</span>
            <h1 className="margin-top-0">{getproduct?.name}</h1>
            <span>{getproduct?.description}</span>
            <br />
            <br />
            <div className="divider" />
            <br />
            <div>
              <span className="text-subtle">Lens Width and Frame Size</span>
              <br />
              <br />
              <Select
                placeholder="--Select Size--"
                onChange={onSelectedSizeChange}
                options={getproduct?.sizes}
                styles={{ menu: (provided) => ({ ...provided, zIndex: 10 }) }}
              />
            </div>
            <br />
            <h1>{`$` + getproduct?.price}</h1>
            <div className="product-modal-action">
              <button
                className={`button button-small ${isItemOnBasket(getproduct?.id) ? 'button-border button-border-gray' : ''}`}
                onClick={handleAddToBasket}
                type="button"
              >
                {isItemOnBasket(getproduct?.id) ? 'Remove From Basket' : 'Add To Basket'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ViewProduct;
