import React from 'react'
import Image from 'next/image'

const CardInfo = ({title, image, width, height, right=false, description
 }) => {
  return (
    <>
      {
        right ? <div className='flex w-full'></div> : null
      }
      <div className='p-2 flex flex-col w-full justify-start bg-slate-300 opacity-95 hover:opacity-100 transition-opacity cursor-pointer'>
        <h3 className='font-semibold md:text-2xl text-xl mb-3'>{title}</h3>
        <div className={`flex flex-wrap md:flex-nowrap ${right ? "md:flex-row-reverse" : null}`}>
          <div className='w-[240px] '>
            <Image 
                src={image} width={width} height={height} />
          </div>
          <p className=' w-[300px] m-auto mt-0'>{description}</p>
        </div>
      </div>
      {
        !right ? <div className='flex w-full'></div> : null
      }
    </>
  )
}

export default CardInfo