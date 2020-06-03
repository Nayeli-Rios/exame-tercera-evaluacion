
const express = require ('express');
const hbs = require ('hbs');
const mongoose = require ('mongoose');


const PUERTO = process.env.PORT || 3000;


let pintoresRouter = require('./routes/pintor');

const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');
app.use(express.static(__dirname + '/Public'));

app.use( '/', pintoresRouter);

mongoose.Promise = global.Promise;
const cadena ='mongodb+srv://Toledo:nayeliriosjuarez@nayeli-zzpqu.mongodb.net/video?retryWrites=true&w=majority'
mongoose.connect(cadena, {userNewUrlParsel: true, useUnifiedTepology: true})
.then (()=>{
    console.log('Conexion establecida')
})
.catch(err=> console.log(err));

app.listen(PUERTO, ()=>{
    console.log('Escuchando el puerto...')
});
