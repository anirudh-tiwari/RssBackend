var express = require('express');
var router = express.Router();
let Parser = require('rss-parser');
let parser = new Parser();
const { getConnection } = require('../db')
 
router.get('/get', async (req, res) => {
    const query = getConnection()
    try {
        var sql=`select url from AddLink where id=${req.query.id}`;              
        var product = await query(sql);
        // console.log(product[0].url)
        let feed = await parser.parseURL(product[0].url);
        var feedChildData = feed.items.map(feeds => {
          return { title: feeds.title , link :feeds.link}
      })

     return res.json(feedChildData)

    }
    catch (err) {
                console.log(err)
                return res.json({ status: 500, error: err });
            }
    
})

module.exports = router;                   

