import { Link } from "react-router-dom";
import { Post } from "../../types/post";
import Image from "../Image";
import { History } from "../../types/user";

type CardProps = {
  post: Post;
  className?: string;
};

const Card = ({ post, className = "" }: CardProps) => {
  // console.log(post);
  return (
    <div
      className={` rounded-lg bg-hover  shadow-sm overflow-hidden ${className}`}>
      <Image
        image_data={post.image_data}
        alt="Developer"
        src={post.image}
        loading="lazy"
        className="w-full object-cover scale-100 transition-all group-hover:ease-in-out"
      />

      <div className="p-2  flex justify-between gap-1 text-sm ">
        <div>
          <div className="flex gap-2 flex-col">
            <Link
              to={`/${post.user?.slug}`}
              className="group flex-1 flex items-center gap-2">
              <img
                alt={post.user?.username}
                src={post.user?.profilePic}
                referrerPolicy="no-referrer"
                className="h-7 w-7 rounded-full object-cover"
              />
              <h3 className="text-slate-100 group-hover:text-slate-300 group-hover:underline-offset-4">
                {post.user?.username}
              </h3>
            </Link>
            {post.model && (
              <p className=" bg-indigo-500 w-fit py-1 px-3 rounded-xl text-gray-100 text-xs text-center">
                {post.model}
              </p>
            )}
          </div>

          {/* <p className="mt-1.5 max-h-[50px] overflow-ellipsis overflow-hidden text-xs text-gray-100">
            {post.prompt}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export const HistoryCard = ({ history, className }: { history: History, className?:string }) => {
  return (
    <div
      className={` rounded-lg bg-hover  shadow-sm overflow-hidden ${className}`}>
      <Image
        alt="Developer"
        src={history.image}
        loading="lazy"
        className="w-full object-cover scale-100 transition-all group-hover:ease-in-out"
      />
    </div>
  );
};

export default Card;
