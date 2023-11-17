import React,{FC} from 'react'
import { FaSalesforce } from 'react-icons/fa'
import Button from '../../Atoms/Button'


interface FeaturedBooksProps {
    image: string,
    bookName: string,
    title: string,
    tagName: string,
    writtenBy: string,
    year: number,
    description: string,
    price:number,
    oldPrice:number
}
export const FeturedBooksComponent: FC<FeaturedBooksProps> = ({ image, bookName, title, tagName, writtenBy, year, description, price, oldPrice }) => {
  return (
    <div>
         <div className="flex-shrink-0 w-full h-[482px] rounded-[0.875rem] bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 " >
    <div className="w-[15.25rem] h-[400px] rounded-[1.25rem] bg-[#c4c4c4]" >
        <img src={image} alt={bookName} />
    </div>
    <div className="w-[15.25rem] h-[400px] rounded-[1.25rem]  " >
        <div className='dflex justify-between'>
            <div>
                <FaSalesforce />
            </div>
            <div>
                <div className="text-[#11142d] font-['Cairo'] text-3xl font-bold leading-[normal]">{bookName}</div>
                <div className="Sans'] text-[#6c5dd3] font-['Open leading-[normal]">{tagName}</div>
            </div>
        </div>
        <div className="['Sans'] w-[11.4375rem] text-[#11142d] font-['Open text-lg font-semibold leading-6">{title}</div>
        <div className="['Sans'] w-[15.0625rem] text-[#11142d] font-['Open text-sm leading-5">{description}</div>
        <div className='dflex justify-between'>
            <div className='dflex justify-between'>
                <div className="['Sans'] text-[#aaa] font-['Open text-sm leading-[normal]">Writen by</div>
                <div className="['Sans'] text-[#11142d] font-['Open text-lg font-semibold leading-[normal]">{writtenBy}</div>
            </div>
            <div className='dflex justify-between'>
                <div className="['Sans'] text-[#aaa] font-['Open text-sm leading-[normal]">Year</div>
                <div className="['Sans'] text-[#11142d] font-['Open text-lg font-semibold leading-[normal]">{year}</div>
            </div>
        </div>
        <div>
            <div>
                <div className="text-[#11142d] text-center font-['Cairo'] text-[1.75rem] font-bold leading-[normal]">$ {price}</div>
                <div className="text-[#aaa] text-center font-['Cairo'] text-xl font-semibold leading-[normal]">${oldPrice}</div>
            </div>
            <Button style={{}} className='' >ADD</Button>
        </div>
    </div>


</div>


    </div>
  )
}