import { useEffect, useState } from "react";
import CarouselModel from "../components/Homepage/CarouselModel";
import Gallery from "../components/Homepage/Gallery";
import { Post } from "../types/post";
import { modelList } from '../utils/models';


const HomePage = () => {
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


  return <main>
    <nav>Hero algo</nav>
    <CarouselModel models={modelList} handleModel={()=>{}} removerModel={()=>{}}/>
    <Gallery loading={loading} posts={posts}/>
  </main>;
};

export default HomePage;
