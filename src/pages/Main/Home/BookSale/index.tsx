import React, { FC, useState } from 'react'
import { BookSaleComponent } from '../../../../components/BookSaleComponent'

export const BookSale: FC = () => {

  return (
    <section className='pt-10 m-auto'>
      <div className="text-[#11142d] font-['Cairo'] text-[3.125rem] font-bold leading-[normal]">Books on Sale</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pt-12'>
        <BookSaleComponent />
        <BookSaleComponent />
        <BookSaleComponent />
        <BookSaleComponent />
        <BookSaleComponent />
        <BookSaleComponent />
      </div>

    
   
    </section>

  )
}
