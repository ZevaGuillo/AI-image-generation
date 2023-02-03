import { Post } from "../../types/post";

type CardProps = {
    post: Post
}

const Card = ({post}:CardProps) => {
  return (
    <div
      className="group relative block bg-black">
      <img
        alt="Developer"
        src={post.image}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
          {post.model}
        </p>

        <p className="text-2xl font-bold text-white">{post.username}</p>

        <div className="mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">
                {post.prompt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
