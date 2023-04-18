import { createContext } from "react";
import { Post } from "../../types/post";
import { Model } from "../../types/model";

interface ContextProps {
  loading: boolean,
  models:  Model[],
  handleChange:  (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  handleSurpriseMe: () => void,
  handleRandomNegativePrompt: () => void,
  handleSubmit:  () => Promise<void>,
  createPost: () => Promise<void>,
  handleModel:  (model_id: string) => void,
  removerModel:(model_id: string) => void,
  handleSize: (aspect: string) => void
}

export const GeneratorContext = createContext({} as ContextProps);
