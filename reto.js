let n1 = parseFloat(prompt("Ingresa el primer numero"));
let n2 = parseFloat(prompt("Ingresa el segundo numero"));
let operacion = (prompt("Ingrese la operacion"));
let resultado;
switch (operacion){
    case 'suma':
        resultado = n1+n2
        break
    case 'resta':
        resultado = n1-n2
        break
    case 'multiplicacion':
        resultado = n1*n2
        break
    case 'division':
        resultado = n1/n2
        break                
}
alert("El resultado es:  " + resultado);
console.log("El resultado es: " + resultado);