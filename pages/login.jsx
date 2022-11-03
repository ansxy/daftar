import { signIn } from "next-auth/react";
export default function Login() {
  const handleSignInGoogle = (e) => {
    e.preventDefault();
    signIn("google", { callbackUrl: "https://localhost:3000" });
  };
  return (
    <div className=" flex justify-center place-items-center h-screen w-screen bg-[url('https://media.tenor.com/2roX3uxz_68AAAAC/cat-space.gif')]">
      <div className="flex">
        {/* Section 1 */}
        <div className=" bg-white flex rounded-3xl mt-20 ">
          <div className="flex justify-items-center flex-col gap-2 p-32 ">
            <div className="text-black text-7xl uppercase font-bold">
              Welcome Back
            </div>
            <div className="text-black pb-20">
              Welcome Back ! Please enter your details.
            </div>
            <label htmlFor="email" className="text-black font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              required
            ></input>
            <label htmlFor="password" className="text-black font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Password"
              required
            ></input>
            <div className="flex flex-wrap justify-between">
              <div className="flex place-items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-black"
                >
                  Remember Me
                </label>
              </div>
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-black"
              >
                Forgot Password
              </label>
              {/* Ganti Jadi Link */}
            </div>
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Login
            </button>
            <button
              name=""
              type="button"
              onClick={handleSignInGoogle}
              className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mb-2 justify-center"
            >
              <svg
                className="mr-2 -ml-1 w-4 h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
