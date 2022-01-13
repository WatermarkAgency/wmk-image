import get from "lodash/get";
/**
 * @class
 * Helper class for image queries that will
 * hold data for Static/Dynamic images
 * (via Gatsby)
 */
var Img = /** @class */ (function () {
    function Img(node) {
        var gatsby = get(node, "gatsbyImageData");
        var _url = get(node, "file.url", get(node, "node.url", get(node, "gatsbyImageData.images.fallback.src", "")));
        var url = _url.indexOf("//") === 0 ? "https:" + _url : _url;
        this.title = get(node, "title", get(node, "node.title"));
        this.description = get(node, "description", "");
        this.alt = get(node, "title", get(node, "node.altText", ""));
        this.src = url;
        this.gatsby = gatsby;
        this.contentType = get(node, "file.contentType");
        this.crops = {};
    }
    Img.prototype.addCrop = function (name, image, log) {
        if (log === void 0) { log = false; }
        var crops = this.crops;
        crops[name] = image;
        if (log) {
            console.log(crops);
        }
    };
    Img.prototype.crop = function (name) {
        var cropped = get(this, "crops.".concat(name));
        return cropped;
    };
    Img.prototype.get = function (crop) {
        if (crop === void 0) { crop = ""; }
        var img = this.crop(crop);
        return crop === "" ? this.gatsby : img; //Object.keys(img).map((k) => img[k])[0];
    };
    return Img;
}());
export { Img };
