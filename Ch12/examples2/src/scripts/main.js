//const REQUEST_URL = 'http://163.29.157.32:8080/dataset/6a3e862a-e1cb-4e44-b989-d35609559463/resource/f4a75ba9-7721-4363-884d-c3820b0b917c/download/393625397fc043188a3f8237c1da1c6f.json';
const REQUEST_URL = 'http://gank.io/api/data/%E7%A6%8F%E5%88%A9/100/1';
let data = '';
let str = '';

function fetchDemo() {
    fetch(REQUEST_URL).then(function(response) {
        return response.json();
    }).then(function(json) {
      data = json.results;
      console.log(data.results);
      dataList();
    });
}

const dataList = () => {
  str += 
  `
    <img src=${data[0].url}>
  `;
  document.querySelector('#show-img-area').innerHTML = str; 
}

fetchDemo();