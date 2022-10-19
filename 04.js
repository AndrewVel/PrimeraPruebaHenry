/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function puntosDelEquipo(array) {
  // la funcion recibe un array con los resultados de los partidos del campeonato de futbol de un equipo
  // en este formato ["3:1", "2:2", "0:1", ...]
  // la funcion debe calcular y retornar cuantos puntos consiguio el equipo teniendo en cuenta:
  // que su resultado es el primero en cada string
  // un partido ganado suma 3 puntos, empate suma 1 punto, y perder 0!
  // Tu código aca:

  var cont =0;

  posicion=(array.length);

  for( var i=0; i<posicion ; i++){
    
    if(array[i].substring(1,0)>array[i].substring(2)){
        cont=cont+3
    }

    if(array[i].substring(1,0)==array[i].substring(2)){
      cont=cont+1
    }

  }
  
  return cont;
}

var array= ["3:1", "2:2", "0:1","2:1",'3:3']
puntosDelEquipo(array);

console.log('Obtuvo '+puntosDelEquipo(array)+' puntos')
// No modifiques nada debajo de esta linea //

module.exports = puntosDelEquipo