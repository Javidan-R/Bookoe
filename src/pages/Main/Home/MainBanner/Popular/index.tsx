import { FC } from 'react'
import circles from '../../../../../assets/images/cirlces.svg';


export const Popular: FC = () => {
    return (
        <div className="relative rounded-[14px] bg-orange w-full h-[443px]">
            <div className='flex justify-between'>
                <div className=''>
                    <b className="relative text-[36px] font-cairo text-darkpurple text-left">Recomended For You</b>
                    <div className="relative text-[14px] font-open-sans text-darkpurple text-left inline-block w-[512px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
                <img src={circles} alt="" className='w-full transition' />
            </div>
            <div className="relative w-full h-[197.77px]">
                <div className="absolute top-[-4px] left-[calc(50%_-_74px)] rounded-[14px] bg-silver box-border w-[148px] h-[205.77px] border-[4px] border-solid border-white" >

                </div>
            </div>
        </div>
    )
}
