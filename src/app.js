window.onload = function() {
  
  let suits = ["♥", "♦", "♣", "♠"];
  let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  
  function generarCarta() {
  let randomSuit = Math.floor(Math.random() * suits.length)
  let suit = suits[randomSuit];
  let value = values[Math.floor(Math.random() * values.length)];

  let color = (suit === "♥" || suit === "♦") ? "rojo" : "negro";
document.querySelector

document.querySelector("#carta").innerHTML = `
<div class="suitTop ${color}">${suit}</div>
<div class="value ${color}">${value}</div>
<div class="suitBottom ${color}">${suit}</div>
`;
}

generarCarta(); 
};
