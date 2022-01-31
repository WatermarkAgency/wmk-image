import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import get from "lodash/get";
import { Img } from "../classes/Img";
/**
 * @returns An image element or GatsbyImage depending on image data
 */

type imageProps = {
  image: Img;
  className?: string;
  style?: object;
  crop?: string;
};

export const WmkImage = ({
  image,
  className,
  style,
  crop = "",
}: imageProps) => {
  const gatsby = image instanceof Img && image.get(crop);
  const isSvg = !!get(image, `contentType`, get(image, `src`, "")).match(/svg/);
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
