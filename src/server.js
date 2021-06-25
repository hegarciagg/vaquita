const express=require('express');
const exphbs = require('express-handlebars');
const path=require('path');
const morgan=require('morgan');
//Initializations
const app = express();


//settings

app.set('port',process.env.PORT||8200);
app.set('views',path.join(__dirname,'views'));


app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.hbs'

}));
app.set('view engine','.hbs');


//Middlewares
 app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));

//Global Variables

//Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

//static files
app.use(express.static(path.join(__dirname,'public')));

module.exports= app; 