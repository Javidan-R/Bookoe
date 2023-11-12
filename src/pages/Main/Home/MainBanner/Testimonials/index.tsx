import React from 'react'
import { TestimonialsComponent } from '../../../../../components/TestimonialsComponent/index'

export const Testimonials = () => {
  return (
    <section>
        <div className='dflex justify-center'>
        <div className="text-black text-center font-['Cairo'] text-[3.125rem] font-bold leading-[normal]">Testimonials</div>
        <div className="['Sans'] flex-shrink-0 w-full h-[3rem] text-black/[.60] text-center font-['Open leading-[normal]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
   
        </div>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 m-auto ' >
        <TestimonialsComponent />
        <TestimonialsComponent />
        <TestimonialsComponent />
        </div>
    </section>

    )
}
