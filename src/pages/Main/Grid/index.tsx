import React from 'react'
import { BookSale } from '../Home/BookSale'
import { Testimonials } from '../Home/Testimonials'

export const Grid = () => {
  return (
    <div>
      

      <BookSale id={0} title={''} price={0} category={''} description={''} image={''} rating={{
        rate: 0,
        count: 0
      }} />
      <Testimonials />
    </div>
  )
}
