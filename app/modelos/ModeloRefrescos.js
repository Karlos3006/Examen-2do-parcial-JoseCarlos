const mongoose=require('mongoose');

const RefrescosSchema = new mongoose.Schema({
    codigo:{
        type:Number,
        unique: true,
        required:true
    },
    nombre:{
        type:String,
        required:true,
    },
    descripcion:{
        type:String,
        required:true,
    },
    precio:{
        type:Number,
        required:true
    },
    Fecha_registro:{
        type: Date,
        default: Date.now 
    }
})
const Refresco=mongoose.model('Refrescos',RefrescosSchema);

module.exports=Refresco;