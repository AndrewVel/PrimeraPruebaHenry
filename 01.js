/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
//buenas tardes
function buscandoAWally(array) {
  // La función llamada 'buscandoAWally' recibe como argumento un arreglo de 'string' y debe devolver un 'string' que diga
  // 'Encontre a Wally en la posicion [indice del arreglo donde esta]'
  // Ej:
  // buscandoAWally(['Dobby', 'Harry', 'Dementor', 'Wally', 'Sirius']) debe retornar 'Encontre a Wally en la posicion 3'
  // ya que 'Wally' se encuentra en la posicion 3 del arreglo.
  // Tu código aca:

  var bandera=false;
  var posicion

  posicion=(array.length);

  for (var i=0 ; i<posicion; i++)
  {
    if('Wally'==array[i]){
      return i;
    }
    
  }

}

var array=['Dobby', 'Harry', 'Dementor', 'Wally', 'Sirius'];
buscandoAWally(array);
console.log("Encontre a Wally en la posicion " +buscandoAWally(array))

// No modifiques nada debajo de esta linea //

module.exports = buscandoAWally