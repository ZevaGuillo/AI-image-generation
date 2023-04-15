import { ImgHTMLAttributes, FC, useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  image_data?: {
    encoded: string;
    width: number;
    height: number;
  };
}

const Image: FC<ImageProps> = props => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new (window as any).Image();
    image.onload = () => {
      setImageLoaded(true);
    };
    image.src = props.src;
  }, [props.src]);

  return (
    <>
      <div style={{ display: imageLoaded ? "none" : "block" }}>
        {props.image_data && (
          <Blurhash
            hash={props.image_data.encoded}
            width={"100%"}
            resolutionX={20}
            resolutionY={20}
            punch={1}
          />
        )}
      </div>
      <img
        {...props}
        style={{ display: !imageLoaded ? "none" : "block" }}
        onLoad={() => setImageLoaded(true)}
      />
    </>
  );
};

export default Image;
