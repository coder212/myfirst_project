function addChar(input, character) {
if(input.value == "0")
input.value = character
else if (input.value=="null")
input.value = NaN
else
input.value += character
}
function cosinus(form) {
var derajat=form.display.value * Math.PI/ 180
if (form.display.value==60){
form.display.value= 0.5}
else if (form.display.value==90){
form.display.value==0}
else if (form.display.value==120){
form.layar.value=-1/2 }
else if (form.display.value==270){
form.display.value=0}
else{
form.display.value = Math.cos(derajat)}
}
function sinus(form) {
var derajat = form.display.value * Math.PI / 180
if(form.display.value == 30){
form.display.value= 1/2}
else if (form.display.value== 180){
form.display.value=0}
else if (form.display.value==360){
form.display.value="-0" }
else{
form.display.value = Math.sin(derajat);}
}
function tangen(form) {
var derajat = form.display.value * Math.PI / 180
if (form.display.value==90){
form.display.value="tak terdifinisi" }
else{
form.display.value = Math.tan(derajat);}
}
function arcTan(form){
form.display.value= Math.atan(form.display.value)
}
function arcSin(form) {
form.display.value = Math.asin(form.display.value)
}
function arcCos (form) {
form.display.value = Math.acos(form.display.value)
}
function tanh(x) {
var e = Math.exp(2*x) 
return (e-1)/(e+1)}
Math.constructor.prototype.tanh = tanh;
function tanhiperbolic(form){
var derajat=form.display.value * Math.PI/180
form.display.value= Math.tanh(derajat)
}
function sinh(x)
   {
   var e = Math.pow(Math.E, x)
   var y = Math.pow(Math.E, -x)
   return (e-y)/2
   }
   // Register the new function
   Math.constructor.prototype.sinh = sinh;
function sinhip(form){
var derajat= form.display.value * Math.PI/180
form.display.value= Math.sinh(derajat)}
function cosh(x)
   {
   var e = Math.pow(Math.E, x)
   var y = Math.pow(Math.E,-x)  
   return (e+y)/2
   }
   // Register the new function
   Math.constructor.prototype.cosh = cosh;
function coship(form){
var derajat = form.display.value * Math.PI/180
form.display.value = Math.cosh(derajat)}
function sec(form){
var derajat = form.display.value * Math.PI / 180
form.display.value = 1/ Math.cos(derajat)
}
function cosec(form){
var derajat= form.display.value * Math.PI / 180
form.display.value = 1/ Math.sin(derajat)
}
function cotan(form){
var derajat = form.display.value * Math.PI / 180
form.display.value = 1/ Math.tan(derajat)
}
function asec(form){
var derajat = form.display.value * Math.PI /180
form.display.value = 1 / Math.acos(derajat)}
function acosec(form){
var derajat= form.display.value * Math.PI / 180
form.display.value = 1 / Math.asin(derajat)}
function acotan(form){
var derajat= form.display.value * Math.PI / 180
form.display.value = 1/ Math.atan(derajat)}
function sech(form){
var derajat = form.display.value * Math.PI / 180
form.display.value = 1/ Math.cosh(derajat)}
function cosech(form){
var derajat = form.display.value * Math.PI / 180
form.display.value = 1/ Math.sinh(derajat)}
function cotanh(form){
var derajat = form.display.value * Math.PI / 180
form.display.value = 1/ Math.tanh(derajat)}
function atanh(x) {
       return (Math.log((1+x)/(1-x)))/2;
}
Math.constructor.prototype.atanh= atanh
function arctanh(form){
var derajat = form.display.value * Math.PI/180
form.display.value = Math.atanh(derajat)}
function asinh(x) {
       return atanh(x/Math.sqrt(1+x*x));
}
Math.constructor.prototype.asinh=asinh
function arcsinh(form){
var derajat = form.display.value * Math.PI/180
form.display.value = Math.asinh(derajat)}
function acosh(x) {
       if (x < 1.0) return Math.sqrt(-1);
       return atanh(Math.sqrt(x*x-1)/x);
}
Math.constructor.prototype.acosh=acosh
function arccosh(form){
var derajat=form.display.value * Math.PI/180
form.display.value= Math.acosh(derajat)}
function asech(x){
return acosh(1/x)
}
Math.constructor.prototype.asech=asech
function arcsech(form){
var derajat= form.display.value
form.display.value= Math.asech(derajat)}
function acosech(x){
return asinh(1/x)
}
Math.constructor.prototype.acosech=acosech
function arccosech(form){
var derajat = form.display.value * Math.PI/180
form.display.value= Math.acosech(derajat)}
function acotanh(x){
return atanh(1/x)
}
Math.constructor.prototype.acotanh=acotanh
function arccotanh(form){
var derajat= form.display.value * Math.PI/180
form.display.value = Math.acotanh(derajat)}
function akar(form) {
form.layar.value = Math.sqrt(form.layar.value);
}
function logaritma(form) {
form.layar.value = Math.log(form.layar.value);}
function exponensial(form) {
form.layar.value = Math.exp(form.layar.value);}
function akar(form) {
form.layar.value = Math.sqrt(form.layar.value);}
function hapuschar(input) {
input.value = input.value.substring(0, input.value.length - 1)
}
function ubahTanda(input) {
if(input.value.substring(0, 1) == "-")
input.value = input.value.substring(1, input.value.length)
else
input.value = "-" + input.value
}
function hitung(form) {
form.layar.value = eval(form.layar.value)}
function kuadrat(form) {
form.layar.value = eval(form.layar.value) *
eval(form.layar.value)}
function cekAngka(str) {
for (var i = 0; i < str.length; i++) {
var ch = str.substring(i, i+1)
if (ch < "0" || ch > "9") {
if (ch != "/" && ch != "*" && ch != "+" && ch !=
"-" && ch != "."
&& ch != "(" && ch!= ")") {
alert("angka yang anda masukkan tidak valid!")
return false
}
}
}
return true
}
