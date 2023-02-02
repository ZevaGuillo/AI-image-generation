import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-bgColor bg-opacity-20 backdrop-blur-lg drop-shadow-lg w-full flex relative justify-between items-center px-2 md:px-8 h-14">
      <section className="inline-flex">
        <Link to="/">
          <div className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300">
            PixelAI
          </div>
        </Link>
      </section>

      <section className="flex items-center">
        <Link
          className="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
          to="/generate">
          <span className="flex gap-2 rounded-full bg-bgColor px-4 py-2 text-sm font-medium transition  hover:ease-out hover:bg-transparent">
            <span className="hidden md:block">Generate your image</span>
            🎅
          </span>
        </Link>
      </section>
    </nav>
  );
};

export default Navbar;
