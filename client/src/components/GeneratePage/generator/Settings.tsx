import { GeneratorContext } from "../../../context/generator";
import { useAppSelector } from "../../../hooks/useRedux";
import { Form } from "./Form";
import { useContext, useState } from 'react';
import { RxPaperPlane } from "react-icons/rx";
export const Settings = () => {
  const { handleSubmit, loading, handleSize, createPost } =
    useContext(GeneratorContext);
  const { model, image } = useAppSelector(state => state.generator);
  const [loadingPost, setLoadingPost] = useState(false);

  return (
    <>
      <div className="w-full h-full p-[0.05rem] gradient rounded-lg relative">
        <div className="gradient-shadow w-full h-full -z-50 absolute top-0"></div>
        <div className="bg-bgColor w-full h-full rounded-lg px-3 ">
          <div className="h-[calc(100%-2.4rem)] flex flex-col gap-3">
            <h3 className="py-2">
              Model:{" "}
              <span className="text-purple-400">{model ? model : "none"}</span>
            </h3>
            <Form />
            <div className="pb-4">
              <h3 className="pb-2">Size</h3>
              <div className="flex justify-around items-center">
                <div
                  className="h-16 text-sm aspect-[1/1] bg-zinc-700 rounded flex justify-center items-center hover:bg-hover hover:scale-110 transition ease-in-out"
                  onClick={() => handleSize("1/1")}>
                  1/1
                </div>
                <div
                  className="h-16 text-sm aspect-[16/9] bg-zinc-700 rounded flex justify-center items-center hover:bg-hover hover:scale-110 transition ease-in-out"
                  onClick={() => handleSize("16/9")}>
                  16/9
                </div>
                <div
                  className="h-16 text-sm aspect-[9/16] bg-zinc-700 rounded flex justify-center items-center hover:bg-hover hover:scale-110 transition ease-in-out"
                  onClick={() => handleSize("9/16")}>
                  9/16
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full disabled:opacity-25 inline-block rounded-t-full gradient p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
            <span
              aria-hidden="true"
              role="img"
              className=" flex justify-center gap-2 rounded-t-full bg-bgColor px-4 py-2 text-sm font-medium transition  hover:ease-out hover:bg-transparent">
              Generate 😜
            </span>
          </button>
        </div>
      </div>
      <div className="flex justify-end w-full">
        <button
          type="button"
          onClick={()=>{
            setLoadingPost(true);
            createPost()
          }}
          disabled={!image || loadingPost}
          className=" mt-4 disabled:opacity-25 rounded-full gradient p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
          <span
            aria-hidden="true"
            role="img"
            className="flex items-center justify-center gap-2 rounded-full bg-bgColor px-4 py-2 text-sm font-medium transition  hover:ease-out hover:bg-transparent">
            Share post
            <RxPaperPlane />
          </span>
        </button>
      </div>
    </>
  );
};
