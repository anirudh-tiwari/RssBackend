const mysql = require("mysql");
const conn = mysql.createConnection({
    host: "localhost",
    user: "ani",
    password: "suman1979",
    database: "rss",
});

const
addLinkCreate = (req, res) => {
        try {
            let data = { name: req.body.name, url: req.body.url, userId: req.user.userId};
            let sql = "INSERT INTO AddLink SET ?";
            let query = conn.query(sql, data, (err, result) => {
                console.log(result)
                if (err) throw err;
                return res.json({ status: 200, error: null, response: "New Record is Added successfully" });
            });
        } catch (err) {
            console.log(err)
            return res.json({ status: 500, error: err });
        }
    }

module.exports = { addLinkCreate }