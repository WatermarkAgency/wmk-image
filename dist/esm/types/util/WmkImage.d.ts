/// <reference types="react" />
import { Img } from "../classes/Img";
/**
 * @returns An image element or GatsbyImage depending on image data
 */
declare type imageProps = {
    image: Img;
    className?: string;
    style?: object;
    crop?: string;
};
export declare const WmkImage: ({ image, className, style, crop, }: imageProps) => JSX.Element;
export {};
