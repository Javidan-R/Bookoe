// SpecialOfferCard.tsx
import React from "react";
import { useCart } from "react-use-cart";
import Button from "../../Atoms/Button";
import styles from './SpecialOffersComponent.module.css';

interface SpecialOfferCardProps {
  cartItem: {
    id: string;
    titleName: string;
    tagName: string[];
    authorName: string;
    image: string;
    descName: string;
    price: number;
  };
}

export const SpecialOfferCard: React.FC<SpecialOfferCardProps> = ({
  cartItem: { id, titleName, tagName, authorName, image, descName, price },
}) => {
 
  const { updateItemQuantity, removeItem } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
    } else {
      updateItemQuantity(id, newQuantity);
    }
  };

  return (
    <div className={`card shadow rounded rounded-[0.875rem] shadow-violet-300 ${styles.card}`}>
      <div>
        <img className={styles.image} src={image} alt={titleName} />
      </div>
      <div className="p-[1rem]">
        <h3 className={styles.title}>{titleName}</h3>
        <p className={styles.desc}>{descName}</p>
        <h5 className={styles.authorStyle}>{authorName}</h5>
        <div className="flex justify-between pt-4">
          <Button
            onClick={() => handleQuantityChange(price > 0 ? price - 1 : 0)}
            style={{ backgroundColor: "#6C5DD3", color: "#fff" }}
            className="bg-gray-200 text-purple-500 font-bold py-2 px-4 rounded-xl"
          >
            -
          </Button>
          <span className="text-purple-500 font-bold">{price}$</span>
          <Button
            onClick={() => handleQuantityChange(price + 1)}
            style={{ backgroundColor: "#6C5DD3", color: "#fff" }}
            className="bg-gray-200 text-purple-500 font-bold py-2 px-4 rounded-xl"
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};
