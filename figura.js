//Cuadrado
function perimetroCuadrado(ladoCu) {
    return ladoCu * 4;
};

function areaCuadrado(ladoCu) {
    return ladoCu * ladoCu;
};

//Trangulo
function perimetroTriangulo(ladoTr1, ladoTr2, baseTr) {
    return ladoTr1 + ladoTr2 + baseTr;
};

function areaTriangulo(baseTr, alturaTr) {
    return (baseTr * alturaTr) / 2;
};

//Circulo
const PI = Math.PI;

function diametroCirculo(radioCi) {
    return radioCi * 2;
};

function perimetroCirculo(radioCi) {
    const diametro = diametroCirculo(radioCi);
    return diametro * PI;
};

function areaCirculo(radioCi) {
    return (radioCi * radioCi) * PI;
}