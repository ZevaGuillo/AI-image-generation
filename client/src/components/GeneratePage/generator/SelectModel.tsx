import { GeneratorContext } from "../../../context/generator";
import CarouselModel from "../../Homepage/CarouselModel";
import { useContext } from "react";

export const SelectModel = () => {
  const { models, handleModel, removerModel } = useContext(GeneratorContext);

  return (
    <CarouselModel
      models={models}
      className="p-0 text-sm"
      title="Customize your image with different AI models"
      handleModel={handleModel}
      removerModel={removerModel}
    />
  );
};
