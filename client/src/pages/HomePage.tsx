import CarouselModel from "../components/Homepage/CarouselModel";
import Gallery from "../components/Homepage/Gallery";
import { getActiveFalse } from "../utils/models";
import Landing from "../components/Homepage/Landing";
import Loader from "../components/Loader";
import useLoadGallery from "../hooks/useLoadGallery";
import { useAppSelector, useAppDispatch } from "../hooks/useRedux";
import { onRemoveModel, onSetModel } from "../store/gallery/gallerySlice";
import { useState } from 'react';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { loading, posts } = useAppSelector(state => state.gallery);
  const { loadMoreRef } = useLoadGallery();
  const [modelList, setModelList] = useState(getActiveFalse());
  

  const onSelectModel = (model_id: string) => {
    dispatch(onSetModel(model_id));
    setModelList(
      modelList.map(model => {
        if (model.mode_id === model_id) {
          model.active = true;
        } else {
          model.active = false;
        }
        return model;
      })
    )
  };

  const removerModel = (model_id: string) => {
    dispatch(onRemoveModel());
    setModelList(modelList.map(model => {
        if (model.mode_id === model_id) {
            model.active = false;
        }
        return model;
    }));
  }

  return (
    <main className="pt-16">
      <Landing />
      <CarouselModel
        models={modelList}
        handleModel={onSelectModel}
        removerModel={removerModel}
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
