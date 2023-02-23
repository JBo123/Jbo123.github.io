/*let content = document.getElementById("numberButton").textContent
function loadScript(src){
const script  = document.createElement("script")
script.src =  src;
document.body.append(script)
}
loadScript(cards.js)
let card
let output = ""
let counter = 0
let cardCounter = 0
var total = document.getElementById("total")
function takeCard(){
    counter++
    console.log("card Taken")
    
    card =  Math.floor(Math.random() * 11)+1
    cardCounter = cardCounter + card
    if( counter === 1)
    {
        output = card.toString()
        console.log(output)
    }
    else
    {
        output = output + ","+ card.toString() 
        console.log(output)
    }
  console.log(cardCounter) 
  if (cardCounter >21)
  {
    console.log("u lost gg mate")
  }
  console.log(total)
  total.textContent = cardCounter
  if (cardCounter > 21)
  {
    total.textContent = cardCounter + " u lost man"
  }
  if(cardCounter === 21)
  {
    total.textContent = cardCounter + " ez win"
  }
}*/
window.onload = function() {
  document.documentElement.classList.add('show-time');
};
function Open(){
  window.open('contact.html')
}
function GitLoad(){
  window.open('https://github.com/Jbo123')
}