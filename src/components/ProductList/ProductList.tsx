import React, { useState, useCallback, useEffect } from "react";
import Button from "../Button/Button";
import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram";
import jeans from "../../assets/img/jeans.jpeg";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  imageSrc: string;
}

const products: Product[] = [
  {
    id: "1",
    title: "Джинсы",
    price: 5000,
    description: "Синего цвета, прямые",
    imageSrc: jeans,
  },
  {
    id: "2",
    title: "Шорты",
    price: 9000,
    description: "Темного цвета, прямые",
    imageSrc: jeans,
  },
];

const getTotalPrice = (items: Product[] = []): number => {
  return items.reduce((acc, item) => acc + item.price, 0);
};

const sendProductData = (data: any, queryId: string) => {
  fetch("http://89.147.109.197:8080/web-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const ProductList: React.FC = () => {
  const [addedItems, setAddedItems] = useState<Product[]>([]);
  const { tg, queryId } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      products: addedItems,
      totalPrice: getTotalPrice(addedItems),
      queryId,
    };

    sendProductData(data, queryId);
  }, [addedItems, queryId]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData, tg]);

  const onAdd = (product: Product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);
    let newItems: Product[] = [];

    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }

    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(newItems)}`,
      });
    }
  };

  return (
    <div className="list">
      {products.map((item) => (
        <ProductItem
          key={item.id}
          product={item}
          onAdd={onAdd}
          className="item"
        />
      ))}
    </div>
  );
};

export default ProductList;
