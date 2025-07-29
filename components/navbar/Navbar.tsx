import React from 'react'

export const Navbar = () => {

  console.log('Navbar created');
  

  return (
    <nav className='flex bg-blue-800/30 p-2 m-2 rounded'>
        <span>Home</span>

        <div className='flex flex-1'></div>
        
        <a className='mr-2' href='/about'>About</a>
        <a className='mr-2' href='/pricing'>Princing</a>
        <a className='mr-2' href='/contact'>Contact</a>

    </nav>
  )
}
