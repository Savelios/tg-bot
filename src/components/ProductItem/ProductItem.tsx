import React from 'react';
import Button from '../Button/Button';
import './ProductItem.css';

interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    imageSrc: string;
  }

interface ProductItemProps {
  product: Product;
  className?: string;
  onAdd: (product: Product) => void;
}

const ProductImage: React.FC<{ src: string }> = ({ src }) => (
  <div className="img" style={{ backgroundImage: `url(${src})` }} />
);

const ProductItem: React.FC<ProductItemProps> = ({ product, className = '', onAdd }) => {
  const onAddHandler = () => {
    onAdd(product);
  };

  return (
    <div className="product">
      <ProductImage src={product.imageSrc} />
      <div  className="title">{product.title}</div>
      <div  className="description">{product.description}</div>
      <div  className="price">
        <span>Стоимость: <b>{product.price}</b></span>
      </div>
      <Button className="add-btn" onClick={onAddHandler}>
        Добавить в корзину
      </Button>
    </div>
  );
};

export default ProductItem;
