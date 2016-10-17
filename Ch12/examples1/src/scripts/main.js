const bodyRef = document.querySelector('body');
bodyRef.innerHTML = `
  <div class="container">
    <h1 class="header">不能再用 Facebook 了！！</h1>
    <div>
      <span class="countdown">距離聯考只剩：</span>
      <span class="countdown" id="countdown"></span>
    </div>
    <br>
    <a href="https://www.google.com"><button class="btn btn-default">快來用 Google XD</button></a>
  </div>
`
countdown();

function countdown() {
  const target_date = new Date("June 7, 2017").getTime();
  let days; 
  let hours;
  let minutes
  let seconds;
  const countdown = document.querySelector('#countdown');
  console.log(target_date);

  var init = setInterval(function () {
      var current_date = new Date().getTime();
      var seconds_left = (target_date - current_date) / 1000;
    if(seconds_left > 0){
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;
         
        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;
         
        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);
         
        // format countdown string + set tag value
        countdown.className = 'countdown';
        countdown.innerHTML = days + "天, " + hours + "小時, "
        + minutes + "分, " + seconds + "秒";  
    }
    else{
      countdown.className = 'countdown';
      countdown.innerHTML = "恭喜考完！XD";
      clearInterval(init); 
    }
  }, 1000);
};
