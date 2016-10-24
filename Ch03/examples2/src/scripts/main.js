import Monster from './Monster';
const playBtn = document.querySelector('#play');
playBtn.addEventListener('click', play);

const charmander = new Monster('小火龍', './dist/img/charmander.png', 100, '火系');
const squirtle = new Monster('傑尼龜', './dist/img/squirtle.png', 100, '水系');
const bulbasaur = new Monster('妙蛙種子', './dist/img/bulbasaur.png', 100, '草系');

const cyndaquil = new Monster('火球鼠', './dist/img/cyndaquil.png', 100, '火系');
const totodile = new Monster('小鋸鱷', './dist/img/totodile.png', 100, '水系');
const chikorita = new Monster('菊草葉', './dist/img/chikorita.png', 100, '草系');

const monsters = [charmander, squirtle, bulbasaur];
const competitors = [cyndaquil, totodile, chikorita];

function play() {
    let isFight = true;
    let choice = parseInt(prompt('小治，請問你要派出哪隻神奇寶貝呢（請輸入數字）？ ---------- 0 小火龍 1 傑尼龜 2 妙蛙種子'));
    let competitorChoice = Math.floor(Math.random() * 3);

    while (!competitors[competitorChoice].isAlive()) {
        competitorChoice = Math.floor(Math.random() * 3);
    }

    if (monsters[choice].isAlive()) {
        switch (choice) {
            case 0:
                if (competitorChoice === 0) {
                    pk(choice, competitorChoice, 'tie');
                    showView(choice, competitorChoice);
                } else if (competitorChoice === 1) {
                    pk(choice, competitorChoice, 'lost');
                    showView(choice, competitorChoice);
                } else {
                    pk(choice, competitorChoice, 'win');
                    showView(choice, competitorChoice);
                }
                break;
            case 1:
                if (competitorChoice === 0) {
                    pk(choice, competitorChoice, 'win');
                    showView(choice, competitorChoice);
                } else if (competitorChoice === 1) {
                    pk(choice, competitorChoice, 'tie');
                    showView(choice, competitorChoice);
                } else {
                    pk(choice, competitorChoice, 'lost');
                    showView(choice, competitorChoice);  
                }
                break;
            case 2:
                if (competitorChoice === 0) {
                    pk(choice, competitorChoice, 'lost');
                    showView(choice, competitorChoice);
                } else if (competitorChoice === 1) {
                    pk(choice, competitorChoice, 'win');
                    showView(choice, competitorChoice);
                } else {
                    pk(choice, competitorChoice, 'tie');
                    showView(choice, competitorChoice);
                }
                break;
        }
    } else {
        alert(`${monsters[choice].getName()} 已失去戰鬥能力！`);
        choice = -1;
    }
}

function pk(choice, competitorChoice, type) {
    let dieCount = 0;

    switch (type) {
        case 'win':
            monsters[choice].setHurt(5);
            competitors[competitorChoice].setHurt(50);
            alert(`就決定是你了！${monsters[choice].getName()} ------ 對方派出${competitors[competitorChoice].getName()}，太好了，抓住對方弱點！ HP -5，${monsters[choice].getName()} HP 還剩 ${monsters[choice].getHP()}`);
            break;
        case 'lost':
            monsters[choice].setHurt(50);
            competitors[competitorChoice].setHurt(5);
            alert(`就決定是你了！${monsters[choice].getName()} ------ 對方派出${competitors[competitorChoice].getName()}，不好，屬性相剋！ HP -50，${monsters[choice].getName()} HP 還剩 ${monsters[choice].getHP()}`);
            break;
        case 'tie':
            monsters[choice].setHurt(30);
            competitors[competitorChoice].setHurt(30);
            alert(`就決定是你了！${monsters[choice].getName()} ------ 對方派出${competitors[competitorChoice].getName()}，雙方勢均力敵！ HP -30，${monsters[choice].getName()} HP 還剩 ${monsters[choice].getHP()}`);
            break;
    }
}

function showView(choice, competitorChoice) {
    const player1List = document.querySelector('#player1-list');
    const player2List = document.querySelector('#player2-list');

    player1List.innerHTML = `
      <li class="list-group-item">
        <img class="monster-img" src="${monsters[choice].getImage()}">
      </li>
      <li class="list-group-item">
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="${monsters[choice].getHP()}" aria-valuemin="0" aria-valuemax="100" style="width: ${monsters[choice].getHP()}%;">
            ${monsters[choice].getHP()}%
          </div>
        </div>          
      </li>
      <li class="list-group-item">${monsters[choice].getName()}</li>
      <li class="list-group-item">屬性：${monsters[choice].getType()}</li>
      `;

    player2List.innerHTML = `
      <li class="list-group-item">
        <img class="monster-img" src="${competitors[competitorChoice].getImage()}">
      </li>
      <li class="list-group-item">
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="${competitors[competitorChoice].getHP()}" aria-valuemin="0" aria-valuemax="100" style="width: ${competitors[competitorChoice].getHP()}%;">
            ${competitors[competitorChoice].getHP()}%
          </div>
        </div>          
      </li>
      <li class="list-group-item">${competitors[competitorChoice].getName()}</li>
      <li class="list-group-item">屬性：${competitors[competitorChoice].getType()}</li>
      `;
}

