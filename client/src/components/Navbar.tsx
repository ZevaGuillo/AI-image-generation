import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-white w-full flex relative justify-between items-center px-8 h-14">
      <section className="inline-flex">
        <Link to="/">
          <div>🥽🥽🥽</div>
        </Link>
      </section>

          <section className="flex items-center">
            <div
              className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full">
              <Link
                to={"/generate"}
                className="flex items-center relative cursor-pointer whitespace-nowrap text-neutral-800">
                <span className="hidden mr-4 md:block">Generate your image</span>
                🙈
              </Link>
            </div>
          </section>
    </nav>
  );
};

export default Navbar;
