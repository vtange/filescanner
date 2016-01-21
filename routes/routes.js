var Q = require('q');

// routes.js
module.exports = function(app) {
    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });
	app.post('/', function(req, res){
		console.log("got something")
		
	});
}