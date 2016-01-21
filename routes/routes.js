var Q = require('q');
var multer  = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage, dest: './tmp/'});

var uploadFile = function(req, res) {
	console.log(req.file);
	res.send(req.file);
}
// routes.js
module.exports = function(app) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });
	app.post('/',upload.single('userfile'), uploadFile);	//.single('userfile') must match name of file in app.js -> formData.append("userfile",
}