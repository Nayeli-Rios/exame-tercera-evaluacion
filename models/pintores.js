const mongoose = require ('mongoose');

let Schema = mongoose.Schema;

let PintoresSchema = new Schema({
    nombre:{type: String,
    required: [true, 'Requerimos el nombre']
},
    corriente:{
        type: String,
        required:[true, 'Requerimos la corriente']
    },
    nacionalidad:{
        type: String
    },
    pintura:{
        type: String
    }
},{collection:'Pintores'});

module.exports = mongoose.model('pintores', PintoresSchema);
