// let require = require('request-promise');//第三方的npm包
const fetch = require("node-fetch");
// const http = require("http");//引用内置库
let cheerio = require('cheerio');
// const { html } = require("cheerio");
//const { request } = require('http');

let url = 'https://movie.douban.com/top250'

//npm i cheerio

const main = async () => { //async 关键字
  fetch(url)
    .then(res => res.text())
    // .then(body => console.log(body));
    .then(body => {
      let $ = cheerio.load(body);
      let movieNodes = $('#content .item');
      console.log(movieNodes)
    });
}

main();
