import React, { FC } from 'react';
import circles from '../../../../assets/images/cirlces.svg';

interface PopularProps {
    image: string;
}

let popularitem = [
    { image: '' },
    { image: '' },
    { image: '' },
    { image: '' },
];

export const Popular: FC = () => {
    return (
        <div className="rounded-[14px] bg-orange w-full h-auto sm:h-auto md:h-auto lg:h-[443px] relative" style={{backgroundColor:'#e6f1fc'}}>
            <svg
                        width={320}
                        height={202}
                        viewBox="0 0 153 172"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 right-20 rounded-[14px]"
                    >
                        <circle cx={120} cy={50} r={88} fill="#D7EBFF" />
                    </svg>
            <div className="p-4 items-center relative">
                
                <div className="flex justify-between pt-6">
                    <div className="">
                        <b className="text-[36px] font-cairo text-darkpurple text-left">
                            Recomended For You
                        </b>
                        <div className="pt-2 mt-2 text-[14px] font-open-sans text-darkpurple text-left inline-block w-80">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                         
                    </div>
                    <img src={circles} alt="" className="w-[4rem] absolute  right-10 top-[10rem] transform rotate-90" />
                </div>
                <div className=" pt-6 md:pt-8 lg:pt-10 xl:pt-12 pb-6 relative"  >
                    <svg
                        width={250}
                        height={272}
                        viewBox="0 0 153 172"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute bottom-[-11px] left-[-16px] rounded-[14px]"
                    >
                        <circle cx={45} cy={108} r={108} fill="#D7EBFF" />
                    </svg>
                        <div  className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 m-auto relative ">
                        {popularitem.map((item, index) => (
                            <div key={index} className="rounded-lg overflow-hidden bg-gray-400 border-4 border-solid border-white  w-[8rem]  h-[13rem]  relative flex m-auto">
                                <img
                                    src={item.image}
                                    alt={item.image}
                                    className="object-cover "
                                />
                            </div>
                             ))}
                        </div>

                </div>
            </div>

        </div>
    );
};
