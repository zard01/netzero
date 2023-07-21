import CaseStudies from '@/components/CaseStudies';
import EfficiencyCalculator from '@/components/Calculators';
import Header from '@/components/Header';
import MainHeader from '@/components/MainHeader';
import PerformanceGuide from '@/components/PerformanceGuide';
import { BiSolidLeaf } from 'react-icons/bi';
import Other from '@/components/Other';
export default function Home() {
  return (
    <>
      <Header>
        <>
          <div className='text-6xl '>Welcome</div>
          <div className='text-xl '>to the</div>
          <MainHeader>
            <>
              Sustainable Manufacturing Toolkit <BiSolidLeaf className=' text-lime-500' />
            </>
          </MainHeader>
        </>
      </Header>
      <PerformanceGuide />
      <CaseStudies />
      <EfficiencyCalculator />
      <Other />
    </>
  );
}
