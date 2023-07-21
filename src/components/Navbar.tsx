'use client';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { usePathname } from 'next/navigation';

const linkStyle =
  'px-7 py-2  text-gray-400 hover:text-gray-300  hover:scale-105 transition ease-in-out   tracking-wide font-bold hover:drop-shadow-md';

function NavLink({ children, href }: { children: JSX.Element; href: string }) {
  return (
    <Link href={href} className={linkStyle}>
      {children}
    </Link>
  );
}

function NavLinkScroll({ children, href, to }: { children: JSX.Element; href: string; to: string }) {
  return (
    <ScrollLink href={href} to={to} className={linkStyle} offset={-100} spy={true}>
      {children}
    </ScrollLink>
  );
}

export default function Navbar() {
  const path = usePathname();
  return (
    <div className=' font-ssc  border-b-2 border-gray-500 py-3  mb-10 flex justify-between sticky top-0 z-50 bg-gray-600'>
      <div className='flex divide-x-2 divide-gray-500'>
        <NavLink href='/'>
          <>Home</>
        </NavLink>
        {path === '/' ? (
          <>
            <NavLinkScroll href='#guide' to='guide'>
              <>Assessment Guide</>
            </NavLinkScroll>
            <NavLinkScroll href='#cstudy' to='cstudy'>
              <>Case Studies</>
            </NavLinkScroll>
            <NavLinkScroll href='#calc' to='calc'>
              <>Calculators</>
            </NavLinkScroll>
            <NavLinkScroll href='#other' to='other'>
              <>Other</>
            </NavLinkScroll>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className='flex divide-x-2 divide-gray-500'>
        <NavLink href='/finance'>
          <>Finance</>
        </NavLink>
        <NavLink href='/control'>
          <>Control</>
        </NavLink>
        <NavLink href='/assessment'>
          <>Assessment</>
        </NavLink>
      </div>
    </div>
  );
}
