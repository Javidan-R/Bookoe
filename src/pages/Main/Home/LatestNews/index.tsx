import React from 'react';
import Button from '../../../../Atoms/Button';
import { LatestNewsComponent } from '../../../../components/LatestNewsComponent';

export const LatestNews = () => {
    return (
        <div className='pt-8 pb-8'>
            <div className='flex flex-col sm:flex-col md:flex-row justify-between'>
                <div className='mb-4 md:mb-0'>
                    <div className="text-[#11142d] font-['Cairo'] text-[3.125rem] font-bold leading-[normal]">Latest News</div>
                    <div className="flex-shrink-0 w-90 h-[3.3125rem] text-black/[.60] font-['Open leading-[normal]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                </div>
                <div>
                    <Button className="background flex-shrink-0 w-full sm:w-[11.375rem] h-[3.75rem] rounded-[0.875rem] bg-[#6c5dd3]" >View more</Button>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12'>
                <LatestNewsComponent />
                <LatestNewsComponent />
                <LatestNewsComponent />
                <LatestNewsComponent />
            </div>
        </div>
    );
};
