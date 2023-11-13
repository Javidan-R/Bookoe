import React, { FC } from 'react'
interface PopItemProps {
  image: string

}

export const PopItem: FC<PopItemProps> = ({ image }) => {
  return (
    <div className="rounded-lg overflow-hidden bg-gray-400 border-4 border-solid border-white  w-[8.5rem] h-[13rem] relative m-auto ">
      <img
        src={image}
        alt={image}
        className="object-cover w-[8.5rem]  h-[13rem] "
      />
    </div>
  )
}
