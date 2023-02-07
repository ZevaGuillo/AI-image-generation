import { useEffect, useState } from "react";
import { Post } from "../../types/post";
import Card from "./Card";

const Gallery = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/v1/post");

      if (response.ok) {
        const result = await response.json();
        let reversePosts = result.posts.reverse() 
        setPosts(reversePosts);
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

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
