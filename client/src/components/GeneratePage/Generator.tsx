import { useGenerator } from "../../hooks/useGenerator";
import { RxSymbol, RxPaperPlane, RxInfoCircled } from "react-icons/rx";

import CarouselModel from "../Homepage/CarouselModel";
import Loader from "../Loader";
import { Tooltip } from "flowbite-react";
import { FaMagic } from "react-icons/fa";

const Generator = () => {
  const {
    loading,
    form,
    models,
    handleChange,
    handleSurpriseMe,
    handleRandomNegativePrompt,
    handleSubmit,
    createPost,
    handleModel,
    removerModel,
  } = useGenerator();

  return (
    <section>
      <Tooltip
        content="Tooltip content"
        trigger="hover"
      >
        {/* <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default range</label>
<input id="default-range" type="range" value="50" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /> */}
      </Tooltip>
      <CarouselModel
        models={models}
        title="Customize your image with different AI models"
        handleModel={handleModel}
        removerModel={removerModel}
      />
      <section className="px-2 py-4 md:px-20 ">
        <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:justify-center">
          <form
            className="flex-1 flex flex-col justify-between gap-4"
            onSubmit={handleSubmit}>
            <label
              htmlFor="prompt"
              className="flex items-center gap-4">
              <span>Prompt</span>
              <Tooltip
                content="Give us your ideas and we'll let AI do its magic!"
                animation="duration-300"
                arrow={false}
              >
                <RxInfoCircled/>
              </Tooltip>
              <div
                onClick={handleSurpriseMe}
                className="py-[0.1rem] flex items-center gap-1 px-2 bg-pink-500 hover:bg-pink-600 rounded-lg cursor-pointer select-none">
                Surprise me
                <FaMagic />
              </div>{" "}
            </label>

            <textarea
              placeholder="Closeup face portrait of a..."
              name="prompt"
              id="prompt"
              value={form.prompt}
              onChange={handleChange}
              className="flex-initial w-full rounded-lg bg-hover border-none p-3 text-lg"
              rows={8}
            />

            <label
              htmlFor="negative_prompt"
              className="flex items-center gap-4">
              Negative Prompt
              <div
                onClick={handleRandomNegativePrompt}
                className="py-[0.1rem] flex items-center gap-1 px-2 bg-purple-500 hover:bg-purple-600 rounded-lg cursor-pointer">
                Random
                <RxSymbol />
              </div>
            </label>
            <textarea
              id="negative_prompt"
              placeholder="no words| watermark | bad anatomy..."
              name="negative_prompt"
              value={form.negative_prompt}
              onChange={handleChange}
              className="flex-1 w-full rounded-lg bg-hover border-none p-3"
            />

            <button
              disabled={loading}
              className="disabled:opacity-25 inline-block rounded-full gradient p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
              <span
                aria-hidden="true"
                role="img"
                className=" flex justify-center gap-2 rounded-full bg-bgColor px-4 py-2 text-sm font-medium transition  hover:ease-out hover:bg-transparent">
                Generate 😜
              </span>
            </button>
          </form>
          <section className="md:flex-1">
            {loading ? (
              <div className="min-h-[512px] grid place-content-center bg-neutral-800 rounded-lg">
                <Loader />
              </div>
            ) : (
              <img
                className="max-h-[512px] w-full object-cover rounded-lg"
                src={
                  form.image
                    ? form.image
                    : "https://d1okzptojspljx.cloudfront.net/generations/97c53360-c77e-4aa6-aa33-293d16b8a1b1-0.png"
                }
                alt="dd"
              />
            )}
          </section>
        </div>
        <div className="flex justify-end w-full">
          <button
            type="button"
            onClick={createPost}
            disabled={!form.image}
            className="w-2/3 md:w-1/5 mt-4 disabled:opacity-25 rounded-full gradient p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
            <span
              aria-hidden="true"
              role="img"
              className="flex items-center justify-center gap-2 rounded-full bg-bgColor px-4 py-2 text-sm font-medium transition  hover:ease-out hover:bg-transparent">
              Share post
              <RxPaperPlane />
            </span>
          </button>
        </div>
      </section>
    </section>
  );
};

export default Generator;
