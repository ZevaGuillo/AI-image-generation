import { Link } from "react-router-dom";

type ButtonProps = {
  link?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  to?: string;
  children: JSX.Element | JSX.Element[] | string;
};

const Button = ({ link = false, type, onClick, to, children }: ButtonProps) => {
  if (link && to) {
    return (
      <Link
        className="inline-block rounded-full gradient p-[2px]  focus:outline-none focus:ring active:text-opacity-75"
        to={to}>
        <span className="flex gap-2 items-center rounded-full text-neutral-900 hover:bg-opacity-20 px-4 py-2 text-sm font-medium transition bg-white hover:text-white hover:bg-hover  hover:ease-out">
          {children}
        </span>
      </Link>
    );
  }

  return (
    <button
      type="submit"
      className="inline-block rounded-full gradient p-[2px]  focus:outline-none focus:ring active:text-opacity-75"
      onClick={onClick}>
      <span className="flex gap-2 items-center rounded-full text-neutral-900 hover:bg-opacity-20 bg-white hover:text-white hover:bg-hover px-4 py-2 text-sm font-medium transition  hover:ease-out">
        {children}
      </span>
    </button>
  );
};

export default Button;
