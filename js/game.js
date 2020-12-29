const numDivs = 36;
const maxHits = 10;

let hits = 0;
let firstHitTime = 0;

let divNum = 1;

// время начала игы с момента нажатия на кнопку Старт
timeNow = new Date();
firstHitTime = Number(timeNow.getTime());

 


function round() {
  // FIXME: надо бы убрать "target" прежде чем искать новый
 
  let divSelector = randomDivId();
  $("#button-reload").addClass("btn_hide");
  if ($(divSelector).hasClass("miss")) {
    $(divSelector).removeClass("miss");
  }

  $(divSelector).addClass("target");
  $(divSelector).text(divNum);
  ++divNum;
   
  // TODO: помечать target текущим номером
 
  // FIXME: тут надо определять при первом клике firstHitTime
  
  if (hits === maxHits) {
    endGame();
    $(".game-field").addClass("container_hide");
   
      
  }

}
function endGame() {
  // FIXME: спрятать игровое поле сначала

 
  $("#button-reload").removeClass("btn_hide");


  
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  
  $("#total-time-played").text(totalPlayedSeconds);

  $("#win-message").removeClass("d-none");
}

function handleClick(event) {
  // FIXME: убирать текст со старых таргетов. Кажется есть .text?
  
  if ($(event.target).hasClass("target")) {
    hits++;
    
    round();
  }
  else {
    $(event.target).addClass("miss");
  }

  $(event.target).removeClass("target");
  $(event.target).text("");

 
 
 
  // TODO: как-то отмечать если мы промахнулись? См CSS класс .miss

}

function init() {
  // TODO: заказчик просил отдельную кнопку, запускающую игру а не просто по загрузке
  round();
  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
    location.reload();
  });
}

$(document).ready(init);
