import { Star } from '../../Atoms/Star';

interface BookSaleComponentProps {
    book:{
        id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
    }
}

export const BookSaleComponent: React.FC<BookSaleComponentProps> = ({ book }) => {
  const { id, title, image, rating :{rate, count}, category, price, description,  } = book;

  return (
    <>
      <div className='flex-shrink-0 w-[13rem] md:w-[11rem] xl:w-[11rem] h-[30rem] m-auto  '>
        <div className="relative m-auto">
          <div className="flex-shrink-0 h-[18rem] rounded-[0.875rem] bg-[#c4c4c4]">
            <img src={book.image} alt={book.title} className="w-full h-full object-cover rounded-[0.875rem]" />
          </div>
          <div className="absolute top-[1.5rem] left-0 w-[3.5375rem] h-[2.375rem] rounded-tr-[1.25rem] rounded-br-[1.25rem] bg-[#ff754c] text-center flex items-center justify-center">
            {book.rating.rate}%
          </div>
        </div>

        <div className="text-[#11142d] font-['Cairo'] text-xl font-bold leading-[normal] mt-4 ">{book.title}</div>
        <div className="['Sans'] text-[#6c5dd3] font-['Open text-sm leading-[normal] mb-4 ">{book.category}</div>
        <div className='flex justify-evenly items-center'>
          <Star rating={book.rating.count} />
          <div className='flex justify-center gap-2'>
            <div className="text-[#11142d] text-right font-['Cairo'] text-xl font-bold leading-[normal]">${book.price}</div>
            <div className="text-[#aaa] text-right font-['Cairo'] font-semibold leading-[normal]">${book.rating.count   }</div>
          </div>
        </div>
      </div>
    </>
  );
};
