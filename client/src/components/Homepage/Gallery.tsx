import { useEffect, useState } from "react";
import { Post } from "../../types/post";
import Card from "./Card";

type GalleryProps = {
  loading: boolean,
  posts: Post[]
}

const Gallery = ({loading, posts}:GalleryProps) => {


  return (
    <section className="px-2 md:px-32 ">
      Gallery
      {loading ? (
        <h2>loading</h2>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post, index) => (
            <Card
              key={`${post.userid}-${index}`}
              post={post}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallery;
