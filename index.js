const app = "I don't do much."
function destructivelyAppendKitten(array, element) {
  return (kittens.push('Ralph'))
}
function destructivelyPrependKitten(array, element) {
  return (kittens.unshift('Bob'))
}
function destructivelyRemoveLastKitten(array, element) {
  return (kittens.pop('Garfield'))
}
function destructivelyRemoveFirstKitten(array, element) {
  return (kittens.shift('Milo'))
}
function appendKitten(name) {
  return (kittens.concat('Broom'))
}
var kittens = ('Milo', 'Otis', 'Garfield')
function prependKitten(name) {
  return ('Arnold, '.concat(kittens))
}