let express = require('express');
let app = express();
let logger = require('morgan');

app.use(logger('dev'));
app.use(express.static(__dirname + '/../Frontend'));

let port = process.env.PORT || 1234;

app.get('/', function (req, res, next) {
    try {
        res.sendfile(__dirname + '/../Frontend/index.html')
    } catch (e) {
        next(e)
    }
});

app.listen(port, function () {
    console.log('Website listening on port: ' + port)
});