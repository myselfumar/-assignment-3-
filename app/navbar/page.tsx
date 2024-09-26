import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>Navbar 
 <Link href={'/about'}><h1> Go to About Page </h1></Link>       

    </div>
  )
}

export default Navbar
