const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "ani",
  password: "suman1979",
  database: "rss",
});

const addBookmark = (req, res) => {
  try {
    let data = {
      articleLink: req.body.articleLink,
      userId: req.user.user_id,
      articleName: req.body.articleName,
    };
    let sql = "INSERT INTO Bookmark SET ?";
    let query = conn.query(sql, data, (err, result) => {
      if (err) throw err;
      return res.json({
        status: 200,
        error: null,
        response: "New Record is Added successfully",
      });
    });
  } catch (err) {
    console.log(err);
    return res.json({ status: 500, error: err });
  }
};

module.exports = { addBookmark };
