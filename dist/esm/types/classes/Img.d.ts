export interface GatsbyImageData {
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
export interface ContentfulImageQuery {
    title: string;
    gatsbyImageData?: GatsbyImageData;
    file?: {
        url?: string;
        contentType?: string;
    };
    description?: string;
}
/**
 * @class
 * Helper class for image queries that will
 * hold data for Static/Dynamic images
 * (via Gatsby)
 */
export declare class Img {
    /**
     */
    description: string;
    title: string;
    alt: string;
    src?: string;
    private gatsbyImageData;
    private crops;
    contentType: string;
    constructor(node: ContentfulImageQuery);
    addCrop(name: string, image: GatsbyImageData, log?: boolean): void;
    private crop;
    get(crop?: string): GatsbyImageData;
    url(crop?: string): string;
}
