import Express from 'express';
import Path from 'path';

console.log("testetetste");

let app = Express();

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(7777, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:7777');
});