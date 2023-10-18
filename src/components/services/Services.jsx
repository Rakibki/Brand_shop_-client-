import React from 'react'
import Services1 from "../../assets/images/Services/truck.svg"
import Services2 from "../../assets/images/Services/support.svg"
import Services3 from "../../assets/images/Services/gift.svg"
import Services4 from "../../assets/images/Services/discount.svg"

const Services = () => {
  return (
    <div className='bg-[#f5f5f7] mb-6 p-14'>
        <div className='grid gap-3 grid-cols-4'>
            <div className='flex gap-2 items-center'>
                <img className='w-[50px]' src={Services1} alt="" />
                <div>
                    <h2 className='font-semibold'>Fast shipping</h2>
                    <p className='text-xs text-[#777777]'>Free delivery for order over $99.00.</p>
                </div>
            </div>
           
            <div className='flex gap-2 items-center'>
                <img className='w-[50px]' src={Services2} alt="" />
                <div>
                    <h2 className='font-semibold'>Online Support</h2>
                    <p className='text-xs text-[#777777]'>Feel free to call us & get best support.</p>
                </div>
            </div>

            <div className='flex gap-2 items-center'>
                <img className='w-[50px]' src={Services3} alt="" />
                <div>
                    <h2 className='font-semibold'>Gift Voucher</h2>
                    <p className='text-xs text-[#777777]'>Refer a friend & get a surprise gifts.</p>
                </div>
            </div>

            <div className='flex gap-2 items-center'>
                <img className='w-[50px]' src={Services4} alt="" />
                <div>
                    <h2 className='font-semibold'>Secure payment</h2>
                    <p className='text-xs text-[#777777]'>Safe & more secure way to pay online.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services