/**
* Scrivere qui il codice della funzione fattoriale(n)
**/

function fatt(n) {
  var i, f
  f = 1
  for (i = n; i > 1; i--) {
    f = f * i
  }
  return (f)
}