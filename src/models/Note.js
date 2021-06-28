const {Schema, model}=require('mongoose');


const NoteSchema = new Schema(
    {
     cod_animales:{
        type: Number,
        required: true,
     },
     nombre:{
        type: String,
        required: true,
     },
     nombre_padre:{
        type: String,
        required: true,
     },
     nombre_madre:{
        type: String,
        required: true,
     },

     procedencia_animal:{
        type: String,
        required: true,
     },

     fecha_nacimiento_animal:{
        type: String,
        required: true,
     },

     identificacion_animal:{
        type: String,
        required: true,
     },
     sexo_animal:{
        type: Number,
        required: true,
     },
     
     detalle_animal:{
        type: String,
        required: true,
     },

     proposito_animal:{
        type: String,
        required: true,
    },
     
     raza_animal:{
        type: String,
        required: true,
     },

     estado_animal:{
        type: String,
        required: true,
     },
     
     color_animal:{
        type: String,
        required: true,
     },
     estado_rep_animal:{
        type: String,
        required: true,
     },

     precio_compra:{
      type:String,
      required: true,
   },
     precio_venta:{
      type:String,
      required: true,        
   },
     descripcion:{
        type: String,
        required: true,
     },

     user:{
        type: String,
        required: true,      
     },

    },
    {
     timestamps: true,
      }
);
module.exports=model('Note',NoteSchema);