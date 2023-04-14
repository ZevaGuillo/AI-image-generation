import { GeneratorContext } from "../../../context/generator";
import { useContext } from "react";
import Loader from "../../Loader";
import { useAppSelector } from "../../../hooks/useRedux";

export const DisplayPanel = () => {
  const {image, height, prompt, width} = useAppSelector(state => state.generator);
  const { loading } = useContext(GeneratorContext);

  return (
    <div className={`pt-4 w-full h-[${height}] flex justify-center`}>
        {loading ? (
          <div className="grid place-content-center bg-neutral-800 rounded-lg">
            <Loader />
          </div>
        ) : image ? (
          <img
            className="object-cover rounded-lg"
            src={image}
            alt={prompt}
          />
        ) : (
          <div className={`rounded-lg bg-newimage bg-emerald-400 w-[${width}] h-[${height}]`}>h</div>
        )}
    </div>
  );
};
