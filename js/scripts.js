function getTriangleArea(a, h) {
    if ((a > 0) && (h > 0)) {
        return a* h / 2;
    } else {
        return "Nieprawidłowe dane" ;   
    }
}
var triangle1Area = getTriangleArea(0, 0);
var triangle2Area = getTriangleArea(22, 2);
var triangle3Area = getTriangleArea(1, 22);
console.log(triangle1Area, triangle2Area, triangle3Area);