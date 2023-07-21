export default function Header({ children }: { children: JSX.Element }) {
  return (
    <div className='font-ssc text-center text-gray-300 tracking-widest grid justify-center gap-3  '>{children} </div>
  );
}
