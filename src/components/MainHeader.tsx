export default function MainHeader({ children }: { children: JSX.Element }) {
  return <div className=' text-5xl font-semibold drop-shadow-md flex gap-4'>{children}</div>;
}
