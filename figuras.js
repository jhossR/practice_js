//Cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es de: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + " cm2");
console.groupEnd();

//Triangulo
console.group("Trangulo")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triángulo miden: " + 
ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, y " + baseTriangulo + " cm");

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es: " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triángulo es de: " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triangulo es: " + areaTriangulo + " cm2");

console.groupEnd();

//Circulo
console.group("Ciculo");
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + " cm");


const diametroCirculo = radioCirculo*2;
console.log("El diametro del circulo es: " + diametroCirculo + " cm");

//PI
const PI = Math.PI;

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es de: " + perimetroCirculo + " cm");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del circulo es: " + areaCirculo + " cm2");
console.groupEnd();