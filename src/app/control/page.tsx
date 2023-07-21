import Header from '@/components/Header';
import MainHeader from '@/components/MainHeader';
import Subheader from '@/components/Subheader';

export default function Control() {
  return (
    <>
      <Header>
        <MainHeader>
          <>Control</>
        </MainHeader>
      </Header>
      <Subheader>
        <>
          Manufacturers may struggle with controlling emissions outside of their own operations, such as emissions
          associated with the transportation of raw materials and finished products.
        </>
      </Subheader>
      <div className='mx-16  grid justify-center font-ssc text-gray-300 '>
        <div className='text-xl font-bold mb-5'>Solutions :</div>
        <ul className='text-lg grid gap-4'>
          <li>
            - work with suppliers to reduce emissions associated with the transportation of raw materials by sourcing
            materials locally or by using more sustainable modes of transportation.
          </li>
          <li>
            - work with logistics providers to optimize transportation routes and reduce emissions associated with the
            transportation of finished products.
          </li>
          <li>
            - work with policymakers to promote sustainable transportation policies and infrastructure, such as electric
            vehicle charging stations and bike lanes, that can reduce emissions associated with transportation.
          </li>
        </ul>
        <div className='text-xl mt-14'>
          By taking a collaborative approach to sustainability, manufacturers can address emissions outside of their own
          operations and create a more sustainable supply chain.
        </div>
      </div>
    </>
  );
}
