const ele = document.getElementById("myCanvas");
/*ele.width = 400;
ele.height = 400;
const ctx = ele.getContext('2d');

ctx.beginPath();
ctx.rect(100,100,200,200);
ctx.lineWidth = 5;
ctx.strokeStyle = "blue";
ctx.fillstyle = "black";
ctx.fill();
ctx.stroke();

ele.width = 400;
ele.height = 250;
const ctx = ele.getContext('2d');

ctx.beginPath();
ctx.rect(0,0,400,250);
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.arc(200,120,60,0,Math.PI*2);
ctx.lineWidth = 0;
ctx.fillStyle = "red";
ctx.fill();
//ctx.stroke();

ele.width = 400;
ele.height = 400;
const ctx = ele.getContext('2d');
const thickness = 2;
let x = 0,y = 0,h = 400,w = 400;

let i = 1;
while(i <= 100){
  ctx.beginPath();
  ctx.rect(x, y, h, w);
  if(i%2==1){
    ctx.fillStyle = 'blue';
  }else{
    ctx.fillStyle = 'white';
  }
  ctx.fill();
  x += thickness;
  y += thickness
  h -=(2*thickness)
  w -=(2*thickness)
  i++;
}*/

ele.width = 400;
ele.height = 400;
ele.style.backgroundColor = "cyan";
const ctx = ele.getContext("2d");

const x1 = 80,x2 = 200,x3 = 320,scaleFactor = 0.7,y1 = 260,r1 = 50;
drawShowMan(x1,y1,r1,scaleFactor);
drawShowMan(x2,y1,r1,scaleFactor);
drawShowMan(x3, y1, r1, scaleFactor);

function drawShowMan(x1,y1,r1,scaleFactor){
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(x1,y1,r1,0,Math.PI*2);
  ctx.fill();
  ctx.beginPath();
  const r2 = r1*scaleFactor, x2 = x1,y2 = y1-r1-r2;
  ctx.arc(x2, y2, r2, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  const r3 = r2*scaleFactor, x3 = x2,y3 = y2-r2-r3;
  ctx.arc(x3, y3, r3, 0, Math.PI * 2);
  ctx.fill();
  drawHat(x3,y3,r3,scaleFactor); 
}
function drawHat(x3,y3,r3,scaleFactor){
  ctx.beginPath();
  const w4 = r3*2,h4 = r3/2,x4 = x3 - w4/2,y4 = y3 - r3;
  ctx.rect(x4,y4,w4,h4);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  const w5 = w4*scaleFactor,h5 = r3,x5 = x3 - w5/2,y5 = y4 - h5;
  ctx.rect(x5,y5,w5,h5);
  ctx.fill();
}