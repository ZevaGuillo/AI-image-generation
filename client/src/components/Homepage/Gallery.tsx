import { Post } from "../../types/post";
import Card from "./Card";

type GalleryProps = {
  posts: Post[];
};
const Gallery = ({ posts }: GalleryProps) => {
  return (
    <section className="px-2 md:px-32">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {posts.map((post, index) => (
          <Card
            className={index === 0?'col-span-2 row-span-2' : ''}
            key={`${post.userid}-${index}`}
            post={post}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
