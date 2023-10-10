import { FC } from 'react'
import circles from '../../../../../assets/images/cirlces.svg';
interface PopularProps{
    image:string;
}
let popularitem =[
    {
        image: ""
    },
    {
        image: ""
    },
    {
        image: ""
    },
    {
        image: ""
    }

]



export const Popular: FC = () => {
    return (
        <div className=" rounded-[14px] bg-orange w-full h-auto sm:h-auto md:h-auto lg:h-[443px]">
        <div className='p-2 items-center '>
            <div className='flex justify-between pt-6'>
                <div className=''>
                    <b className=" text-[36px] font-cairo text-darkpurple text-left">Recomended For You</b>
                    <div className="pt-2 mt-2 text-[14px] font-open-sans text-darkpurple text-left inline-block w-[512px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
                <img src={circles} alt="" className='w-full object-coever' />
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12">
{popularitem.map((item, index) => (
    <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-full lg:w-1/6 xl:w-1/5">
        <div className="rounded-lg overflow-hidden bg-gray-400 border-4 border-solid border-white">
            <img
                src=""
                alt={item.image}
                className="object-cover w-full h-[190.77px] "
            />
        </div>
    </div>
))}
</div>


        </div>
        {/* <div className="relative rounded-[50%] bg-antiquewhite w-full h-[330px]" ></div>
        <div className="relative rounded-[50%] bg-antiquewhite w-full h-[216px]"></div> */}
    </div>
    )
}
