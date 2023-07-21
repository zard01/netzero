import InfoWrap from "./InfoWrap";
import Subheader from "./Subheader";

export default function Other() {
  return (
    <div id="other">
      <Subheader>
        <>Other</>
      </Subheader>
      <div className="mx-16 grid justify-center gap-10 ">
        <InfoWrap title="Expert advice and guidance">
          <>
            (Access to experts in the field who can provide advice and guidance on reducing carbon emissions and
            transitioning to more sustainable practices.)
          </>
        </InfoWrap>
        <InfoWrap title="Resource library">
          <>
            (A collection of resources, such as guides, reports, and white papers, on topics related to sustainability
            and reducing carbon emissions.)
          </>
        </InfoWrap>
        <InfoWrap title="Training and education">
          <>
            (Training and education programs to help businesses understand the importance of reducing their carbon
            footprint and how to implement sustainable practices.)
          </>
        </InfoWrap>
        <InfoWrap title="What else can you do?">
          <ul>
            <li>
              - use advanced analytics and machine learning to optimize their production processes and reduce energy
              consumption.
            </li>
            <li className="ml-10">
              - by collecting data on energy usage and production output, manufacturers can identify areas where they
              can reduce energy consumption and carbon emissions.
            </li>
            <li>
              - use sensors and other IoT devices to monitor energy usage in real-time and identify inefficiencies.{" "}
            </li>
            <li className="ml-10">
              -by using these technologies, manufacturers can reduce their environmental impact while also improving
              their bottom line through reduced energy costs.
            </li>
            <li>-3D printing</li>
            <li className="ml-10">
              - enables manufacturers to produce parts and products on-demand, which can reduce waste and transportation
              emissions associated with traditional manufacturing processes
            </li>
            <li className="ml-10">
              - can enable manufacturers to design products with optimized geometries that use less material and are
              therefore more resource-efficient
            </li>
            <li className="ml-10">
              - can enable manufacturers to produce products locally, reducing the need for long-distance transportation
              and associated emissions.
            </li>
          </ul>
        </InfoWrap>
      </div>
    </div>
  );
}
