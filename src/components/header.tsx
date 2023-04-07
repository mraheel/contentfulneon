import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex w-auto bg-slate-200 body-font'>
        <div className='flex p-5 items-center w-full'>
           
            <nav className="flex flex-wrap items-center text-base justify-between">
                
                <Link href="/neon" className='mr-5 hover:text-gray-900 cursor-pointer'>Data Fetching Using Neon</Link>
                <Link href="/contentful" className='mr-5 hover:text-gray-900 cursor-pointer'>Data Fetching Usning Contentfull</Link>
                
            </nav>
            
        </div>
        
    </header>
  )
}
