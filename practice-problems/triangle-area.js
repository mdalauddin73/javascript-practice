//JavaScript Program To Calculate The Area of a Triangle

function getTriangleArea(a, b, c) {
    if (a < 0 || b < 0 || c < 0 || (a + b <= c) || a + c <= b || b + c <= a) {
        console.log("Not a valid triangle");
        return;
    }
    let s = (a + b + c) / 2;
    const triangleArea = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return triangleArea.toFixed(2);
}

const areaOfTriangle = getTriangleArea(4, 5, 7);
console.log("Area: ", areaOfTriangle);

