import { Post } from "../../types/post";
import Card from "./Card";
import Masonry from "react-masonry-css";

type GalleryProps = {
  posts: Post[];
};

const breakpointColumnsObj = {
  default: 4,
  1100: 4,
  900:3,
  700: 3,
  580: 2
};

const Gallery = ({ posts }: GalleryProps) => {
  return (
    <section className="px-2 md:px-32">
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
      </div> */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {/* array of JSX items */}
        {posts.map((post, index) => (
          <Card
            key={`${post.userid}-${index}`}
            post={post}
          />
        ))}
      </Masonry>
    </section>
  );
};

export default Gallery;
