import { useGenerator } from "../../hooks/useGenerator";

const Generator = () => {
  const { loading, form, handleChange, handleSubmit } = useGenerator();

  return (
    <section>
      <nav className="px-2 mb-6 py-4 md:px-32 border-y border-hover">
        config - width | models{" "}
      </nav>
      <section className="px-2 py-4 md:px-32 ">
        <div className="flex flex-col gap-4 md:gap-8 md:flex-row-reverse md:justify-center">
          <form
            className="flex-1 flex flex-col justify-between gap-4"
            onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={form.username}
                onChange={handleChange}
                className="w-full rounded-lg bg-hover border-none p-3"
              />
              <textarea
                placeholder="Prompt..."
                name="prompt"
                value={form.prompt}
                onChange={handleChange}
                className="flex-1 w-full rounded-lg bg-hover border-none p-3 text-lg"
                rows={8}
              />
            <button
              disabled={loading}
              className="inline-block rounded-full gradient p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
              <span
                aria-hidden="true"
                role="img"
                className="flex justify-center gap-2 rounded-full bg-bgColor px-4 py-2 text-sm font-medium transition  hover:ease-out hover:bg-transparent">
                Generate 😜
              </span>
            </button>
            <button
              type="button"
              disabled={!!form.image}
              className="inline-block rounded-full gradient p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
              <span
                aria-hidden="true"
                role="img"
                className="flex justify-center gap-2 rounded-full bg-bgColor px-4 py-2 text-sm font-medium transition  hover:ease-out hover:bg-transparent">
                Created post
              </span>
            </button>
          </form>
          <section className="md:flex-1">
            {loading ? (
              <h1 className="min-h-[512px] bg-neutral-800 rounded-lg">loading...</h1>
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
      </section>
    </section>
  );
};

export default Generator;
