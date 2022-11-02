import React from 'react'
import logo from '../assets/img/logo.png'

const Navbar = ({datos}) => {

  return (
    <nav className='w-full border-bottom border-solid border-neutral-500'> 
    <div className='bg-slate-100 mx-auto px-10 py-2 flex justify-between'>
      <img className='h-9' src={logo}/>
      <ul className='flex gap-6 my-auto'>
        {datos.map((Nav)=>(
          <li><button className='p-2 font-sans hover:bg-cyan-500 hover:text-white rounded-md  transition-all'>{Nav.nombre}</button></li>
        ))}
      </ul>
      </div>
    </nav>
  )
}

export default Navbar