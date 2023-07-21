import Header from "@/components/Header";
import MainHeader from "@/components/MainHeader";
import Subheader from "@/components/Subheader";

export default function Finance() {
  return (
    <>
      <Header>
        <MainHeader>
          <>Finance</>
        </MainHeader>
      </Header>
      <Subheader>
        <>
          The manufacturing sector may face significant financial hurdles when transitioning to a net zero carbon
          emission business model.
        </>
      </Subheader>
      <div className="mx-16  grid justify-center font-ssc text-gray-300 ">
        <div className="text-xl font-bold mb-5">Solutions :</div>
        <ul className="text-lg grid gap-4">
          <li>
            - work with financial institutions to secure financing for renewable energy projects and other
            sustainability initiatives.
          </li>
          <li>
            - take advantage of government incentives and subsidies for renewable energy and energy efficiency projects
          </li>
          <li>
            - implement circular economy principles, such as designing products for reuse or recycling, which can reduce
            material costs and create new revenue streams.
          </li>
        </ul>
        <div className="text-xl mt-14">
          By taking a strategic and holistic approach to sustainability, manufacturers can reduce their environmental
          impact while also improving their bottom line.
        </div>
      </div>
      <Subheader>
        <>Funding and Incentives</>
      </Subheader>
      <div className="mx-16 grid justify-center font-ssc text-gray-300 ">
        <div className="text-sm font-bold text-center">
          ( Information on funding and incentives available to help manufacturing SMEs invest in renewable energy and
          energy efficiency measures )
        </div>
        <br />
        <div className="text-lg">
          Pellentesque bibendum, lectus sed semper euismod, massa elit molestie turpis, in ultrices dui turpis sit amet
          nunc. Nullam eleifend turpis eu egestas pulvinar. Phasellus nec volutpat est, lacinia commodo est. Quisque
          bibendum cursus sapien, eget consequat tortor volutpat in. In hac habitasse platea dictumst. Donec porta ac
          enim non tincidunt.
          <br /> <br /> Ut luctus vestibulum maximus. In lectus urna, sollicitudin at tempus a, egestas sit amet massa.
          Praesent aliquam pulvinar ultricies. Mauris tristique facilisis ex eu tempus. Aliquam facilisis metus id dui
          cursus, non eleifend lacus bibendum.
        </div>
      </div>
    </>
  );
}
