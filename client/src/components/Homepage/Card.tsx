import { Link } from "react-router-dom";
import { Post } from "../../types/post";

type CardProps = {
  post: Post;
  className?: string; 
};

const Card = ({ post, className }: CardProps) => {
  return (
    <div className={` flex flex-col rounded-lg bg-hover overflow-hidden ${className}`}>
      <img
        alt="Developer"
        src={post.image}
        loading="lazy"
        className="flex-1 w-full object-cover rounded-lg scale-95 transition-all group-hover:ease-in-out"
      />

      <div className="p-2 min-h-[130px] flex justify-between gap-1 text-sm ">
        <div>
          <div className="flex gap-2 flex-col">
            <Link to={`/${post.user?.slug}`} className="group flex-1 flex items-center gap-2">
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
              <p className=" bg-violet-500 w-fit py-1 px-3 rounded-xl text-gray-100 text-xs text-center">
                {post.model}
              </p>
            )}
          </div>

          <p className="mt-1.5 max-h-[50px] overflow-ellipsis overflow-hidden text-xs text-gray-100">
            {post.prompt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
