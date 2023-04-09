import { createContext } from "react";
import { Post } from "../../types/post";
import { Model } from "../../types/model";

interface ContextProps {
  loading: boolean,
  form: Post,
  models:  Model[],
  handleChange:  (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  handleSurpriseMe: () => void,
  handleRandomNegativePrompt: () => void,
  handleSubmit:  (event: React.FormEvent<HTMLFormElement>) => Promise<void>,
  createPost: () => Promise<void>,
  handleModel:  (model_id: string) => void,
  removerModel:(model_id: string) => void,
}

export const GeneratorContext = createContext({} as ContextProps);
