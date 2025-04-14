window.onload = function() {
  
  let suitTops = ["♥", "♦", "♣", "♠"]; 
  let suitButtoms = ["♥", "♦", "♣", "♠"];
  let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  
  function generarCarta() {
  let suitButtom = suitButtoms[Math.floor(Math.random() * suitButtoms.length)];
  let suitTop = suitTops[Math.floor(Math.random() * suitTops.length)];
  let value = values[Math.floor(Math.random() * values.length)];

  let color = (suitTop === "♥" || suitTop === "♦") ? "rojo" : "negro";
// document.querySelector("#carta").textContent = '♥'

document.getElementById("carta").innerHTML = `
<div class="suitTop ${color}">${suitTop}</div>
<div class="value ${color}">${value}</div>
<div class="suitButtom ${color}">${suitButtom}</div>
`;
}

generarCarta(); 
};
