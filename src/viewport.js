/**
* Check whether an element is in the viewport by
* more than offset px.
*/
export function inViewport (element, options) {

    const { top, right, bottom, left, width, height } = element.getBoundingClientRect();
    console.log("element: ", element);
    console.log("options: ", options);
    console.log("top: ", top);
    console.log("right: ", right);
    console.log("bottom: ", bottom);
    console.log("left: ", left);
    console.log("width: ", width);
    console.log("height: ", height);

    const intersection = {
        t: bottom,
        r: window.parent.innerWidth - left,
        b: window.parent.innerHeight - top,
        l: right
    };
    console.log("intersection: ", intersection);

    const threshold = {
        x: options.threshold * width,
        y: options.threshold * height
    };
    console.log("threshold: ", threshold);
    console.log("intersection.t: ", intersection.t > (options.offset.top    + threshold.y));
    console.log("intersection.r: ", intersection.r > (options.offset.right  + threshold.x));
    console.log("intersection.b: ", intersection.b > (options.offset.bottom + threshold.y));
    console.log("intersection.l: ", intersection.l > (options.offset.left   + threshold.x));

    return intersection.t > (options.offset.top    + threshold.y)
        && intersection.r > (options.offset.right  + threshold.x)
        && intersection.b > (options.offset.bottom + threshold.y)
        && intersection.l > (options.offset.left   + threshold.x);

}
