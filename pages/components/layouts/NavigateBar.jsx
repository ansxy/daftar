import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Gambar from "../../../public/google.jpg";

export default function NavigateBar() {
  const { data: session } = useSession();
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.replace("/registervacany");
  };
  const handleNavigate = (e) => {
    e.preventDefault();
    router.replace("/");
  };
  return (
    <div>
      <div className="drawer absolute laptop:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="btn btn-circle swap swap-rotate mt-10 ml-10"
          >
            <input type="checkbox" />
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
        <div className="drawer-side h-screen w-screen">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul data-theme="mytheme" className="menu bg-base-100 w-56 p-2">
            <li>
              <a onClick={handleNavigate}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Home
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Profile
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Status
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Manager
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <section className="MOBILE-MENU absolute p-10 laptop:hidden">
        <label className="btn btn-circle swap swap-rotate">
          <input type="checkbox" />
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </section> */}
      <aside
        data-theme="mytheme"
        className="flex flex-col h-screen w-[1/4/2] justify-between laptop:bg-primary drop-shadow-lg"
      >
        <section className="laptop:flex  flex-col h-full justfiy-between p-3.5 smartphone:hidden">
          {" "}
          <nav className="flex flex-col h-full justify-between">
            <div className="flex justify-center mt-10">
              <div className="font-sans text-4xl font-bold text-blue-900/75">
                DAFTAR
              </div>
            </div>
            {/* relative -top-16 from-stone-50 */}
            <div className="flex  justify-center relative -top-24 ">
              <ul
                data-theme="mytheme"
                className="menu bg-base-100 w-56 p-2 rounded-box"
              >
                <li>
                  <a onClick={handleNavigate}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Profile
                  </a>
                </li>
                <li>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    Status
                  </a>
                </li>
                <li>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    Manager
                  </a>
                </li>
              </ul>
            </div>
            <div className=" h-1/6 flex justify-center flex-col place-items-center relative ">
              {!session && (
                <Link
                  href="/login"
                  className="btn btn-active btn-primary btn-wide"
                >
                  Sign In
                </Link>
              )}
              {session && (
                <Link
                  href={{
                    pathname: `/profile/[email]`,
                    query: {
                      email: session.user.email,
                    },
                  }}
                  as={`/profile/${session.user.email}`}
                  className="flex items-center space-x-4 border p-1.5 rounded-md shadow-md "
                >
                  {/* Fix it not working */}
                  <Image
                    widht={10}
                    height={10}
                    className="w-10 h-10 rounded-full cursor-pointer"
                    src={Gambar}
                    alt=""
                  />
                  <div className="font-medium text-blue-900">
                    <div>{session.user.name}</div>
                    <div className="text-sm text-gray-800">Turu</div>
                  </div>
                </Link>
              )}
              {!session ? (
                <button
                  onClick={handleClick}
                  className="items-center space-x-4 border p-1.5 rounded-md shadow-md hidden"
                >
                  {/* Fix it not working */}
                  <div className="font-medium text-blue-900">
                    <div>Register Vacany</div>
                  </div>
                </button>
              ) : (
                <>
                  {session.user.role == "MAHASISWA" && (
                    <button
                      onClick={handleClick}
                      className="flex items-center space-x-4 border p-1.5 rounded-md shadow-md "
                    >
                      {/* Fix it not working */}
                      <div className="font-medium text-blue-900">
                        <div>Register Vacany</div>
                      </div>
                    </button>
                  )}
                </>
              )}
            </div>
          </nav>
        </section>
      </aside>
    </div>
  );
}
