var express = require('express');
var router = express.Router();
let Parser = require('rss-parser');
let parser = new Parser();

router.get('/get',async function (req, res, next) {
  let feed = await parser.parseURL('https://techwiser.com/feed/');
  return res.json(feed.title);
//   var feedData = {websiteName:feed.title}
//   var feedChildData = feed.items.map(feeds => {
//     return {...feedData , title: feeds.title , link :feeds.link}
// })
                                                              
//   return res.json(feedChildData)

});

module.exports = router;                   
