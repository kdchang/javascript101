const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

request({
  url: 'https://www.ptt.cc/bbs/Soft_Job/index.html',
  method: 'GET',
}, function(err, httpResponse, body) {
  if (err) {
    console.log(err);
    return;
  }
  const $ = cheerio.load(body);
  const results = [];
  let titles = $('a');

  for(let i = 0; i < titles.length; i++) {
    console.log($(titles[0]).text());
    console.log($(titles[0]).attr('href'));
    results.push({ title: $(titles[i]).text(), link: $(titles[i]).attr('href') });
  }

  fs.writeFileSync('result.json', JSON.stringify(results));
  console.log(results);
})