import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-bgColor bg-opacity-20 border-b border-hover backdrop-blur-lg drop-shadow-lg w-full flex relative justify-between items-center px-2 md:px-32 h-16">
      <section className="inline-flex">
        <Link to="/">
          <div className="text-gradient text-lg md:text-4xl">
            PixelAI
          </div>
        </Link>
      </section>

      <section className="flex items-center">
        <Link
          className="inline-block rounded-full gradient p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
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
