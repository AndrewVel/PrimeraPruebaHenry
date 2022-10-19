/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function vegan(invitados) {
  // La funcion llamada "vegan" recibe como argumento un objeto 'invitados', en el objeto tenemos objetos que representan los invitados
  // a una fiesta en donde todos tienen una propiedad "vegan" con un boolean.
  // debe retornar la cantidad de invitados que son vegan.
  // Por ej:
  // let invitados = {
  //     Luna: {
  //         vegan: false
  //     },
  //     Sebas: {
  //         vegan: false
  //     },
  //     Marce: {
  //         vegan: false
  //     },
  //     Nicky: {
  //         vegan: true
  //     }
  // };
  // vegan(invitados) devuelve 1
  // Tip: Podes usar el metodo for...in
  // Tu código aca:

  var cont=0;

  invitados = {
    Luna: {
      vegan: false
    },
    Sebas: {
      vegan: false
    },
    Marce: {
      vegan: true,
    },
    Nicky: {
      vegan: true,
    },
  };

  for (let inv in invitados){
       
    if((invitados[inv].vegan)==true)
    {cont=cont+1;}
    
  };

  return cont;

}


vegan();
console.log('Invitados de Vegan = ' +vegan());

// No modifiques nada debajo de esta linea //

module.exports = vegan