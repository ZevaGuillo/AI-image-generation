import { useEffect, useState } from "react";
import { Post } from "../../types/post";
import Card from "./Card";

const Gallery = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/v1/post");

      if (response.ok) {
        const result = await response.json();
        setPosts(result.posts);
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
        <div>
          {posts.map((post, index) => (
            <Card
              key={`${post.username}-${index}`}
              post={post}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallery;
