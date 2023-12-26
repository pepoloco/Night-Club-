import React from 'react'
import Link from 'next/link'

const navBarColor = {
  backgroundImage: 'linear-gradient(to right, #011206, #00210a)'
}
const liSBoxes = {
  border: '1px solid rgba(22, 163,74,0.4)',
  borderRadius: '12px',
  width: '200px',
  padding: '10px',
  color: 'white',
  cursor: 'pointer',
}

const Navbar = () => {
  return (
    <nav className='flex flex-row gap-20 items-center justify-center p-5 mt-auto border-1
     border-white rounded shadow-lg shadow-green-600/40' style={navBarColor}>
      <ul style={liSBoxes} className='hover-effect text-center'>
        <li>
          <Link href='/home'>Home</Link>
        </li>
      </ul>
      <ul style={liSBoxes} className='hover-effect text-center'>
        <li>
          <Link href='/library'>Library</Link>
        </li>
      </ul>
      <ul style={liSBoxes} className='hover-effect text-center'>
        <li>
          <Link href='/playlist'>Playlist</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar