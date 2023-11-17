import { FC } from 'react';
import energy from '../../../../assets/images/energy.svg';
import approve from '../../../../assets/images/approve.svg';
import star from '../../../../assets/images/star.svg';




import thumb from '../../../../assets/images/thumb.svg';

interface MainServicesProps {
    image: string;
    heading: string;
    description: string;
}

const services = [
    
    {
        heading: "Quick Delivery",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        image: energy,
    },
    {
        heading: "Secure Payment",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        image: approve,
    },
    {
        heading: "Best Quality",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        image: star,
    },
    {
        heading: "Return Guarantee",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        image: thumb,
    },
];

export const MainServices: FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 pt-10 pb-10 ">
            {services.map((service, index) => (
                <div key={index} className="bg-white flex flex-row items-center gap-2 w-full">
                    <div className="rounded-[14px] bg-gray-300 w-[4rem] h-[60px] flex">
                        <img className="object-cover  m-auto  " alt="" src={service.image} />
                    </div>
                    <div className="text-center w-80 flex flex-col xs:flex-row m-auto">
                        <b className="text-[20px] leading-[24px] font-cairo text-left text-darkpurple mb-2">
                            {service.heading}
                        </b>
                        <div className="text-[14px] font-open-sans text-grey-01 text-left inline-block w-[16rem] lg:w-[257px]">
                            {service.description}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
