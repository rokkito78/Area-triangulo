function areatriangulo() {

    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;
    var area = ((base * altura) / 2);
    console.log(area);
    document.getElementById("areashow").innerHTML = "El área del triángulo es : " + area + " m2";

    return area;
}
console.log("hola");