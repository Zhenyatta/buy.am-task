import React from 'react';
import './styles.scss';

const Product = () => {
  return (
    <div className='product'>
      <div className='product-image'></div>
      <div className='product-description'>
        <p className='product-description-title'>Cola</p>
        <p className='product-description-text'>
          On May 8, 1886, Dr. John Pemberton served the world’s first Coca-Cola
          at Jacobs' Pharmacy in Atlanta. On May 8, 1886, Dr. John Pemberton
          served the world’s first Coca-Cola at Jacobs' Pharmacy in Atlanta.
        </p>
      </div>
    </div>
  );
};

export default Product;
