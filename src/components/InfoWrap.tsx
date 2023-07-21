export default function InfoWrap({ title, children }: { title: string; children: JSX.Element }) {
  return (
    <div className="grid  gap-2 font-ssc text-gray-300 ">
      <div className="text-xl font-bold">{title}</div>
      <div>{children}</div>
    </div>
  );
}
