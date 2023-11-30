import React, { useState } from 'react'
import { BookSale } from "../Home/BookSale"
import { Testimonials } from "../Home/Testimonials"

export const DetailDescription = () => {
 


  return (
    <div>
      <Testimonials />
      <BookSale id={0} title={''} price={0} category={''} description={''} image={''} rating={{
        rate: 0,
        count: 0
      }} />

      
    </div>
  )
}