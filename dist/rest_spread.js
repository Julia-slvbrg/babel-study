"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//REST

function somar() {
  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }
  var sum = nums.reduce(function (accum, item) {
    accum += item;
    return accum;
  }, 0);
  return sum;
}
; //assim dá pra passar inúmeros argumentos na função. Só pode passar um rest operator como argumento. mas pode passar por exemplo function xxxx(nome, sobrenome, ...nums){}

console.log(somar(10, 20, 30));

//SPREAD

var nums = [1, 2, 3, 4];
var nums1 = [1000, 2000, 3000, 4000];
var totalNums = [].concat(nums, nums1);
console.log(totalNums);

//DESESTRUTURAÇÃO

var carroJulia = {
  modelo: 'gol',
  marca: 'vw',
  motor: 1.6
};
var carroAna = _objectSpread(_objectSpread({}, carroJulia), {}, {
  motor: 1.8
});
var motorAna = carroAna.motor;
var motorJulia = carroJulia.motor;
console.log({
  motorAna: motorAna
});
console.log({
  motorJulia: motorJulia
});