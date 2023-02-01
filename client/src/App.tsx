import React, { useState } from "react";
import AppRouter from "./routes/AppRouter";
import {BrowserRouter} from 'react-router-dom'
import Navbar from "./components/Navbar";

const App = () => {
  // TODO: asignar tipo
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    prompt: "",
    image: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.prompt) {
      setLoading(true);

      try {

        //* FETCH
        const response = await fetch('http://localhost:8080/api/v1/generate', {
          method:'POST',
          headers: {
            'Content-Type':'application/json',
          },
          body: JSON.stringify({
            prompt:form.prompt
          })
        })
        const data = await response.json();

        setForm({
          ...form,
          image: data.image
        })
        
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("llenar el campo");
    }
  };

  return (
    // <div className="text-3xl font-bold">
    //   Hello world!
    //   <form
    //     className="flex flex-col gap-4"
    //     onSubmit={handleSubmit}>
    //     <label className="flex flex-col gap-4">
    //       <span className="block text-sm font-medium text-slate-700">
    //         Username
    //       </span>
    //       <input
    //         type="text"
    //         name="prompt"
    //         value={form.prompt}
    //         onChange={handleChange}
    //         className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    //           focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
    //           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    //           invalid:border-pink-500 invalid:text-pink-600
    //           focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    //         "
    //       />
    //     </label>
    //     <button disabled={loading} className="flex items-center justify-center rounded-xl border-4 border-black bg-pink-100 px-8 py-4 font-bold shadow-    [6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-pink-50">
    //       Generate{" "}
    //       <span
    //         aria-hidden="true"
    //         role="img"
    //         className="ml-1.5">
    //         😜
    //       </span>
    //     </button>
    //   </form>
    //   {loading ? (
    //     <h1>loading...</h1>
    //   ) : (
    //     <img
    //       src={form.image? form.image:"https://d1okzptojspljx.cloudfront.net/generations/97c53360-c77e-4aa6-aa33-293d16b8a1b1-0.png"}
    //       alt="dd"
    //     />
    //   )}
    // </div>
    <>
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
    </>
  );
};

export default App;
