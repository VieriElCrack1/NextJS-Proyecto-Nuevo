import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";

const navItems = [
  { path: '/about', text: 'About'},
  { path: '/pricing', text: 'Pricing'},
  { path: '/contact', text: 'Contact'},
]

export const Navbar = () => {

  console.log('Navbar created');
  
  return (
    <nav className='flex bg-blue-800/30 p-2 m-2 rounded'>
        
        <Link href={'/'} className="flex items-center m-5">
          <HomeIcon className="mr-2" />
          <span>Home</span>
        </Link>

        <div className='flex flex-1'></div>

        {
          navItems.map( navItem => (
            <Link key={ navItem.path } className='mr-2' href={ navItem.path }>{navItem.text}</Link>
          ))
        }

    </nav>
  )
}
