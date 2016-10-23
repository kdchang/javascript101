const playBtn = document.querySelector('#play');
playBtn.addEventListener('click', play);

const poker = ['火球鼠', '小鋸鱷', '菊草葉'];

function play() {
  const choice = parseInt(prompt('請問你要派出哪隻神奇寶貝呢（請輸入數字）？0.小火龍 1.傑尼龜 2.妙蛙種子'));
  const index = Math.floor(Math.random() * 3);
  switch(choice) {
    case 0:
      if(index === 0) {
        console.log(index);
        alert('對方派出' + poker[index] + ' ' + '雙方勢均力敵！');
      } else if (index === 1) {
        alert('對方派出' + poker[index] + ' ' + '不好，屬性相剋，你輸了！');        
      } else {
        alert('對方派出' + poker[index] + ' ' + '太好了，抓住對方弱點，贏了！');
      }       
      break;
    case 1:
      if(index === 0) {
        alert('對方派出' + poker[index] + ' ' + '太好了，抓住對方弱點，贏了！');
      } else if (index === 1) {
        alert('對方派出' + poker[index] + ' ' + '雙方勢均力敵！');        
      } else {
        alert('對方派出' + poker[index] + ' ' + '不好，屬性相剋，你輸了！');
      }      
      break;
    case 2:
      if(index === 0) {
        alert('對方派出' + poker[index] + ' ' + '不好，屬性相剋，你輸了！');
      } else if (index === 1) {
        alert('對方派出' + poker[index] + ' ' + '太好了，抓住對方弱點，贏了！');        
      } else {
        alert('對方派出' + poker[index] + ' ' + '雙方勢均力敵！');
      }      
      break;
  }
}
      