import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (    
    <div>
        <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-red-100">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Umeed</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/"  legacyBehavior> 
      <a class="mr-5 te xt-red-500 hover:text-slate-900">Home</a>
      </Link>
      <Link href="/gallery" legacyBehavior>
       <a class="mr-5 text-red-500 hover:text-slate-900">Gallery</a>
       </Link>
      <Link href="/#" legacyBehavior> 
      <a class="mr-5 text-red-500 hover:text-slate-900">About</a>
      </Link>
      <Link href="/#" legacyBehavior> 
      <a class="mr-5 text-red-500 hover:text-slate-900">Dashboard</a>
      </Link>
      <Link href="/#" legacyBehavior>
       <a class="mr-5 text-red-500 hover:text-slate-900">Donate</a>
       </Link>
    </nav>
    <Link href={'/login'} legacyBehavior><button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button></Link>
  </div>
</header>
      
    </div>
  )
}

export default Navbar
