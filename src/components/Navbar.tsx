import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className='navbar_link relative' href="/">HOME</Link>
          <Link className='navbar_link relative' href="/mens-clothing">MEN&apos;S COLLECTION</Link>
          <Link className='navbar_link relative' href="/womens-clothing">WOMEN&apos;S COLLECTION</Link>
          <Link className='navbar_link relative' href="/jewelery">JEWELRY</Link>
          <Link className='navbar_link relative' href="/electronics">ELECTRONICS</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
