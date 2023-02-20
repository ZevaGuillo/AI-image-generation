import { useState } from "react";
import Swal from "sweetalert2";
const Search = () => {
  const [search, setSearch] = useState("");

  const onClick = async () => {
    try {
      if (search.length >= 3) {
        const response = await fetch(`${import.meta.env.VITE_SERVER}/api/v1/post?text=${search}`);

        if (response.ok) {
          const result = await response.json();
          console.log(result);
        }
      }
    } catch (error) {
      console.log(error);

      Swal.fire({
        title: "Out of service",
        text: "Search not working",
        icon: "error",
        focusConfirm: false,
        confirmButtonText: "Ok",
      });
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div className="pt-6 sm:pt-8 w-full flex justify-center items-center gap-4">
      <div className="relative w-full sm:w-1/2">
        <input
          className="h-10 w-full rounded-full border-none bg-hover pl-4 pr-10 text-sm shadow-sm"
          id="search"
          type="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search..."
        />

        <button
          onClick={onClick}
          type="button"
          className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-neutral-700 p-2 text-gray-400 transition hover:text-gray-100">
          <span className="sr-only">Submut Search</span>
          <svg
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
    </div>
  );
};

export default Search;
