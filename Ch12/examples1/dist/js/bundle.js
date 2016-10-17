(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var bodyRef = document.querySelector('body');
bodyRef.innerHTML = '\n  <div class="container">\n    <h1 class="header">\u4E0D\u80FD\u518D\u7528 Facebook \u4E86\uFF01\uFF01</h1>\n    <div>\n      <span class="countdown">\u8DDD\u96E2\u806F\u8003\u53EA\u5269\uFF1A</span>\n      <span class="countdown" id="countdown"></span>\n    </div>\n    <br>\n    <a href="https://www.google.com"><button class="btn btn-default">\u5FEB\u4F86\u7528 Google XD</button></a>\n  </div>\n';
countdown();

function countdown() {
  var target_date = new Date("June 7, 2017").getTime();
  var days = void 0;
  var hours = void 0;
  var minutes = void 0;
  var seconds = void 0;
  var countdown = document.querySelector('#countdown');
  console.log(target_date);

  var init = setInterval(function () {
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
    if (seconds_left > 0) {
      days = parseInt(seconds_left / 86400);
      seconds_left = seconds_left % 86400;

      hours = parseInt(seconds_left / 3600);
      seconds_left = seconds_left % 3600;

      minutes = parseInt(seconds_left / 60);
      seconds = parseInt(seconds_left % 60);

      // format countdown string + set tag value
      countdown.className = 'countdown';
      countdown.innerHTML = days + "天, " + hours + "小時, " + minutes + "分, " + seconds + "秒";
    } else {
      countdown.className = 'countdown';
      countdown.innerHTML = "恭喜考完！XD";
      clearInterval(init);
    }
  }, 1000);
};

},{}]},{},[1]);
