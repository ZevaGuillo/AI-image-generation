import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/useRedux";
import Button from "../Button";
import Search from './Search';

const Landing = () => {
  const { status } = useAppSelector(state => state.auth);

  const handleOnClick = () => {
    window.open(`${import.meta.env.VITE_SERVER}/api/v1/auth/google/callback`, "_self");
  };


  return (
    <article className="backdrop-blur-md mb-6 px-2 md:px-8 md:min-h-[50vh] flex flex-col justify-center items-center">
      <h2 className="font-bold text-5xl text-center leading-relaxed text-gradient">
        PixelAI
      </h2>
      <p className=" mb-4 text-lg text-center md:text-3xl md:w-2/3">
        Turn your ideas into stunning images with our powerful AI image
        generator. No technical skills required, create eye-catching images in
        seconds. Try it now and experience the difference!
      </p>
      {status === "authenticated" ? (
        <Button link={true} to="/generate">
            Start creating now
        </Button>
      ) : (
        <Button type="button" onClick={handleOnClick}>
            Start creating now
        </Button>
      )}
      <Search/>
    </article>
  );
};

export default Landing;
