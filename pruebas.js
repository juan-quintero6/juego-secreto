let listaGenerica = [];

let listalenguajesDeProgramación = ['JavaScript','C','C++','Kotlin','Python'];
listalenguajesDeProgramación.push('Java');
listalenguajesDeProgramación.push('Ruby');
listalenguajesDeProgramación.push('GoLang');



function mostrarLista() {
    for (let index = 0; index < listalenguajesDeProgramación.length; index++) {
        console.log(listalenguajesDeProgramación[index]);        
    }

}

function mostrarListaInversa() {
    for (let index = listalenguajesDeProgramación.length; index >= 0; index--) {
        console.log(listalenguajesDeProgramación[index]);        
    }
}



function promedio(){
    suma = 0;
    for (let index = 0; index < numeros.length; index++) {
        suma += numeros[index];
    }   let prom = suma/numeros.length; 
        console.log(prom);
}

function numMayor(){
    numMayor = 0;
    numMenor = numeros[0];
    for (let index = 0; index < numeros.length; index++) {
        if(numeros[index] > numMayor){
            numMayor = numeros[index];
        }
    }
    for (let index = 1; index < numeros.length; index++) {
        if(numeros[index] < numMenor){
            numMenor = numeros[index];
        }
    } 
    console.log(numMayor);
    console.log(numMenor);
}

let numeros = [3,2,5,4,9,8];
let numeros2 = [6,7,8,9,4,5];

function sumArrayOneOne (array1, array2){
    let listaNueva = [];
    if(array1.length == array2.length){
        for (let index = 0; index < array1.length; index++) {
            listaNueva.push(array1[index] + array2[index]);
            console.log(listaNueva[0]);   
        } 
    }else{
        console.log('Las arrays no son del mismo tamaño')
    }
}

let listaNueva2 = [];
function numCuad (array1){
    for (let index = 0; index < array1.length; index++) {
        listaNueva2.push(array1[index]*array1[index]);
        console.log(listaNueva2[index]);        
    }
}


//console.log("Hola");
//mostrarLista();
//mostrarListaInversa();
//promedio();
//numMayor();
sumArrayOneOne(numeros,numeros2);
//numCuad(numeros);