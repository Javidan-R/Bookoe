import React, { FC } from 'react'

// interface FlashProps {
//   image: string,
//   title: string,
//   tag: string[],
//   oldPrice: number,
//   price: number
// }

const flashSale = [
  {
    image: " ",
    title:"SECOND",
    tag:["THRILLER","DRAMA","BIOGRAPHY"],
    oldPrice:70.00,
    price:54.78  
  },
  {
    image: " ",
    title:"REWORK",
    tag:["DRAMA","BIOGRAPHY"],
    oldPrice:50.00,
    price:34.56  
  },
  {
    image:" " ,
    title:"Such a Fun Age",
    tag:["THRILLER"],
    oldPrice:70.00,
    price:54.78  
  },
  {
    image:  " ",
    title:"Emily and The Back..",
    tag:["DRAMA","BIOGRAPHY"],
    oldPrice:70.00,
    price:54.78  
  },
  {
    image: " ",
    title:"Battle Drive",
    tag:["DRAMA"],
    oldPrice:70.00,
    price:54.78  
  },
  
  

]
export const FlashCard: FC = () => {
  return (
    <>
      {flashSale.length > 0 ? (
        flashSale.map((fs, index) => (
          <div key={index} className="flex-shrink-0 w-[13.3125rem] h-[450px] rounded-[0.875rem] bg-white m-auto">
            <div className="flex-shrink-0 w-[13.3125rem] h-[20.0625rem] rounded-[1.25rem] bg-[#c4c4c4] dflex justify-center">
              <img src={fs.image} alt={fs.title} />
            </div>
            <div className="text-[#11142d] text-center font-['Cairo'] text-xl font-bold leading-[normal]">{fs.title}</div>
            <div className=" font-[Sans'] text-[#6c5dd3] text-center font-['Open text-sm leading-[normal]">{fs.tag.join(', ')}</div>
            <div className='w-30 flex justify-around'>
              <div className="text-[#6c5dd3] font-['Cairo'] text-[1.75rem] font-bold leading-[normal]">{fs.price}</div>
              <div className="text-[#aaa] font-['Cairo'] text-xl font-semibold leading-[normal]">{fs.oldPrice}</div>
            </div>
          </div>
        ))
      ) : (
        <h3>Endirim yoxdur</h3>
      )}
    </>
  );
};