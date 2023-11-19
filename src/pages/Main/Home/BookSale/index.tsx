import React, { FC, useState } from 'react'
import { BookSaleComponent } from '../../../../components/BookSaleComponent'

export const BookSale: FC = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("18 november 2023")
  date.setDate(date.getDate() + count)
  
  function handleReset() {
    setCount(0);
    setStep(1);
  }

  // const handleBonus = () => setStep((s) => s + 1)
  // const handleMinus = () => setStep((s) => s - 1)
  // const handleMinusCount = () => step ? setCount((s) => s - step) : " count yoxdu"
  // const handleBonusCount = () => step ? setCount((s) => s + step) : " count yoxdu"

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

    
    <div>
      <form onSubmit={handleReset}>
        <input 
        type="range" 
        value={step} 
        onChange={()=>{}} />
        <div>
        <button>-</button>
          <input 
          type="text" 
          value={count}
          onChange={(e)=>{
            

          }}
           /> 
        <button>+</button>  
        </div>
        <div>
          <button>reset</button>
        </div>
      </form>
    </div>
      <div>
        <span>{count===0 
        ? "Today is "
        : count>0
        ? `${count} days from today is `
        : `${Math.abs(count)} days ago was `
      }</span>
        {count} days from today  {date.toDateString()}
      </div>

    </section>

  )
}
