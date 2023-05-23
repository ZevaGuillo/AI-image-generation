import { Post } from "../../types/post";
import { History } from "../../types/user";
import Card, { HistoryCard } from "./Card";
import Masonry from "react-masonry-css";

type GalleryProps = {
  posts: Post[] | History[];
  type?: "history";
};

const breakpointColumnsObj = {
  default: 5,
  1100: 4,
  900: 4,
  700: 3,
  580: 2,
};

const GalleryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="px-2 md:px-20">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {/* array of JSX items */}
        {children}
      </Masonry>
    </section>
  );
};

const Gallery = ({ posts, type }: GalleryProps) => {
  if (type) {
    return (
      <GalleryLayout>
        {(posts as History[]).map((post, index) => (
          <HistoryCard
            key={`${post._id}-${index}`}
            history={post}
          />
        ))}
      </GalleryLayout>
    );
  }

  return (
    <GalleryLayout>
      {/* array of JSX items */}
      {(posts as Post[]).map((post, index) => (
        <Card
          key={`${post.userid}-${index}`}
          post={post}
        />
      ))}
    </GalleryLayout>
  );
};

export default Gallery;
