import DetailBar from "./DetailBar";

export default function Content({ children }) {
  return (
    <main className="bg-green-500 h-screen w-full flex justify-between">
      <div className="flex justify-center w-full ">
        <div className="mr-2 ml-2 w-full bg-green-500 flex flex-col">
          <section className="form-control w-full mt-24">
            <div className="input-group  flex place-items-center justify-center">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered w-2/4"
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </section>
          <section className="mt-3  h-full">
            <div className="grid gap-4 p-2.5 tablet:grid-cols-2  smartphone:grid-cols-1  laptop:grid-cols-3">
              <div className="card w-full bg-[#E1EAEF]">
                <figure className="px-10 pt-10">
                  <img
                    src="https://placeimg.com/400/225/arch"
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <DetailBar />
    </main>
  );
}
