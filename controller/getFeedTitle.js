var express = require("express");
var router = express.Router();
let Parser = require("rss-parser");
let parser = new Parser();
const { getConnection } = require("../db");

// router.get("/get", async (req, res) => {
const getFeedTitle = async (req, res) => {
  const query = getConnection();
  try {
    var sql = `select id,url from AddLink where userId =${req.user.user_id}`;
    var product = await query(sql);
    let title = [];
    for (const pro of product) {
      var feed = await parser.parseURL(pro.url);
      title.push({ id: pro.id, title: feed.title });
      console.log({ id: pro.id, title: feed.title });
    }
    return res.json(title);
  } catch (err) {
    console.log(err);
    return res.json({ status: 500, error: err });
  }
};

module.exports = { getFeedTitle };
