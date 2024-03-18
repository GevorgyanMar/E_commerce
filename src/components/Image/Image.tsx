import React, { FC } from "react";

interface ImageProps {
  src: string | null;
  alt: string;
  [key: string]: any;
}

const Image: FC<ImageProps> = ({ src, alt, ...otherProps }) => {
  const img = src ? `data:image/jpeg;base64,${src}` : "";
  return <img src={img} alt={alt} {...otherProps} />;
};

export default Image;
