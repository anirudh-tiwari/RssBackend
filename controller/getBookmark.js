const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "ani",
  password: "suman1979",
  database: "rss",
});

const getBookmark = (req, res) => {
  try {
    let sql = ` select articleLink,articleName from Bookmark where userId=${req.user.user_id} `;
    let query = conn.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (err) {
    console.log(err);
    return res.json({ status: 500, error: err });
  }
};

module.exports = { getBookmark };
