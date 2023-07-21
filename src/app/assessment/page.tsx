import Header from "@/components/Header";
import MainHeader from "@/components/MainHeader";
import Subheader from "@/components/Subheader";

export default function Assessment() {
  return (
    <>
      <Header>
        <MainHeader>
          <>Assessment</>
        </MainHeader>
      </Header>
      <Subheader>
        <>
          Assessing environmental impact can be challenging for manufacturers, especially those with complex supply
          chains.
        </>
      </Subheader>
      <div className="mx-16  grid justify-center font-ssc text-gray-300 ">
        <div className="text-xl font-bold mb-5">Solutions :</div>
        <ul className="text-lg grid gap-4">
          <li>
            - use life cycle assessment (LCA) tools to evaluate the environmental impact of their products throughout
            their entire life cycle, from raw material extraction to disposal.
          </li>
          <li>
            - work with suppliers to collect data on the environmental impact of raw materials and transportation.
          </li>
          <li>
            - work with industry associations and other stakeholders to develop standardized methodologies for assessing
            environmental impact and reporting sustainability metrics.
          </li>
        </ul>
        <div className="text-xl mt-14">
          By taking a comprehensive approach to sustainability measurement and reporting, manufacturers can identify
          areas for improvement and track progress over time.
        </div>
      </div>
    </>
  );
}
