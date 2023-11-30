
// type Props = {}

import { BookSale } from "../Home/BookSale"
import { Testimonials } from "../Home/Testimonials"

export const DetailReview = () => {
  return (
    <div>
        <Testimonials/>
      <BookSale id={0} title={""} price={0} category={""} description={""} image={""} rating={{
        rate: 0,
        count: 0
      }} />
    </div>
  )
}