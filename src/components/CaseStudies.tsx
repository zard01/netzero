import Subheader from './Subheader';

function List({ href, children }: { href: string; children: JSX.Element }) {
  return (
    <li className='flex items-center gap-12'>
      <div className='text-lg'>{children} </div>
      <a href={href} className=' text-blue-950 underline'>
        {href}
      </a>
    </li>
  );
}

export default function CaseStudies() {
  return (
    <div id='cstudy'>
      <Subheader>
        <>Case Studies</>
      </Subheader>
      <div className='grid justify-center font-ssc text-gray-300  mx-16'>
        <div className='text-xl text-center font-bold mb-3'>
          Case studies and best practices from other manufacturers who have successfully transitioned to a net zero
          carbon emission business model
        </div>
        <ul className='grid justify-evenly'>
          <List href='www.link/example.org'>
            <>Lorem Ipsum:</>
          </List>
          <List href='link/example.org'>
            <>Lorem Ipsum:</>
          </List>
          <List href='link/example.org'>
            <>Lorem Ipsum:</>
          </List>
        </ul>
        <div className='text-center'>
          These case studies provide real-world examples of how manufacturers can reduce their environmental impact
          while also improving their bottom line.
        </div>
      </div>
    </div>
  );
}
