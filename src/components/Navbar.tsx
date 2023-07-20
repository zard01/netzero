import Link from 'next/link';

function NavLink({ children, href }: { children: JSX.Element; href: string }) {
  return (
    <Link
      href={href}
      className='px-7 py-2  text-gray-400 hover:text-gray-300 hover:scale-105 transition ease-in-out   tracking-wide'>
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <div className=' font-ssc  border-b-2 border-gray-500 py-3 flex divide-x-2 divide-gray-500 mb-10'>
      <NavLink href='#'>
        <>Link 1</>
      </NavLink>
      <NavLink href='#'>
        <>Link 2</>
      </NavLink>
      <NavLink href='#'>
        <>Link 3</>
      </NavLink>
    </div>
  );
}
