import Subheader from "./Subheader";

function List({ head, children }: { head: string; children: JSX.Element }) {
  return (
    <li>
      <div className="text-xl mb-1 font-bold">{head}</div>
      <div className="text-lg mx-5">{children}</div>
    </li>
  );
}

export default function PerformanceGuide() {
  return (
    <div id="guide">
      <Subheader>
        <>Guide to assessing your current sustainability performance</>
      </Subheader>
      <ol className=" mx-16 grid justify-center gap-4 font-ssc text-gray-300">
        <List head="1. Define the scope:">
          <>
            Define the scope of the sustainability assessment, including the products or services to be evaluated, the
            geographic scope, and the time period to be assessed.
          </>
        </List>
        <List head="2. Collect data:">
          <>
            Collect data on the environmental impact of the products or services being evaluated, including data on raw
            materials, energy consumption, transportation, and waste management.
          </>
        </List>
        <List head="3. Conduct a life cycle assessment (LCA):">
          <>
            Use the data collected in step 2 to conduct an LCA, which evaluates the environmental impact of a product or
            service throughout its entire life cycle, from raw material extraction to disposal.
          </>
        </List>
        <List head="4. Analyze the results: ">
          <>
            Analyze the results of the LCA to identify the areas of the product or service{"'"}s life cycle that have
            the greatest environmental impact.
          </>
        </List>
        <List head="5. Set sustainability goals: ">
          <>
            Set sustainability goals and metrics based on the results of the LCA. These goals should be specific,
            measurable, and time-bound.
          </>
        </List>
        <List head="6. Develop a sustainability strategy:">
          <>
            Develop a sustainability strategy that outlines how the manufacturer will achieve its sustainability goals.
            <br />
            This strategy should include specific actions and initiatives to be implemented,timelines for
            implementation, and responsible parties for each initiative.
          </>
        </List>
        <List head="7. Monitor progress:">
          <>
            Monitor progress towards sustainability goals and regularly report on sustainability metrics to internal and
            external stakeholders.
          </>
        </List>
      </ol>
    </div>
  );
}
