const { join } = require('path');

const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');

const { initializeFileSystem } = require('./files/fileExplorer');

require('dotenv').config();
initializeFileSystem();
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', join(__dirname, 'views'));

//Setting up handlebars
const hbs = exphbs.create({
  partialsDir: join(app.get('views'), 'partials'),
  extname: '.hbs',
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

//Middlewares
app.use(fileUpload({
  createParentPath: true,
}));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

//Importing routes
app.use('/drive', require('./routes/main'));
app.get('/', (req, res) => res.redirect('/drive'));

//Setting up static folder
app.use(express.static(join(__dirname, 'public')));

//Starting server
app.listen(app.get('port'), () => console.log(`Server running in port ${app.get('port')}`));