export default function Home() {
  return (
    <main className="grid min-h-screen grid-rows-[100px,1fr,1fr,1fr,1fr] gap-x-0 gap-y-0 md:grid-cols-[300px,1fr,1fr,1fr,1fr]">
      <div className="col-span-5 row-span-1 block bg-red-800 md:hidden"></div>
      <div className="col-span-1 row-span-5 hidden bg-red-600 md:block"></div>
      <div className="col-span-5 row-span-4 bg-red-300 md:col-span-4 md:row-span-5"></div>
    </main>
  );
}
