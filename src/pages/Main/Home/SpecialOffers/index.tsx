import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { SpecialOffersComponent } from "../../../../components/SpecialOffersComponent";
import { SpecialOfferCard } from "../../../../components/SpecialOffersComponent/SpecialOffersCard";
import { GETAPIData } from "../../../../HTTP/HTTP";

export const SpecialOffers = () => {
  const [offers, setOffers] = useState([]);
  const { isEmpty ,addItem, totalUniqueItems, items, updateItemQuantity, removeItem } =
  useCart();


  useEffect(() => {
    GETAPIData("specialoffers")
      .then((res) => {
        setOffers(res.data);
      })
      .catch((error) => {
        console.error("Error fetching special offers:", error);
      });
  }, [items]);

  const handleAddToCart = (offer) => {
    addItem({
      id: offer.titleName, // Change this to the appropriate identifier for your items
      name: offer.titleName,
      price: 20, // You might want to get the actual price from your API
      image: offer.image,
      description: offer.descName,
      author: offer.authorName,
    });
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 pt-12">
      {offers.map((offer) => (
   <SpecialOffersComponent
      key={offer.id}  
      titleName={offer.titleName}
      tagName={offer.tagName}
      authorName={offer.authorName}
      image={offer.image}
      descName={offer.descName}
      onAddToCart={() => handleAddToCart(offer)}
      />
      ))
      }
      </div>
{/* 
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <div>
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {isEmpty ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {items.map((cartItem, index) => (
            <SpecialOfferCard cartItem={{
                  id: "",
                  titleName: "",
                  tagName: [],
                  authorName: "",
                  image: "",
                  descName: "",
                  price: 0
              }} key={index} {...cartItem} />
          ))}
          <p>Total Unique Items: {totalUniqueItems}</p>
        </div>
      )}
    </div>
      </div> */}
    </div>
  );
};
