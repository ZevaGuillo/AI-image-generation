import { useContext } from 'react';
import { GeneratorContext } from '../../../context/generator';
export const Settings = () => {
  const {form} = useContext(GeneratorContext);
   
  return (
    <div className="w-full h-full p-[0.05rem] gradient rounded-lg relative">
      <div className="gradient-shadow w-full h-full -z-50 absolute top-0"></div>
      <div className="bg-bgColor w-full h-full rounded-lg p-2">
        <h1>{form.model}</h1>
      </div>
    </div>
  );
};
