import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className='header'>
    <div className='container'>
    <div className='logo'>Bezyl Mophat Otieno</div>
   <div className='links'>
    <Link href='/'>About</Link>
    <Link href='/about/team'>Our Team </Link>
    <Link href='/code/repos'>Code</Link>
   </div>
    </div>
    </div>
  )
}

export default Header
