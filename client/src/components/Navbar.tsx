import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux";


const Navbar = () => {
  const { status } = useAppSelector(state => state.auth);

  const handleOnClick = ()=>{
    window.open('http://localhost:8000/api/v1/auth/google/callback', "_self");
  }
  

  return (
    <nav className=" bg-bgColor bg-opacity-20 border-b border-hover backdrop-blur-lg drop-shadow-lg w-full flex relative justify-between items-center px-2 md:px-32 h-16">
      <section className="inline-flex">
        <Link to="/">
          <div className="text-gradient text-lg md:text-4xl">PixelAI</div>
        </Link>
      </section>

      <section className="flex items-center">
        {status === "authenticated" ? (
          <Link
            className="inline-block rounded-full gradient p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
            to="/generate">
            <span className="flex gap-2 rounded-full bg-bgColor px-4 py-2 text-sm font-medium transition  hover:ease-out hover:bg-transparent">
              <span className="hidden md:block">Generate your image</span>
              🎅
            </span>
          </Link>
        ) : (
          <div
            className="inline-block rounded-full gradient p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
            onClick={handleOnClick}
            >
            <span className="flex gap-2 rounded-full bg-bgColor px-4 py-2 text-sm font-medium transition  hover:ease-out hover:bg-transparent">
              <span className="hidden md:block">Sign in with google</span>
              🎅
            </span>
          </div>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
