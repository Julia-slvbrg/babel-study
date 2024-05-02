"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//MAP

var meuMap = new Map(); //cria grupos chave valor. O primeiro item é a chave, ela é única e não pode se repetir, o segundo é o valor, que pode ser repetido. Se só passar um item, ele vai ser a chave e o valor vai ser undefined
meuMap.set('nome', 'julia');
meuMap.set('gabo');
meuMap.set('gabo', 'gato');
meuMap.set('nildio', 'gato');
var nome = meuMap.get('nome');
console.log(meuMap);
console.log(meuMap.size);
console.log(nome);
console.log(meuMap.has('gabo'));

//SET

var cpfs = new Set(); // o set cria um array de ITENS únicos, os itens são as próprias chaves

cpfs.add('70119065096');
cpfs.add('52036220002');
cpfs.add('05891241021');
console.log(cpfs);
var arr = ['gabo', 'nildio', 'mumu', 'gabo', 'nildio'];
var setArr = new Set([].concat(arr)); //isso aqui vai gerar um set sem os dados duplicados que tinha no array
console.log(setArr);
var arrSemDuplicados = _toConsumableArray(setArr);
console.log(arrSemDuplicados);