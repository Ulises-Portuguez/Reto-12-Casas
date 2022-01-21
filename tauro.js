var carreritas = ["Lucia", "Roberto", "Maria", "Jesus", "Andrea", "Jose"];
carreritas.forEach(function (elemento, indice, array) {
    console.log(indice, elemento);
});

var quitar = carreritas.splice(4, 1);
carreritas.splice(2, 0, "Andrea");// Andrea adelanta a Maria
console.log(carreritas);

carreritas.pop();//Jose es descalificado
console.log(carreritas);

carreritas.splice(1, 0, "Cristobal", "Fernanda", "Armando");//se agregan 3 mas
console.log(carreritas);

carreritas.unshift("Fedarico");//Federico toma el  primer lugar
console.log(carreritas);
