import { getSession, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Gambar from "../../../public/google.jpg";
export default function NavigateBar() {
  const { data: session } = useSession();
  const [NavigateBarStatus, setNavigateBarStatus] = useState(false);
  return (
    <aside
      data-theme="mytheme"
      className="flex flex-col h-screen w-[1/4/2] justify-between laptop:bg-primary drop-shadow-lg"
    >
      <section className="MOBILE-MENU flex p-10 laptop:hidden">
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
      </section>
      <section className="laptop:flex  flex-col h-full justfiy-between smartphone:hidden">
        {" "}
        <nav className="flex flex-col h-full justify-between">
          <div className="flex justify-center mt-10">
            <div className="font-sans text-4xl font-bold text-blue-900/75">
              DAFTAR
            </div>
          </div>
          {/* relative -top-16 from-stone-50 */}
          <div className="flex justify-center relative -top-24 from-stone-50">
            <ul className="menu bg-base-100 w-56 p-2 rounded-box">
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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Item 2
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
                  Item 1
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
                  Item 3
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
              <a
                href="/profile"
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
              </a>
            )}
            <a
              href="/registervacany"
              className="flex items-center space-x-4 border p-1.5 rounded-md shadow-md "
            >
              {/* Fix it not working */}
              <div className="font-medium text-blue-900">
                <div>Register Vacany</div>
              </div>
            </a>
          </div>
        </nav>
      </section>
    </aside>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: { session },
  };
};
