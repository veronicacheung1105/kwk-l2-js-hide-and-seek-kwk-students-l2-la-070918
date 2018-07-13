//Code your solution here
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n){
  const unrankeds = document.getElementById('app').querySelectorAll('.ranked-list');
  for (let i = 0; i < unrankeds.length; i++){ 
    unrankeds[i].innerHTML = (unrankeds[i] + n).toString();
  }
}

funtion deepestChild(){
  
}