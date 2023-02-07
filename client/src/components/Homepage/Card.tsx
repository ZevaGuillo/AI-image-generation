import { Post } from "../../types/post";

type CardProps = {
  post: Post;
};

const Card = ({ post }: CardProps) => {
  return (
    <div className="overflow-hidden w-full md:h-72 lg:h-80 row-span-2 rounded-lg relative block bg-black">
      <img
        alt="Developer"
        src={post.image}
        className=" h-full w-full object-cover rounded-lg opacity-75"
      />

      <div className="p-2 h-16 hover:h-auto transition-all ease-out group w-full absolute bottom-0 rounded-lg bg-bgColor bg-opacity-50 backdrop-blur-xl drop-shadow-xl">

        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
          {post.model}
        </p>

        <p className="text-2xl font-bold text-white">{post.userid}</p>

          <div className=" max-h-16 overflow-hidden transform opacity-0 transition-all ease-out group-hover:opacity-100">
            <p className="text-sm text-white truncate ">
                {post.prompt}
            </p>
          </div>

      </div>
    </div>
  );
};

export default Card;
