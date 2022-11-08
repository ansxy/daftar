import { useEffect, useState } from "react";
import useSWR from "swr";
import DetailBar from "./DetailBar";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function MainContent() {
  const [dataVacany, setData] = useState("");
  const { data, error } = useSWR("/api/ukm/registervacany", fetcher);
  const [detailData, setDetailData] = useState("AAA");
  useEffect(() => {
    setData(data);
  }, [data]);

  const handleChoice = (e) => {
    e.preventDefault();
    setDetailData(data.vacany[e.target.id]);
  };

  return (
    <>
      <div className="mr-2 ml-2 w-full flex flex-col justify-center">
        <section className="form-control w-full mt-24">
          <div className="input-group flex place-items-center justify-center">
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
        <section className="mt-3 h-full overflow-y-auto scrollbar-hide">
          <div className="grid gap-4 p-2.5 tablet:grid-cols-2  smartphone:grid-cols-1  laptop:grid-cols-3">
            {dataVacany ? (
              <>
                {dataVacany.vacany.map((data, i) => {
                  return (
                    <div className="card bg-[#E1EAEF] w-full" key={i}>
                      <figure className="px-10 pt-10 pb-10 ">
                        <img
                          src="https://placeimg.com/400/225/arch"
                          alt="Shoes"
                          className="rounded-xl"
                        />
                      </figure>
                      <div className="card-body items-center text-center h-96">
                        <div className="flex flex-col justify-between h-full">
                          <h2 className="card-title">{data.name}</h2>
                          <div className="h-1/2 overflow-hidden">
                            <p className="text-left ">{data.description}</p>
                          </div>
                          <div className="card-actions flex justify-center">
                            <label
                              htmlFor="my-drawer-4"
                              className="drawer-button btn btn-primary"
                              id={i}
                              onAnimationEnd={handleChoice}
                            >
                              Detail
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div className=" card bg-[#E1EAEF] w-full">
                  <figure className="animate-pulse w-5/6 px-10 pt-10 mx-auto">
                    <svg
                      className="w-full text-gray-200 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512"
                    >
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </figure>
                  <div className="mt-10 animate-pulse card-body items-center text-center">
                    <div className="h-2 w-1/2 bg-slate-700 rounded"></div>
                    <div className="h-2 w-8/12 bg-slate-700 rounded"></div>
                    <div className="h-2 w-11/12 bg-slate-700 rounded"></div>
                  </div>
                </div>
                <div className=" card bg-[#E1EAEF] w-full">
                  <figure className="animate-pulse w-5/6 px-10 pt-10 mx-auto">
                    <svg
                      className="w-full text-gray-200 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512"
                    >
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </figure>
                  <div className="mt-10 animate-pulse card-body items-center text-center">
                    <div className="h-2 w-1/2 bg-slate-700 rounded"></div>
                    <div className="h-2 w-8/12 bg-slate-700 rounded"></div>
                    <div className="h-2 w-11/12 bg-slate-700 rounded"></div>
                  </div>
                </div>
                <div className=" card bg-[#E1EAEF] w-full">
                  <figure className="animate-pulse w-5/6 px-10 pt-10 mx-auto">
                    <svg
                      className="w-full text-gray-200 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512"
                    >
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </figure>
                  <div className="mt-10 animate-pulse card-body items-center text-center">
                    <div className="h-2 w-1/2 bg-slate-700 rounded"></div>
                    <div className="h-2 w-8/12 bg-slate-700 rounded"></div>
                    <div className="h-2 w-11/12 bg-slate-700 rounded"></div>
                  </div>
                </div>
                <div className=" card bg-[#E1EAEF] w-full">
                  <figure className="animate-pulse w-5/6 px-10 pt-10 mx-auto">
                    <svg
                      className="w-full text-gray-200 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512"
                    >
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </figure>
                  <div className="mt-10 animate-pulse card-body items-center text-center">
                    <div className="h-2 w-1/2 bg-slate-700 rounded"></div>
                    <div className="h-2 w-8/12 bg-slate-700 rounded"></div>
                    <div className="h-2 w-11/12 bg-slate-700 rounded"></div>
                  </div>
                </div>
                <div className=" card bg-[#E1EAEF] w-full">
                  <figure className="animate-pulse w-5/6 px-10 pt-10 mx-auto">
                    <svg
                      className="w-full text-gray-200 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512"
                    >
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </figure>
                  <div className="mt-10 animate-pulse card-body items-center text-center">
                    <div className="h-2 w-1/2 bg-slate-700 rounded"></div>
                    <div className="h-2 w-8/12 bg-slate-700 rounded"></div>
                    <div className="h-2 w-11/12 bg-slate-700 rounded"></div>
                  </div>
                </div>
                <div className=" card bg-[#E1EAEF] w-full">
                  <figure className="animate-pulse w-5/6 px-10 pt-10 mx-auto">
                    <svg
                      className="w-full text-gray-200 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512"
                    >
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </figure>
                  <div className="mt-10 animate-pulse card-body items-center text-center">
                    <div className="h-2 w-1/2 bg-slate-700 rounded"></div>
                    <div className="h-2 w-8/12 bg-slate-700 rounded"></div>
                    <div className="h-2 w-11/12 bg-slate-700 rounded"></div>
                  </div>
                </div>
                <div className=" card bg-[#E1EAEF] w-full">
                  <figure className="animate-pulse w-5/6 px-10 pt-10 mx-auto">
                    <svg
                      className="w-full text-gray-200 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512"
                    >
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </figure>
                  <div className="mt-10 animate-pulse card-body items-center text-center">
                    <div className="h-2 w-1/2 bg-slate-700 rounded"></div>
                    <div className="h-2 w-8/12 bg-slate-700 rounded"></div>
                    <div className="h-2 w-11/12 bg-slate-700 rounded"></div>
                  </div>
                </div>
              </>
            )}
            {/* Loading Data from database */}
          </div>
        </section>
      </div>

      <div className="drawer drawer-end w-1/4">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content h-screen w-full"></div>
        <div className="drawer-side h-screen w-full ">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <DetailBar data={detailData} />
        </div>
      </div>
    </>
  );
}
