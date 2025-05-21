import React from 'react'
import DreamRent from './rentcomponents/DreamRent'
import HouseRent from './rentcomponents/HouseRent'

const Rent = () => {
  return (
    <div className='bg-[#2D2D2D] rounded-b-[50px] shadow-2xl shadow-black/10 mt-20 my-8 grid gap-8 py-40 '>
        <DreamRent/>
        <HouseRent/>
    </div>
  )
}

export default Rent