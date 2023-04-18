import { GeneratorContext } from "../../../context/generator";
import { useContext } from "react";
import Loader from "../../Loader";
import { useAppSelector } from "../../../hooks/useRedux";

export const DisplayPanel = () => {
  const { image, height, prompt, width } = useAppSelector(
    state => state.generator
  );
  const { loading } = useContext(GeneratorContext);

  return (
    <div className={`pt-4 flex justify-center`}>
      {!image ? (
        <div
          className={`flex justify-center items-center rounded-lg bg-newimage transition-all`}
          style={{ width: `${width}px`, height: `${height}px` }}>
          {loading && <Loader />}
        </div>
      ) : (
        <img
          className="object-cover rounded-lg"
          src={image}
          alt={prompt}
        />
      )}
    </div>
  );
};
