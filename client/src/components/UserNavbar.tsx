import { TbNewSection } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux";
import { Badge, Tooltip } from "flowbite-react";

const UserNavbar = () => {
  const { profilePic, username, slug, credits } = useAppSelector(state => state.auth);

  return (
    <div className="flex items-center justify-end gap-4">
      <Link
        className="inline-block rounded-full gradient p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
        to="/generate">
        <span className="flex gap-2 items-center rounded-full bg-bgColor px-4 py-2 text-sm font-medium transition  hover:ease-out hover:bg-transparent">
          <span className="hidden md:block">Generate your image </span>
          <TbNewSection className="text-lg" />
        </span>
      </Link>

      <span
        aria-hidden="true"
        className="block h-6 w-px rounded-full bg-gray-200"></span>

      <Tooltip
        content="Credits"
        animation="duration-300"
        arrow={false}>
        <div className="p-[0.1rem] rounded-md gradient">
          <Badge className="bg-hover bg-opacity-80">{credits}</Badge>
        </div>
      </Tooltip>

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
