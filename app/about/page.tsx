import Link from 'next/link'

import React from 'react'



const About = () => {
  return (
    <div>About Page
        <Link href={'/'}><h1>Go to Home Page</h1></Link>
    </div>
  )
}

export default About