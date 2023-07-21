import InfoWrap from './InfoWrap';
import Subheader from './Subheader';

export default function Calculators() {
  return (
    <div id='calc'>
      <Subheader>
        <>Calculators</>
      </Subheader>
      <div className='mx-16 grid justify-center gap-10 '>
        <InfoWrap title='Energy Efficiency Calculator'>
          <>
            Vivamus porttitor diam nec scelerisque faucibus. Nam aliquam elit in est condimentum posuere. In lectus
            dolor, pellentesque ac venenatis a, pellentesque ut lectus. Vivamus semper placerat enim, a finibus justo
            ullamcorper at. Sed pellentesque erat sed nulla cursus facilisis vel vel purus. Suspendisse et quam sed
            lorem vulputate porta. Integer vel eros congue, aliquam justo ac, fringilla leo. <br /> <br />
            Donec non elit turpis. Vivamus condimentum purus at odio iaculis, at aliquam est luctus. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Phasellus erat elit, efficitur ac suscipit vel, malesuada
            nec metus.
          </>
        </InfoWrap>
        <InfoWrap title='Carbon Footprint Calculator'>
          <>
            Nullam nec rutrum lorem, sed cursus nisi. Nulla ornare, dolor non cursus commodo, dui sem facilisis massa,
            sed feugiat nibh neque non urna. Nullam quis arcu mollis, malesuada nunc vitae, luctus enim. Vestibulum
            facilisis, elit quis blandit commodo, risus sapien tempor sem, vel tristique leo metus eu lorem. Praesent ut
            cursus purus. Ut nec pretium ligula, quis tristique justo. <br /> <br /> Aliquam sollicitudin purus et
            sapien dictum commodo. Sed sit amet efficitur tortor. Vestibulum sit amet sapien eu metus posuere lobortis.
            Nullam a posuere nisl, eget aliquet est. Aliquam commodo lectus nec eros mattis, non vehicula dolor
            sollicitudin. Nunc non risus aliquet, commodo neque at, tempor massa.
          </>
        </InfoWrap>
      </div>
    </div>
  );
}
