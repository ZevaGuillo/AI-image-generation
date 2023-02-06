import { TbNewSection } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux";

const UserNavbar = () => {
  const { profilePic, username , slug} = useAppSelector(state => state.auth);

  return (
    <div className="flex items-center justify-end gap-4">
      {/* <div className="flex items-center gap-4">
            <div className="relative">
              <label
                className="sr-only"
                htmlFor="search">
                {" "}
                Search{" "}
              </label>

              <input
                className="h-10 w-full rounded-full border-none bg-hover pl-4 pr-10 text-sm shadow-sm sm:w-56"
                id="search"
                type="search"
                placeholder="Search website..."
              />

              <button
                type="button"
                className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-neutral-700 p-2 text-gray-400 transition hover:text-gray-100">
                <span className="sr-only">Submut Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div> */}

      <Link
        className="inline-block rounded-full gradient p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
        to="/generate">
        <span className="flex gap-2 items-center rounded-full bg-bgColor px-4 py-2 text-sm font-medium transition  hover:ease-out hover:bg-transparent">
          <span className="hidden md:block">Generate your image </span>
          <TbNewSection className="text-lg"/>
        </span>
      </Link>

      <span
        aria-hidden="true"
        className="block h-6 w-px rounded-full bg-gray-200"></span>

      <Link
        to={`/${slug}`}
        className="block shrink-0">
        <span className="sr-only">Profile</span>
        <img
          alt={username}
          src={profilePic}
          referrerPolicy="no-referrer"
          className="h-10 w-10 rounded-full object-cover"
        />
      </Link>
    </div>
  );
};

export default UserNavbar;
