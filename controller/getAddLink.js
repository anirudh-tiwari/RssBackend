const mysql = require("mysql");
const conn = mysql.createConnection({
    host: "localhost",
    user: "ani",
    password: "suman1979",
    database: "rss",
});

const
addLinkGet = (req, res) => {
        try {
            let sql = ` select name,url from AddLink where userId=${req.user.userId} `;
	        let query = conn.query(sql, (err, result) => {
		     if (err) throw err;                                                    
		    res.send(result);
	});
        } catch (err) {
            console.log(err)
            return res.json({ status: 500, error: err });
        }
    }

module.exports = { addLinkGet }