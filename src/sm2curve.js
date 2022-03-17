const {Curve} = require('ecurve');
const bigi = require('bigi');
const curveParams = {
  "p": "FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF",
  "a": "FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC",
  "b": "28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93",
  "n": "FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123",
  "h": "01",
  "Gx": "32C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7",
  "Gy": "BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0"
};

function getSM2Curve(){

  var p = new bigi(curve.p, 16)
  var a = new bigi(curve.a, 16)
  var b = new bigi(curve.b, 16)
  var n = new bigi(curve.n, 16)
  var h = new bigi(curve.h, 16)
  var Gx = new bigi(curve.Gx, 16)
  var Gy = new bigi(curve.Gy, 16)
  return new Curve(p, a, b, Gx, Gy, n, h)
}
module.exports = {getSM2Curve};