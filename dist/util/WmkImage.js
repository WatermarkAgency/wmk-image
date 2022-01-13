import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import get from "lodash/get";
export var WmkImage = function (_a) {
    var image = _a.image, className = _a.className, style = _a.style, _b = _a.crop, crop = _b === void 0 ? "" : _b;
    var gatsby = image.get(crop);
    var isSvg = !!get(image, "contentType", get(image, "src", "")).match(/svg/);
    return isSvg ? (React.createElement("img", { className: className, style: style, src: image.src, alt: image.alt })) : gatsby ? (React.createElement(GatsbyImage, { className: className, style: style, image: gatsby, alt: image.alt })) : null;
};
