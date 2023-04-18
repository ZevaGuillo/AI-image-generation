import { GeneratorProvider } from "../../../context/generator";
import { DisplayPanel } from "./DisplayPanel";
import { SelectModel } from "./SelectModel";
import { Settings } from "./Settings";


export const Generator = () => {
  
  return (
    <GeneratorProvider>
      <section className="bg-generator py-8 px-2 md:px-20  min-h-screen bg-opacity-50">
        <div className="flex flex-col gap-4 lg:grid lg:gap-0 w-full h-full grid-cols-4 grid-rows-5">
          <div className=" w-full h-full lg:col-span-3">
            <SelectModel/>
          </div>
          <div className=" w-full  lg:row-span-5 lg:col-span-1">
            <Settings />
          </div>
          <div className=" w-full lg:col-span-3 lg:row-span-4">
            <DisplayPanel/>
          </div>
        </div>
      </section>
    </GeneratorProvider>
  );
};
