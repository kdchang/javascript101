// 程式 = 資料結構 + 演算法
/*
目標：設計一個寶可夢對戰遊戲

資料結構設計：儲存遊戲狀態、玩家和電腦選擇的神奇寶貝

演算法設計：隨機產生電腦選擇的寶貝，並依玩家和電腦所派出的寶貝判斷誰勝誰負

0. 菊草葉：草系
1. 火球鼠：火系
2. 小鋸鱷：水系
*/

var startBtn = document.querySelector('#start-btn');
var choice = 0;

startBtn.addEventListener('click', function() {
  var comChoice = Math.floor(parseFloat(Math.random() * 3));
  choice = parseInt(prompt('請輸入您想派出的神奇寶貝！ 0. 菊草葉 1. 火球鼠 2. 小鋸鱷', 0));
  if(choice === 0) {
    alert('你派出了菊草葉！');
    if(comChoice === 0) {
      alert('對手派出菊草葉，平分秋色！');
    } else if (comChoice === 1) {
      alert('對手派出火球鼠，屬性相剋，你輸了！');             
    } else if (comChoice === 2) {
      alert('對手派出小鋸鱷，耶，你贏了！');             
    }
  } else if(choice === 1) {
    alert('你派出了火球鼠！');
    if(comChoice === 0) {
      alert('對手派出菊草葉，耶，你贏了！');
    } else if (comChoice === 1) {
      alert('對手派出火球鼠，平分秋色！');             
    } else if (comChoice === 2) {
      alert('對手派出小鋸鱷，屬性相剋，你輸了！');             
    }
  } else if(choice === 2) {
    alert('你派出了小鋸鱷！');
    if(comChoice === 0) {
      alert('對手派出菊草葉，屬性相剋，你輸了！');
    } else if (comChoice === 1) {
      alert('對手派出火球鼠，耶，你贏了！');             
    } else if (comChoice === 2) {
      alert('對手派出小鋸鱷，平分秋色！');             
    }
  }
});







