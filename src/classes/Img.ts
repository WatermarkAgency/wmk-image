import get from "lodash/get";

const sanitizeContentfulUrl = (_url: string) =>
  _url.indexOf("//") === 0 ? "https:" + _url : _url;

export interface GatsbyImageData {
  images: {
    sources: { srcSet: string; sizes: string; type: string }[];
    fallback: { srcSet: string; sizes: string; src: string };
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
export class Img {
  /**
   */
  description?: string;
  title?: string;
  alt: string;
  src?: string;
  private gatsbyImageData?: GatsbyImageData;
  private crops: { [key: string]: GatsbyImageData };
  contentType?: string;
  constructor(node: ContentfulImageQuery) {
    const _node = node ? { ...node } : undefined;
    const _url = _node?.file?.url;
    const url = _url ? sanitizeContentfulUrl(_url) : undefined;
    this.title = _node?.title;
    this.description = _node?.description;
    this.alt = _node?.description || _node.title;
    this.src = url;
    this.gatsbyImageData = _node?.gatsbyImageData;
    this.contentType = _node?.file?.contentType;
    this.crops = {};
  }
  addCrop(name: string, image: GatsbyImageData, log = false) {
    if (name && name !== "") {
      const crops = this.crops;
      crops[name] = image;
      if (log) {
        console.log(crops);
      }
    } else {
      console.log(
        "Problem adding cropped image size. Did you query the data and/or use the correct key?"
      );
    }
  }
  private crop(name: string) {
    const cropped: GatsbyImageData = get(this, `crops.${name}`);
    return cropped;
  }
  get(crop: string = "") {
    const img = this.crop(crop);
    return crop === "" ? this.gatsbyImageData : img; //Object.keys(img).map((k) => img[k])[0];
  }
  url(crop: string = "") {
    const img = this.get(crop);
    return img ? img?.images?.fallback?.src : ``;
  }
}
