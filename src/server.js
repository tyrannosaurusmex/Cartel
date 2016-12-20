import express from 'express';
let app = express();

import handlebars from 'express-handlebars';
import Config from './Config';

app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars(
    {
        defaultLayout: 'main'
    }
));
app.locals.config = Config.getConfig();

// Controllers
require('./controllers/defaultController.js')(app);

app.listen(3000, () => {
    console.log('Server listening on Port 3000');
});