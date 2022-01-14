/// <reference types="react" />
interface GatsbyImageData {
    images: {
        sources: {
            srcSet: string;
            sizes: string;
            type: string;
        }[];
        fallback: {
            srcSet: string;
            sizes: string;
            src: string;
        };
        width: number;
        height: number;
        layout: "fixed" | "fullWidth" | "constrained";
    };
    width: number;
    height: number;
    layout: "fixed" | "fullWidth" | "constrained";
}
/**
 * @class
 * Helper class for image queries that will
 * hold data for Static/Dynamic images
 * (via Gatsby)
 */
declare class Img {
    /**
     * @param {Object} node - result of an image node query from Contentful
     */
    description: string;
    title: string;
    alt: string;
    src: string | undefined;
    private gatsbyImageData;
    private crops;
    contentType: string;
    constructor(node: object);
    addCrop(name: string, image: GatsbyImageData, log?: boolean): void;
    private crop;
    get(crop?: string): GatsbyImageData;
    url(crop?: string): string;
}

/**
 * @returns An image element or GatsbyImage depending on image data
 */
declare type imageProps = {
    image: Img;
    className?: string;
    style?: object;
    crop?: string;
};
declare const WmkImage: ({ image, className, style, crop, }: imageProps) => JSX.Element;

export { GatsbyImageData, Img, WmkImage };
