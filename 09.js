/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function repetirCaracteres() {
  // Escribi una funcion llamada 'repeatCharacters' en el prototypo del objeto global String
  // que reciba como parametro un string
  // y devuelve un string en donde cada letra se repita una vez.
  // Por ej:
  // 'hola'.repeatCharacters() devuelve "hhoollaa"
  // Tu código aca:

  String.prototype.repetirCaracteres = function(){
    var parametro=this;
    var doble="";

    for(var i=0 ; i< (parametro.length) ; i++){
      
      var letra = parametro[i];
      doble += letra.charAt().repeat(2);

    }

    return doble;

  } 
}

repetirCaracteres();
console.log("hola".repetirCaracteres())

// No modifiques nada debajo de esta linea //

module.exports = repetirCaracteres