import CarouselModel from "../components/Homepage/CarouselModel";
import Gallery from "../components/Homepage/Gallery";
import { modelList } from "../utils/models";
import Landing from "../components/Homepage/Landing";
import Loader from "../components/Loader";
import useLoadGallery from "../hooks/useLoadGallery";
import { useAppSelector } from "../hooks/useRedux";

const HomePage = () => {
  const { loading, posts } = useAppSelector(state => state.gallery);
  const { loadMoreRef } = useLoadGallery();

  return (
    <main className="pt-16">
      <Landing />
      <CarouselModel
        models={modelList}
        handleModel={() => {}}
        removerModel={() => {}}
      />
      <Gallery posts={posts} />
      <div
        className="min-h-[100px] grid place-content-center m-4"
        ref={loadMoreRef}>
        {loading && <Loader />}
      </div>
    </main>
  );
};

export default HomePage;
