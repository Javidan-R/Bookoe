import React, { FC } from "react";

// interface FlashProps {
//   image: string,
//   title: string,
//   tag: string[],
//   oldPrice: number,
//   price: number
// }

const flashSale = [
  {
    image:
      "https://img.freepik.com/free-vector/special-flash-sale-modern-banner-design-vector-illustration_1017-38337.jpg",
    title: "SECOND",
    tag: ["THRILLER", "DRAMA", "BIOGRAPHY"],
    oldPrice: 70.0,
    price: 54.78,
  },
  {
    image:
      "https://img.freepik.com/free-vector/gradient-flash-sale-background_23-2149027975.jpg",
    title: "REWORK",
    tag: ["DRAMA", "BIOGRAPHY"],
    oldPrice: 50.0,
    price: 34.56,
  },
  {
    image:
      "https://www.creativefabrica.com/wp-content/uploads/2022/10/30/Flash-Sale-Vector-Graphics-43847109-1.png",
    title: "Such a Fun Age",
    tag: ["THRILLER"],
    oldPrice: 70.0,
    price: 54.78,
  },
  {
    image:
      "https://www.creativefabrica.com/wp-content/uploads/2022/01/27/Flash-Sale-Vector-Graphics-24241291-1.png",
    title: "Emily and The Back..",
    tag: ["DRAMA", "BIOGRAPHY"],
    oldPrice: 70.0,
    price: 54.78,
  },
  {
    image:
      "https://png.pngtree.com/png-clipart/20230120/original/pngtree-flash-sale-text-with-icon-png-image_8924520.png",
    title: "Battle Drive",
    tag: ["DRAMA"],
    oldPrice: 70.0,
    price: 54.78,
  },
];
export const FlashCard: FC = () => {
  return (
    <>
      {flashSale.length > 0 ? (
        flashSale.map((fs, index) => (
          <div
            key={index}
            className="w-[13.3125rem] h-[450px] rounded-[0.875rem] bg-white m-auto items-stretch"
          >
            <div
              className="flex-shrink-0 w-[13.3125rem] h-[20.0625rem] rounded-[1.25rem] bg-[#c4c4c4] flex justify-center">
              <img
                src={fs.image}
                alt={fs.title}
                className="w-100 h-100 cover m"
                style={{ margin: "0 auto", objectFit: "cover" }}
              />
            </div>
            <div className="text-[#11142d] text-center font-['Cairo'] text-xl font-bold leading-[normal] mt-4">
              {fs.title}
            </div>
            <div className="font-[Sans'] text-[#6c5dd3] text-center font-['Open text-sm leading-[normal] mb-4 ">
              {fs.tag.join(", ")}
            </div>
            <div className="w-30 flex justify-around items-stretch">
              <div className="text-[#6c5dd3] font-['Cairo'] text-[1.75rem] font-bold leading-[normal]">
                ${fs.price}
              </div>
              <div className="text-[#aaa] font-['Cairo'] text-xl font-semibold leading-[normal]">
                ${fs.oldPrice}
              </div>
            </div>
          </div>
        ))
      ) : (
        <h3>Endirim yoxdur</h3>
      )}
    </>
  );
};
