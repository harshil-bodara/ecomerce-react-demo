import { ArrowRightOutlined } from '@ant-design/icons';
import { MessageDisplay } from 'components/common';
import { ProductShowcaseGrid } from 'components/product';
import { FEATURED_PRODUCTS, RECOMMENDED_PRODUCTS, SHOP } from 'constants/routes';
import {
  useDocumentTitle, useFeaturedProducts, useRecommendedProducts, useScrollTop
} from 'hooks';
import bannerImg from 'images/banner-girl.png';
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  useDocumentTitle('Salinaka | Home');
  useScrollTop();

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useFeaturedProducts(6);
  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingRecommended,
    error: errorRecommended
  } = useRecommendedProducts(6);

  return (
    <main className="content">
      <div className="home">
        <div className="banner">
          <div className="banner-desc">
            <h1 className="text-thin">
              <strong>See</strong>
              &nbsp;everything with&nbsp;
              <strong>Clarity</strong>
            </h1>
            <p>
              Buying eyewear should leave you happy and good-looking, with money in your pocket.
              Glasses, sunglasses, and contacts—we’ve got your eyes covered.
            </p>
            <br />
            <Link to={SHOP} className="button">
              Shop Now &nbsp;
              <ArrowRightOutlined />
            </Link>
          </div>
          <div className="banner-img"><img src={bannerImg} alt="" /></div>
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Products</h1>
            <Link to={FEATURED_PRODUCTS}>See All</Link>
          </div>
          <ProductShowcaseGrid
            products={[{
              image: bannerImg,
              name: "First product",
              id: 1,
              brand: "Tesla",
              imageCollection: [{
                id: 1,
                url: bannerImg
              },
              {
                id: 2,
                url: bannerImg
              },
              {
                id: 3,
                url: bannerImg
              }],
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at venenatis nulla. Nunc lacinia placerat congue. Aliquam aliquam lectus non tortor venenatis, at blandit arcu commodo. Proin tincidunt maximus efficitur. Vivamus quis quam in purus eleifend dapibus in sed lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla tincidunt semper placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce euismod elit at urna porttitor, non pulvinar odio consectetur. In venenatis arcu ut eleifend facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed magna sapien, vestibulum eu massa vitae, consequat porta metus. Praesent imperdiet, augue vel ornare vehicula, velit tortor ultrices velit, vitae vehicula tellus metus at ante. Quisque pharetra orci in enim laoreet gravida. In sagittis venenatis orci, non dignissim arcu malesuada quis. Etiam consequat porta porta.",
              sizes: [{
                label: "32 MN", value: "32 mn"
              },
              {
                label: "36 MN", value: "36 mn"
              },
              {
                label: "40 MN", value: "40 mn"
              }],
              price: "635"
            },
            {
              image: bannerImg,
              name: "Second product",
              id: 2,
              brand: "Amazon",
              imageCollection: [{
                id: 1,
                url: bannerImg
              },
              {
                id: 2,
                url: bannerImg
              },
              {
                id: 3,
                url: bannerImg
              }],
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at venenatis nulla. Nunc lacinia placerat congue. Aliquam aliquam lectus non tortor venenatis, at blandit arcu commodo. Proin tincidunt maximus efficitur. Vivamus quis quam in purus eleifend dapibus in sed lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla tincidunt semper placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce euismod elit at urna porttitor, non pulvinar odio consectetur. In venenatis arcu ut eleifend facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed magna sapien, vestibulum eu massa vitae, consequat porta metus. Praesent imperdiet, augue vel ornare vehicula, velit tortor ultrices velit, vitae vehicula tellus metus at ante. Quisque pharetra orci in enim laoreet gravida. In sagittis venenatis orci, non dignissim arcu malesuada quis. Etiam consequat porta porta.",
              sizes: [{
                label: "32 MN", value: "32 mn"
              },
              {
                label: "36 MN", value: "36 mn"
              },
              {
                label: "40 MN", value: "40 mn"
              }],
              price: "220"
            },
            {
              image: bannerImg,
              name: "Third product",
              id: 3,
              brand: "Tata",
              imageCollection: [{
                id: 1,
                url: bannerImg
              },
              {
                id: 2,
                url: bannerImg
              },
              {
                id: 3,
                url: bannerImg
              }],
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at venenatis nulla. Nunc lacinia placerat congue. Aliquam aliquam lectus non tortor venenatis, at blandit arcu commodo. Proin tincidunt maximus efficitur. Vivamus quis quam in purus eleifend dapibus in sed lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla tincidunt semper placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce euismod elit at urna porttitor, non pulvinar odio consectetur. In venenatis arcu ut eleifend facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed magna sapien, vestibulum eu massa vitae, consequat porta metus. Praesent imperdiet, augue vel ornare vehicula, velit tortor ultrices velit, vitae vehicula tellus metus at ante. Quisque pharetra orci in enim laoreet gravida. In sagittis venenatis orci, non dignissim arcu malesuada quis. Etiam consequat porta porta.",
              sizes: [{
                label: "32 MN", value: "32 mn"
              },
              {
                label: "36 MN", value: "36 mn"
              },
              {
                label: "40 MN", value: "40 mn"
              }],
              price: "144"
            }]}
            skeletonCount={6}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
