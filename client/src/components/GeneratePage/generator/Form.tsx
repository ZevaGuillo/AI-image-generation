import { RxSymbol, RxPaperPlane, RxInfoCircled } from "react-icons/rx";
import { Tooltip } from "flowbite-react";
import { FaMagic } from "react-icons/fa";
import { GeneratorContext } from "../../../context/generator";
import { useContext } from "react";
import { useAppSelector } from "../../../hooks/useRedux";

export const Form = () => {
  const { prompt, negative_prompt } = useAppSelector(state => state.generator);
  const {
    handleSubmit,
    handleSurpriseMe,
    handleRandomNegativePrompt,
    handleChange,
    loading,
  } = useContext(GeneratorContext);

  return (
      <form
        className=" overflow-hidden flex flex-col justify-between"
        onSubmit={handleSubmit}>
        <div className="p-1 overflow-auto flex flex-col gap-3">
          <label
            htmlFor="prompt"
            className="flex items-center gap-4">
            <span>Prompt</span>
            <Tooltip
              content="Give us your ideas and we'll let AI do its magic!"
              animation="duration-300"
              arrow={false}>
              <RxInfoCircled />
            </Tooltip>
            <div
              onClick={handleSurpriseMe}
              className="py-[0.2rem] text-sm flex items-center gap-1 px-2 bg-pink-500 hover:bg-pink-600 rounded-lg cursor-pointer select-none">
              Surprise me
              <FaMagic />
            </div>
          </label>
          <textarea
            placeholder="Closeup face portrait of a..."
            name="prompt"
            id="prompt"
            value={prompt}
            onChange={handleChange}
            className="flex-initial w-full rounded-lg bg-hover border-none p-3 resize-none"
            rows={5}
          />

          <label
            htmlFor="negative_prompt"
            className="flex items-center gap-4">
            Negative Prompt
            <div
              onClick={handleRandomNegativePrompt}
              className="py-[0.1rem] text-sm flex items-center gap-1 px-2 bg-purple-500 hover:bg-purple-600 rounded-lg cursor-pointer">
              Random
              <RxSymbol />
            </div>
          </label>
          <textarea
            id="negative_prompt"
            placeholder="no words| watermark | bad anatomy..."
            name="negative_prompt"
            value={negative_prompt}
            onChange={handleChange}
            className="flex-1 w-full rounded-lg bg-hover border-none p-3 resize-none"
          />
        </div>
      </form>
  );
};
