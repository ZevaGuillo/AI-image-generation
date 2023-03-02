import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { onSetSearch } from "../../store/gallery/gallerySlice";
const Search = () => {
  const [inputSearch, setInputSearch] = useState("");
  const dispatch = useAppDispatch();
  const {search} = useAppSelector(state => state.gallery);

  const onClick = async () => {
    if (inputSearch !== search) {
      dispatch(onSetSearch(inputSearch));
    }
  };

  return (
    <div className="pt-6 sm:pt-8 w-full flex justify-center items-center gap-4">
      <div className="relative w-full sm:w-1/2">
        <input
          className="h-10 w-full rounded-full border-none bg-hover pl-4 pr-10 text-sm shadow-sm"
          id="search"
          type="search"
          value={inputSearch}
          onChange={e => setInputSearch(e.target.value)}
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
