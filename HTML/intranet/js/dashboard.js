// primer dashboard
const capVentasTotales = document.querySelector("#ventasTotales");
const ctxTotales = capVentasTotales.getContext("2d");
ctxTotales.fillStyle = "#ffffff";
ctxTotales.fillRect(0, 0, 700, 550);
// Ventas Totales
ctxTotales.fillStyle = "#000";
ctxTotales.font = "bolder 20px Arial";
ctxTotales.fillText("VENTAS TOTALES", 10, 30);
// +2%
ctxTotales.fillStyle = "#03a100";
ctxTotales.font = "bolder 12px Arial";
ctxTotales.fillText("+2%", 10, 50);
// Vetnas mensuales
ctxTotales.fillStyle = "#666666";
ctxTotales.font = "bolder 12px Arial";
ctxTotales.fillText("Ventas mensuales", 40, 50);
// plano cartesiano xd
// Eje Y
// linea Y
ctxTotales.strokeStyle = "#000000";
ctxTotales.beginPath();
ctxTotales.moveTo(60, 90);
ctxTotales.lineWidth = 1;
ctxTotales.lineTo(60, 450);
ctxTotales.stroke();
// 100
ctxTotales.font = "bolder 12px Arial";
ctxTotales.fillText("100", 30, 90);
// 75
ctxTotales.fillText("75", 30, 180);
//50
ctxTotales.fillText("50", 30, 270);
//25
ctxTotales.fillText("25", 30, 360);
// 0
ctxTotales.fillText("0", 30, 450);

// Eje X
// Linea X
ctxTotales.strokeStyle = "#000000";
ctxTotales.beginPath();
ctxTotales.moveTo(60, 450);
ctxTotales.lineWidth = 1;
ctxTotales.lineTo(660, 450);
ctxTotales.stroke();
// Enero
ctxTotales.font = "bolder 12px Arial";
ctxTotales.fillText("Enero", 60, 480);
// Febrer
ctxTotales.fillText("Febrero", 180, 480);
// Marzo
ctxTotales.fillText("Marzo", 300, 480);
// Abril
ctxTotales.fillText("Abril", 420, 480);
// Mayo
ctxTotales.fillText("Mayo", 540, 480);
// fin plano cartesiano

// Puntos
// Primer punto
ctxTotales.fillStyle = "#03a100";
ctxTotales.beginPath();
ctxTotales.arc(60, 370, 8, 0, 2 * Math.PI);
ctxTotales.fill();
// segundo punto
ctxTotales.beginPath();
ctxTotales.arc(200, 200, 8, 0, 2 * Math.PI);
ctxTotales.fill();
// Tercer punto
ctxTotales.beginPath();
ctxTotales.arc(320, 420, 8, 0, 2 * Math.PI);
ctxTotales.fill();
// Cuarto punto
ctxTotales.beginPath();
ctxTotales.arc(440, 180, 8, 0, 2 * Math.PI);
ctxTotales.fill();
// Quinto punto
ctxTotales.beginPath();
ctxTotales.arc(560, 120, 8, 0, 2 * Math.PI);
ctxTotales.fill();
// Fin puntos

// aviso
ctxTotales.fillStyle = "#EEEEEE";
ctxTotales.fillRect(200, 130, 100, 50);

ctxTotales.fillStyle = "#000";
ctxTotales.font = "12px Arial";
ctxTotales.fillText("Marzo:", 205, 145);
ctxTotales.font = "12px Arial";
ctxTotales.fillText("S/. 5000.00:", 205, 165);

// no se como hacer esas lineas curveadas xd
// asi que pinta la linea :v
const margenx = capVentasTotales.offsetLeft;
const margeny = capVentasTotales.offsetTop;

let par = [];
const pintar = (e) => {
  console.log(e);
  // let cordx = x - margenx;
  // let cordy = y - margeny;
  // par.push({ cordx, cordy });
  // if (par.length == 2) {
  //   ctxTotales.strokeStyle = "#03a100";
  //   ctxTotales.lineCap = "round";
  //   ctxTotales.beginPath();
  //   ctxTotales.moveTo(par[0].cordx, par[0].cordy);
  //   ctxTotales.lineWidth = 6;
  //   ctxTotales.lineTo(par[1].cordx, par[1].cordy);
  //   ctxTotales.stroke();
  //   par.shift();
  // }
};
const noPintar = () => {
  capVentasTotales.removeEventListener("mousemove", pintar);
  par = [];
};

capVentasTotales.addEventListener("mousedown", () => {
  capVentasTotales.addEventListener("mousemove", pintar);
  capVentasTotales.addEventListener("mouseup", noPintar);
  capVentasTotales.addEventListener("mouseout", noPintar);
});
// Fin del primer Dashboard

/////////////////////////////////////////////////////////////
// Segundo Dashboard
const capVentasTipos = document.querySelector("#ventasTipos");
const ctxTipos = capVentasTipos.getContext("2d");

// fondo
ctxTipos.fillStyle = "#03a100";
ctxTipos.fillRect(0, 0, 700, 550);

// Titulo
ctxTipos.fillStyle = "white";
ctxTipos.font = "20px Arial";
ctxTipos.fillText("VENTAS POR TIPOS DE FLORES", 10, 30);
// Subtitulo
ctxTipos.font = "12px Arial";
ctxTipos.fillText("Ventas mensuales", 10, 50);

// Plano cartesiano x2 xd

// Eje Y
// linea Y
ctxTipos.strokeStyle = "white";
ctxTipos.beginPath();
ctxTipos.moveTo(60, 90);
ctxTipos.lineWidth = 1;
ctxTipos.lineTo(60, 450);
ctxTipos.stroke();
// 100
ctxTipos.font = "bolder 12px Arial";
ctxTipos.fillText("100", 30, 94);
ctxTipos.beginPath();
ctxTipos.arc(60, 90, 2, 0, 2 * Math.PI);
ctxTipos.fill();
// 75
ctxTipos.fillText("75", 30, 184);
ctxTipos.beginPath();
ctxTipos.arc(60, 180, 2, 0, 2 * Math.PI);
ctxTipos.fill();
//50
ctxTipos.fillText("50", 30, 274);
ctxTipos.beginPath();
ctxTipos.arc(60, 270, 2, 0, 2 * Math.PI);
ctxTipos.fill();
//25
ctxTipos.fillText("25", 30, 364);
ctxTipos.beginPath();
ctxTipos.arc(60, 360, 2, 0, 2 * Math.PI);
ctxTipos.fill();
// 0
ctxTipos.fillText("0", 30, 454);

// Eje X
// Linea X
ctxTipos.strokeStyle = "white";
ctxTipos.beginPath();
ctxTipos.moveTo(60, 450);
ctxTipos.lineWidth = 1;
ctxTipos.lineTo(660, 450);
ctxTipos.stroke();

// Ortensias
ctxTipos.font = "bolder 12px Arial";
ctxTipos.fillText("Ortensias", 82, 480);
// Margaritas
ctxTipos.fillText("Margaritas", 180, 480);
// Claveles
ctxTipos.fillText("Claveles", 285, 480);
// Azucenas
ctxTipos.fillText("Azucenas", 385, 480);
// Rosas
ctxTipos.fillText("Rosas", 490, 480);
// Otros
ctxTipos.fillText("Otros", 590, 480);
// fin plano cartesiano

// logica de barras
// Variables
const ortensias = 77;
const margaritas = 94;
const claveles = 88;
const azucenas = 55;
const rosas = 90;
const otros = 58;

ctxTipos.font = "10px Arial";

// barra Ortensias (60, 160)
ctxTipos.fillRect(85, 450, 50, ortensias * -3.6);
ctxTipos.fillText(String(ortensias), 105, 440 + ortensias * -3.6);
// barra Margaritas (160, 260)
ctxTipos.fillRect(185, 450, 50, margaritas * -3.6);
ctxTipos.fillText(String(margaritas), 205, 440 + margaritas * -3.6);
// barra Claveles (260, 360)
ctxTipos.fillRect(285, 450, 50, claveles * -3.6);
ctxTipos.fillText(String(claveles), 305, 440 + claveles * -3.6);
// barra Azucenas (360, 460)
ctxTipos.fillRect(385, 450, 50, azucenas * -3.6);
ctxTipos.fillText(String(azucenas), 405, 440 + azucenas * -3.6);
// barra Rosas (460, 560)
ctxTipos.fillRect(485, 450, 50, rosas * -3.6);
ctxTipos.fillText(String(rosas), 505, 440 + rosas * -3.6);
// barra Otros (560, 660)
ctxTipos.fillRect(585, 450, 50, otros * -3.6);
ctxTipos.fillText(String(otros), 605, 440 + otros * -3.6);
