export default function DetailBar() {
  //   const LoaderImage = ({ src, width, quality }) => {
  //     return;
  //   };
  return (
    <div className="laptop:flex flex-col h-screen w-1/4 bg-slate-300 shadow-md smartphone:hidden">
      <section className="flex flex-col justify-center place-items-center w-full  ">
        <div className="avatar h-36 mt-[2.625rem]">
          <div className="w-full rounded-xl">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <h1 className="mt-2 font-bold">Ouroboros Technologies</h1>
        <h2>ART DIVISON</h2>
      </section>
      <div className="divider">Requirment</div>
      {/* Need Be Fixed When it overflow */}
      <div className="w-full">
        <ol className="ml-5 list-inside list-disc flex flex-col">
          <li className="truncate ...">Mahasiswa Aktif 2022</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
        </ol>
      </div>
      <section className="flex bg-red-400"></section>
      <div className="divider">About The Job</div>
      <div className="ml-5 mr-5 flex bg-slate-200 ">
        <p className="break-words">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
          rerum voluptas culpa nesciunt, voluptatem harum minima inventore nam
          ullam deserunt suscipit beatae expedita! Ipsa necessitatibus facere
          saepe. Hic, aspernatur maxisme?
        </p>
      </div>
      <section className="bg-orange-300">
        <div></div>
      </section>
    </div>
  );
}
