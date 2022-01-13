import get from "lodash/get";

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

/**
 * @class
 * Helper class for image queries that will
 * hold data for Static/Dynamic images
 * (via Gatsby)
 */
export class Img {
  /**
   * @param {Object} node - result of an image node query from Contentful
   */
  description: string;
  title: string;
  alt: string;
  src: string | undefined;
  private gatsbyImageData: GatsbyImageData;
  private crops: { [key: string]: GatsbyImageData };
  contentType: string;
  constructor(node: object) {
    const gatsby: GatsbyImageData = get(node, `gatsbyImageData`);
    const _url: string = get(
      node,
      `file.url`,
      get(
        node,
        `node.url`,
        get(node, `gatsbyImageData.images.fallback.src`, "")
      )
    );
    const url = _url.indexOf("//") === 0 ? "https:" + _url : _url;
    this.title = get(node, `title`, get(node, `node.title`));
    this.description = get(node, `description`, ``);
    this.alt = get(node, `title`, get(node, `node.altText`, ""));
    this.src = url;
    this.gatsbyImageData = gatsby;
    this.contentType = get(node, `file.contentType`);
    this.crops = {};
  }
  addCrop(name: string, image: GatsbyImageData, log = false) {
    const crops = this.crops;
    crops[name] = image;
    if (log) {
      console.log(crops);
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
}
