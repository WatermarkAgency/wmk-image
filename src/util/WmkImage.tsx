import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Img } from "../classes/Img";
import CSS from "csstype";
/**
 * @returns An image element or GatsbyImage depending on image data
 */

export interface WmkImageProps {
  image: Img;
  className?: string;
  style?: CSS.Properties;
  crop?: string;
}

export const WmkImage = ({
  image,
  className,
  style,
  crop = "",
}: WmkImageProps) => {
  const gatsby = image instanceof Img && "get" in image && image.get(crop);
  const isSvg = image?.contentType
    ? !!image.contentType.match(/svg/)
    : image?.src
    ? !!image.src.match(/svg/)
    : false;
  return isSvg ? (
    <img className={className} style={style} src={image.src} alt={image.alt} />
  ) : gatsby ? (
    <GatsbyImage
      className={className}
      style={style}
      image={gatsby}
      alt={image.alt}
    />
  ) : null;
};
