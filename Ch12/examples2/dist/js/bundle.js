(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var REQUEST_URL = 'http://163.29.157.32:8080/dataset/6a3e862a-e1cb-4e44-b989-d35609559463/resource/f4a75ba9-7721-4363-884d-c3820b0b917c/download/393625397fc043188a3f8237c1da1c6f.json';
var data = '';
var str = '';

function fetchDemo() {
  fetch(REQUEST_URL).then(function (response) {
    return response.json();
  }).then(function (json) {
    data = json;
    console.log(data);
    dataList();
  });
}

var dataList = function dataList() {
  str += '\n    <img src=' + data[1].ImageName + '>\n  ';
  document.querySelector('#show-img-area').innerHTML = str;
};

fetchDemo();

},{}]},{},[1]);
