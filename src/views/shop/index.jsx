/* eslint-disable react/jsx-props-no-spreading */
import { AppliedFilters, ProductGrid, ProductList } from 'components/product';
import { useDocumentTitle, useScrollTop } from 'hooks';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectFilter } from 'selectors/selector';
import bannerImg from 'images/banner-girl.png';

const Shop = () => {
  useDocumentTitle('Shop | Salinaka');
  useScrollTop();

  const store = useSelector((state) => ({
    filteredProducts: selectFilter(state.products.items, state.filter),
    products: state.products,
    requestStatus: state.app.requestStatus,
    isLoading: state.app.loading
  }), shallowEqual);

  return (
    <main className="content">
      <section className="product-list-wrapper">
        <ProductGrid products={[{
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
        },
        {
          image: bannerImg,
          name: "Third product",
          id: 4,
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
          price: "7400"
        },
        {
          image: bannerImg,
          name: "Third product",
          id: 5,
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
          price: "852"
        },
        {
          image: bannerImg,
          name: "Third product",
          id: 6,
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
          price: "778"
        },
        {
          image: bannerImg,
          name: "Third product",
          id: 7,
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
          price: "653"
        },
        {
          image: bannerImg,
          name: "Third product",
          id: 8,
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
          price: "558"
        }]} />
      </section>
    </main>
  );
};

export default Shop;
