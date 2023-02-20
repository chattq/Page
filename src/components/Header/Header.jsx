import React from 'react'
import Logo from '../Logo/Logo'

export default function Header() {
  return (
    <div className='max-w-[1120px] my-0 mx-auto pt-[48px]'>
      <div className='flex justify-between'>
        <Logo />
        <div>
          <button className='text-[16px] h-[60px] bg-purper px-[60px] rounded-[50px] font-bold text-white'>
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}
