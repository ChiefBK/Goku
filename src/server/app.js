import Express from 'express';
import Path from 'path';
import Morgan from 'morgan';

let App = Express();
let Router = Express.Router();

Router.use(Morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

Router.use(Express.static(Path.resolve(__dirname, '../..', 'public')));

let allRequestNumber = 0;

Router.get('*', (req, res) => {
    const indexPath = Path.resolve(__dirname, '../..', 'public', 'index.html');
    console.log("IndexPath: " + indexPath);
    res.sendFile(indexPath);
});


App.use(Router);

App.listen(7777, function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:7777');
});