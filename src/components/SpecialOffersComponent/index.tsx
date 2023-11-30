// SpecialOffersComponent.tsx
import React, { FC } from "react";
import { useCart } from "react-use-cart";
import Button from "../../Atoms/Button";
import styles from './SpecialOffersComponent.module.css';

interface SpecialOffersComponentProps {
  titleName: string;
  tagName: string[];
  image: string;
  descName: string;
  authorName: string;
  onAddToCart: () => void; // New prop for handling add to cart
}

export const SpecialOffersComponent: FC<SpecialOffersComponentProps> = ({
  titleName,
  tagName,
  image,
  descName,
  authorName,
  onAddToCart, // Destructuring the new prop
}) => {
  return (
    <>
      <div className={`card shadow rounded rounded-[0.875rem] shadow-violet-300 ${styles.card}`}>
        <div className="flex">
          <img className={styles.image} src={image} alt={titleName} />
        </div>
        <div className="p-[1rem]">
          <h3 className={styles.title}>{titleName}</h3>
          <ul className="w-80 flex justify-between styles.tag">
            {tagName.map((tag, index) => (
              <li key={index} style={{ listStyle: "none", padding: '2px' }}>
                <Button className="mt-2 mb-4 w-[6.5rem] h-[1.8125rem] rounded-[0.875rem] bg-[#f0eeff]">
                  {tag}
                </Button>
              </li>
            ))}
          </ul>
          <p className={styles.desc}>{descName}</p>
          <h5 className={styles.authorStyle}>{authorName}</h5>
          <div className="flex justify-between pt-4">
            <Button
              onClick={onAddToCart} // Use the provided function for adding to cart
              style={{ backgroundColor: "#6C5DD3", color: "#fff"}}
              className="bg-gray-200 text-purple-500 font-bold py-2 px-4 rounded-xl"
            >
              Add To Cart
            </Button>
            <div className="flex  w-100" style={{maxWidth:'900px'}}>
              <Button className="text-purple-500 font-bold py-2 px-4 rounded-xl " style={{ flex:'1 1 0'}}>
                20$
              </Button>
              <p className="line-through" style={{ flex:'1 1 0'}}>50$</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
