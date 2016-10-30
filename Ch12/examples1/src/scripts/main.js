//const REQUEST_URL = 'http://163.29.157.32:8080/dataset/6a3e862a-e1cb-4e44-b989-d35609559463/resource/f4a75ba9-7721-4363-884d-c3820b0b917c/download/393625397fc043188a3f8237c1da1c6f.json';
let index = Math.floor(Math.random() * 400);
let data = '';

function disLikeBtnListener() {
  const dislikeBtn = document.querySelector('#dislike-btn');
  dislikeBtn.addEventListener('click', function() {
    index = Math.floor(Math.random() * 400);
    showData();
  });
}

function fetchDemo() {
  const REQUEST_URL = 'http://gank.io/api/data/%E7%A6%8F%E5%88%A9/400/1';
  fetch(REQUEST_URL).then((response) => {
    return response.json();
  }).then(function(json) {
    data = json.results;
    showData();
    disLikeBtnListener();
  });
}

const showData = () => {
  let str = '';
  str += 
  `
    <a href="${data[index].url}" class="thumbnail show-img-area" id="show-img-area" target="_blank">
      <img src=${data[index].url}>
    </a>
  `;
  document.querySelector('#show-img-box').innerHTML = str; 
}


fetchDemo();
