import { GeneratorProvider } from "../../../context/generator";
import { DisplayPanel } from "./DisplayPanel";
import { SelectModel } from "./SelectModel";
import { Settings } from "./Settings";


export const Generator2 = () => {
  
  return (
    <GeneratorProvider>
      <section className="bg-generator py-8 px-2 md:px-20  min-h-screen bg-opacity-50">
        <div className="flex flex-col gap-4 md:grid md:gap-0 w-full h-full grid-cols-4 grid-rows-5">
          <div className=" w-full h-full md:col-span-3">
            <SelectModel/>
          </div>
          <div className=" w-full  md:row-span-5 md:col-span-1">
            <Settings />
          </div>
          <div className=" w-full md:col-span-3 md:row-span-4">
            <DisplayPanel/>
          </div>
        </div>
      </section>
    </GeneratorProvider>
  );
};
